#!/bin/bash
# macOS ships Bash 3.2. Keep this script compatible with it.
set -euo pipefail

usage() {
    cat <<'HELP'
Usage: bash tools/deploy-to-production.sh [user@host] [options]

Build and deploy Climate Scheduler over SSH/SCP.

  user@host           SSH destination (default: root@homeassistant.local)
  --port PORT         SSH port (default: 22)
  --identity FILE     SSH private key (otherwise use SSH agent/config)
  --config-dir PATH   Remote HA config directory (default: /config)
  --legacy-scp        Use scp -O for SSH servers without SFTP support
  --no-bump           Keep the current manifest version
  -h, --help          Show this help

The remote config path must be absolute and contain only letters, digits,
underscore, dot, slash and hyphen, without '.' or '..' path components.
SSH must provide a POSIX shell and write access to the config directory.
The script keeps the latest installation backup under CONFIG/backups.
Home Assistant is not restarted automatically.
HELP
}

fail() { printf 'ERROR: %s\n' "$*" >&2; exit 1; }

SCRIPT_DIR=$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")" && pwd)
REPO_ROOT=$(cd -- "$SCRIPT_DIR/.." && pwd)
DESTINATION=root@homeassistant.local
SSH_PORT=22
IDENTITY=
CONFIG_DIR=/config
BUMP_VERSION=true
LEGACY_SCP=false

if [ "$#" -gt 0 ] && [[ "$1" != -* ]]; then
    DESTINATION=$1
    shift
fi
while [ "$#" -gt 0 ]; do
    case "$1" in
        --port|--identity|--config-dir)
            [ "$#" -ge 2 ] || fail "Missing value for $1"
            case "$1" in
                --port) SSH_PORT=$2 ;;
                --identity) IDENTITY=$2 ;;
                --config-dir) CONFIG_DIR=$2 ;;
            esac
            shift 2 ;;
        --legacy-scp) LEGACY_SCP=true; shift ;;
        --no-bump) BUMP_VERSION=false; shift ;;
        -h|--help) usage; exit 0 ;;
        *) fail "Unknown option: $1" ;;
    esac
done

# These values also cross the remote shell boundary. Limit them to safe tokens.
[[ "$DESTINATION" =~ ^[a-zA-Z0-9_][a-zA-Z0-9_.@-]*$ ]] || fail "Invalid SSH destination"
[[ "$SSH_PORT" =~ ^[0-9]+$ ]] && [ "$SSH_PORT" -ge 1 ] && [ "$SSH_PORT" -le 65535 ] || fail "Invalid SSH port"
CONFIG_DIR=${CONFIG_DIR%/}
[[ "$CONFIG_DIR" =~ ^/[a-zA-Z0-9_./-]+$ ]] || fail "Invalid remote config path"
case "$CONFIG_DIR/" in
    *'/../'*|*'/./'*|*'//'*) fail "Remote config path must not contain '.', '..' or empty components" ;;
esac
for tool in node npm ssh scp mktemp; do
    command -v "$tool" >/dev/null 2>&1 || fail "$tool is not available in PATH"
done
if [ -n "$IDENTITY" ]; then
    [ -f "$IDENTITY" ] || fail "SSH identity file does not exist: $IDENTITY"
fi
SSH_ARGS=(-p "$SSH_PORT")
SCP_ARGS=(-P "$SSH_PORT")
if [ -n "$IDENTITY" ]; then
    SSH_ARGS+=(-i "$IDENTITY")
    SCP_ARGS+=(-i "$IDENTITY")
fi
if [ "$LEGACY_SCP" = true ]; then SCP_ARGS+=(-O); fi

cd -- "$REPO_ROOT"
SOURCE="$REPO_ROOT/custom_components/climate_scheduler"
[ -f "$SOURCE/manifest.json" ] || fail "Integration source not found: $SOURCE"
printf 'Deploying Climate Scheduler to %s:%s\n' "$DESTINATION" "$CONFIG_DIR"
if [ ! -f node_modules/rollup/dist/bin/rollup ]; then
    printf 'Installing frontend dependencies...\n'
    if [ -f package-lock.json ]; then npm ci; else npm install; fi
fi
npm run build

LOCAL_STAGE=$(mktemp -d "${TMPDIR:-/tmp}/climate-scheduler.XXXXXX")
REMOTE_STAGE=
cleanup() {
    local result=$?
    trap - EXIT
    rm -rf -- "$LOCAL_STAGE"
    if [ -n "$REMOTE_STAGE" ]; then
        # The path came from our mktemp call and was checked before assignment.
        ssh "${SSH_ARGS[@]}" "$DESTINATION" "rm -rf -- '$REMOTE_STAGE'" </dev/null || true
    fi
    exit "$result"
}
trap cleanup EXIT
trap 'exit 130' INT
trap 'exit 143' TERM

