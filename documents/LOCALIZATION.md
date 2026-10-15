# UI localization

`src/localize.ts` provides the shared UI dictionary and `t(message)` helper.
The panel makes the same translator available to the runtime application and
its confirmation dialogs. Compiled Lit components import it directly.

Language selection: Home Assistant `hass.locale.language`, then `hass.language`,
then the document language, with English as the default. German regional variants
such as `de-AT` use the German dictionary. Reload the panel after changing the
Home Assistant language to update all existing static labels.

German translations cover scheduler and climate controls, advanced settings, help,
axis labels, tooltips, card loading/error states, notifications, confirmations and
maintenance/cleanup dialogs. Parameterized messages preserve inserted names and
filenames. Product names, device/profile names, raw diagnostic traces, external error
details and unknown device-specific presets remain unchanged. Stored values and
service payloads are never translated.

Add display text to the dictionary and call `t()` (or `csT()` in `app.js`) at the
rendering boundary. For dynamic messages, use whole-message patterns and keep user
names intact. Dialog messages use `textContent`, never HTML interpolation.

Build with `npm run build`. Run the UI regression checks with
`node --test dev/ui.test.mjs dev/mock-hass.test.mjs`.
