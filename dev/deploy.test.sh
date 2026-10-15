#!/bin/bash
# Offline deployment regression: real file operations, local SSH/SCP doubles.
set -euo pipefail
repo=$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")/.." && pwd)
fixture=$(mktemp -d "${TMPDIR:-/tmp}/climate-deploy-test.XXXXXX")
trap 'rm -rf -- "$fixture"' EXIT
mkdir -p "$fixture/repo/tools" "$fixture/repo/custom_components/climate_scheduler/frontend" \
    "$fixture/repo/node_modules/rollup/dist/bin" "$fixture/bin" \
    "$fixture/config/custom_components/climate_scheduler"
cp "$repo/tools/deploy-to-production.sh" "$fixture/repo/tools/"
printf '{"version":"1.2.3.4","domain":"climate_scheduler"}\n' > "$fixture/repo/custom_components/climate_scheduler/manifest.json"
printf 'new frontend\n' > "$fixture/repo/custom_components/climate_scheduler/frontend/app.js"
printf 'old install\n' > "$fixture/config/custom_components/climate_scheduler/old.py"
touch "$fixture/repo/node_modules/rollup/dist/bin/rollup"
cat > "$fixture/bin/npm" <<'NPM'
#!/bin/bash
exit 0
NPM
cat > "$fixture/bin/ssh" <<'SSH'
#!/bin/bash
set -eu
while [[ "$1" == -* ]]; do shift 2; done
[ "$1" = offline-test ] || exit 90
shift
exec /bin/sh -c "$1"
SSH
cat > "$fixture/bin/scp" <<'SCP'
#!/bin/bash
set -eu
[ "${FAIL_SCP:-false}" != true ] || exit 91
while [[ "$1" == -* ]]; do
    case "$1" in -P|-i) shift 2 ;; -r|-O) shift ;; *) exit 92 ;; esac
done
source=$1
target=${2#offline-test:}
[ "$target" != "$2" ] || exit 93
cp -R "$source" "$target"
SCP
chmod +x "$fixture/bin/npm" "$fixture/bin/ssh" "$fixture/bin/scp"
export PATH="$fixture/bin:$PATH"
script="$fixture/repo/tools/deploy-to-production.sh"
config="$fixture/config"
bash "$script" offline-test --config-dir "$config" --port 2222 --legacy-scp
[ "$(cat "$config/custom_components/climate_scheduler/frontend/.version")" = 1.2.3.5 ]
[ -f "$config/custom_components/climate_scheduler/.dev_version" ]
[ ! -e "$fixture/repo/custom_components/climate_scheduler/.dev_version" ]
[ ! -e "$config/custom_components/climate_scheduler/old.py" ]
backups=("$config"/backups/climate_scheduler_*)
[ "${#backups[@]}" = 1 ]
[ -f "${backups[0]}/old.py" ]
bash "$script" offline-test --config-dir "$config" --no-bump
[ "$(cat "$config/custom_components/climate_scheduler/frontend/.version")" = 1.2.3.5 ]
backups=("$config"/backups/climate_scheduler_*)
[ "${#backups[@]}" = 1 ]
before=$(cksum "$config/custom_components/climate_scheduler/manifest.json")
if FAIL_SCP=true bash "$script" offline-test --config-dir "$config"; then
    echo 'Expected upload failure' >&2
    exit 1
fi
[ "$(cksum "$config/custom_components/climate_scheduler/manifest.json")" = "$before" ]
stages=("$config"/custom_components/.climate_scheduler_deploy.*)
[ ! -e "${stages[0]}" ]
if bash "$script" offline-test --config-dir /config/../other; then exit 1; fi
printf 'Offline deployment tests passed.\n'
