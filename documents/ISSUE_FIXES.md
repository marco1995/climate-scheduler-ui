# Issue fixes — 2026-10-15

Changes implement the nine prioritized packages from the issue review.

| Issues | Implemented behavior |
| --- | --- |
| #194, #193 | Group limits follow member limits in HA system units. Scheduled and advanced targets are clamped to member limits. Coldest/warmest sensors declare the unit of their source values. Service targets pass through in system units without another conversion. |
| #187 | Debounced saves capture group, profile, day, mode, enabled state and copied nodes before asynchronous work. Saves are serialized and only identical destinations coalesce. Same-named devices receive distinct group names. |
| #168, #169, #160 | Intermediate migration saves cannot initialize global profiles or synchronize partially migrated groups. Climate entity updates expose the global profile registry and selected global profile. |
| #189 | A manual target remains visible and holds members until the next real node, including day changes and empty days. Profile changes, advance, cancel and disabling through the group climate entity clear the applicable hold. |
| #170 | Touch detection works without a global TouchEvent constructor. Dragging preserves the node's climate metadata. |
| #186 | End-of-day values normalize to 23:59 during input validation, loading and saving. Minute rounding and segment snapping cannot generate 23:60 or 24:00. |
| #196 | Registration retains one bundled resource, removes all known duplicates and legacy paths, and updates the retained resource in place. Unrelated paths are preserved. |
| #199, #173 | Denied optional profile-event subscriptions do not abort panel startup. Other connection failures still surface. HA permission checks remain in place. |
| #190 | Unmonitored devices and single-device group choices show entity IDs. Monitored member names expose their entity ID as a tooltip. |

## Scope and data handling

- Global profiles remain intentionally shared. Editing a shared profile updates every group selecting it; distinct profiles remain independent.
- Existing legacy profile copies remain available for comparison. Previously corrupted global profiles are not automatically replaced: they may contain subsequent intentional edits. The migration fix prevents new corruption; restoring old data requires comparing retained legacy profiles or a backup.
- When no future weekly node exists, a manual hold has no expiry. It can be cleared by cancel, profile change, advance or disabling through the group climate entity. Manual holds are runtime state and reset on integration reload.
- #195 and #174 describe related card-loading symptoms. Resource deduplication addresses one cause, but those reports have not been independently reproduced.

## Verification

Run from the repository root:

```powershell
python -m unittest discover -s dev -p '*_test.py'
node dev/issues.test.mjs
node dev/ui.test.mjs
node dev/mock-hass.test.mjs
npm run type-check
npm run build
```

All 29 tests pass (12 backend, 8 issue frontend, 7 existing UI, 2 demo).
Backend tests execute production modules using HA boundary adapters. Frontend
issue tests execute production functions/components in a VM with minimal DOM
adapters, including a desktop environment without TouchEvent. These checks do
not exercise a running Home Assistant server or real Firefox/Safari engines.
Live verification is still needed for non-admin accounts, hardware service
calls and browser interaction. No integration deployment was performed.