# Match the Windows script: only four-component versions get a build increment.
node - "$SOURCE" "$BUMP_VERSION" <<'NODE'
const fs = require('fs');
const path = require('path');
const [source, bump] = process.argv.slice(2);
const manifestPath = path.join(source, 'manifest.json');
const raw = fs.readFileSync(manifestPath, 'utf8');
const manifest = JSON.parse(raw);
if (typeof manifest.version !== 'string' || !manifest.version) throw new Error('Missing manifest version');
const match = /^(\d+)\.(\d+)\.(\d+)\.(\d+)$/.exec(manifest.version);
if (bump === 'true' && match) {
    const nextVersion = `${match[1]}.${match[2]}.${match[3]}.${BigInt(match[4]) + 1n}`;
    console.log(`Incrementing build number: ${manifest.version} -> ${nextVersion}`);
    // Preserve formatting and every other manifest field.
    fs.writeFileSync(manifestPath, raw.replace(/("version"\s*:\s*")[^"]+(")/, (_, a, b) => a + nextVersion + b));
    manifest.version = nextVersion;
} else {
    console.log(`Keeping manifest version: ${manifest.version}`);
}
fs.writeFileSync(path.join(source, 'frontend', '.version'), manifest.version);
NODE

mkdir "$LOCAL_STAGE/package"
cp -R "$SOURCE/." "$LOCAL_STAGE/package/"
# Local Python cache files do not belong on the production server.
find "$LOCAL_STAGE/package" -type d -name __pycache__ -prune -exec rm -rf -- {} +
printf '%s' "$(date +%s)" > "$LOCAL_STAGE/package/.dev_version"

# SSH handles authentication and host verification using the normal SSH config.
remote_path=$(ssh "${SSH_ARGS[@]}" "$DESTINATION" "mkdir -p '$CONFIG_DIR/custom_components' && mktemp -d '$CONFIG_DIR/custom_components/.climate_scheduler_deploy.XXXXXX'")
remote_suffix=${remote_path#"$CONFIG_DIR/custom_components/.climate_scheduler_deploy."}
[ "$remote_suffix" != "$remote_path" ] && [[ "$remote_suffix" =~ ^[a-zA-Z0-9]+$ ]] || fail "Unexpected remote staging path: $remote_path"
REMOTE_STAGE=$remote_path
printf 'Uploading files with scp...\n'
scp "${SCP_ARGS[@]}" -r "$LOCAL_STAGE/package" "$DESTINATION:$REMOTE_STAGE/"

# Once installation starts, retain staging on failure for recovery.
install_stage=$REMOTE_STAGE
REMOTE_STAGE=
ssh "${SSH_ARGS[@]}" "$DESTINATION" "sh -s -- '$CONFIG_DIR' '$install_stage'" <<'REMOTE'
set -eu
config=$1
stage=$2
target="$config/custom_components/climate_scheduler"
backup=
[ -f "$stage/package/manifest.json" ]
[ -f "$stage/package/frontend/.version" ]
[ ! -L "$target" ] || { echo 'Refusing to replace a symlink installation' >&2; exit 1; }
if [ -e "$target" ]; then
    [ -d "$target" ] || { echo 'Target exists but is not a directory' >&2; exit 1; }
    mkdir -p "$config/backups"
    backup="$config/backups/climate_scheduler_$(date +%Y%m%d_%H%M%S)_${stage##*.}"
    cp -Rp "$target" "$backup"
    printf 'Backup created: %s\n' "$backup"
    mv "$target" "$stage/previous"
fi
if ! mv "$stage/package" "$target"; then
    if [ -d "$stage/previous" ]; then mv "$stage/previous" "$target"; fi
    echo 'Installation failed; previous installation restored.' >&2
    exit 1
fi
printf 'Deployment verified: %s files\n' "$(find "$target" -type f | wc -l | tr -d ' ')"
# Prune only owned backup directories, after a successful installation.
if [ -n "$backup" ]; then
    for old in "$config"/backups/climate_scheduler_*; do
        [ -d "$old" ] && [ ! -L "$old" ] && [ "$old" != "$backup" ] || continue
        rm -rf -- "$old"
    done
fi
rm -rf -- "$stage"
REMOTE

printf '\nDeployment complete. Reload the integration or restart Home Assistant.\n'
printf 'The local manifest and frontend/.version retain the deployed version.\n'
