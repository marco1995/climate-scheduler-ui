# Climate Scheduler - TypeScript Build Setup

This project now uses TypeScript with Lit for the frontend card component.

## Prerequisites

- Node.js (v18 or later)
- npm

## Setup

Install dependencies:
```bash
npm install
```

## Development

### Local design preview (no Home Assistant required)

```bash
npm install
npm run dev
```

Open http://127.0.0.1:5173 in your browser. The preview loads the real panel
with simulated rooms, groups, profiles, schedules and temperature history.
Use the toolbar to switch light/dark mode or reset the demo. Changes to demo
schedules and settings are saved in this browser's local storage.

TypeScript components are built on startup and watched for changes. Reload
the browser after editing TypeScript, JavaScript or CSS. Use browser developer
tools' device emulation to check mobile layouts. Stop with Ctrl+C.
To use another port in PowerShell: `$env:PORT=5174; npm run dev`.

The demo does not connect to HA or control real devices. Device commands and
advance status are simulated; actual scheduling, events, diagnostics and
backend maintenance require Home Assistant. Unsupported actions show an error.
All demo code lives under `dev/` and is not loaded by the production panel.

### Building

Build TypeScript files:
```bash
npm run build
```

Watch mode for development:
```bash
npm run watch
```

Type checking only (no build):
```bash
npm run type-check
```

### Deployment

The deployment script automatically builds before deploying:
```powershell
.\deploy-to-production.ps1
```

### Releasing

The release script automatically builds before creating the release:
```powershell
.\release.ps1 1.0.5
```

The built JavaScript files are committed as part of the release, ensuring users always get the compiled code.

## Project Structure

```
src/
  climate-scheduler-card.ts  # TypeScript source for the card
custom_components/
  climate_scheduler/
    frontend/
      climate-scheduler-card.js  # Built output (generated, do not edit)
      climate-scheduler-card.js.map  # Source map
      panel.js  # Vanilla JS (not built)
      app.js  # Vanilla JS (not built)
      graph.js  # Vanilla JS (not built)
      ha-api.js  # Vanilla JS (not built)
      styles.css
```

## Technologies

- **Lit 3.x** - Web components library with reactive properties
- **TypeScript 5.x** - Type-safe JavaScript
- **Rollup** - Module bundler
- **Decorators** - TypeScript decorators for cleaner component definition

## Notes

- Only the card component uses TypeScript currently
- Panel.js and other files remain vanilla JavaScript  
- Lit is bundled into the output for compatibility
- The build outputs ES2020 JavaScript
