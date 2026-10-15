import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import vm from 'node:vm';
import ts from 'typescript';

function loadTs(name, globals = {}) {
  const source = readFileSync(new URL(`../src/${name}.ts`, import.meta.url), 'utf8');
  const output = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 } }).outputText;
  const context = { exports: {}, ...globals };
  vm.runInNewContext(output, context);
  return context.exports;
}

test('temperature ticks are readable in Celsius, Fahrenheit and narrow ranges', () => {
  const { temperatureTicks } = loadTs('temperature-scale');
  assert.deepEqual([...temperatureTicks(5, 30)], [5, 10, 15, 20, 25, 30]);
  assert.deepEqual([...temperatureTicks(41, 86)], [50, 60, 70, 80]);
  assert.deepEqual([...temperatureTicks(19, 20)], [19, 19.2, 19.4, 19.6, 19.8, 20]);
  assert.deepEqual([...temperatureTicks(-10, 10)], [-10, -5, 0, 5, 10]);
  assert.equal(temperatureTicks(20, 20).length, 0);
});

test('translations prefer HA locale, preserve names and fall back to English', () => {
  const hass = { locale: { language: 'de-AT' }, language: 'en' };
  const { t, getLanguage } = loadTs('localize', { window: { climateSchedulerPanelRoot: { hass } }, document: { documentElement: { lang: 'en' } } });
  assert.equal(getLanguage(), 'de-AT');
  assert.equal(t('Save'), 'Speichern');
  assert.equal(t('Start monitoring Bad <oben>?\n\nThis entity will be managed by the scheduler again.'), 'Zeitsteuerung für „Bad <oben>“ aktivieren?\n\nDieses Gerät wird wieder vom Zeitplan gesteuert.');
  assert.equal(t('Delete profile "Winter"?'), 'Profil „Winter“ löschen?');
  assert.equal(t('Unknown device preset'), 'Unknown device preset');
  assert.equal(t('constructor'), 'constructor');
  assert.equal(t('Save', 'fr'), 'Save');
  hass.locale.language = 'en';
  assert.equal(t('Save'), 'Save');
});

test('German maintenance messages preserve names, filenames and multiline lists', () => {
  const { t } = loadTs('localize');
  const de = message => t(message, 'de-AT');
  assert.equal(de('Editing Profile: Winter $& <oben>'), 'Profil bearbeiten: Winter $& <oben>');
  assert.equal(de('Diagnostics saved to report-2026.json'), 'Diagnose gespeichert unter report-2026.json');
  assert.equal(de('Graph snap step set to 0.5°'), 'Diagrammraster auf 0.5° eingestellt');
  assert.equal(de('Deleted 3 sensor entities. Integration reloaded. Errors: 1.'), '3 Sensorentitäten gelöscht. Integration neu geladen. Fehler: 1.');
  assert.equal(de('Found 2 orphaned entities:\n\n• climate.bad\n• climate.wohnzimmer\n\nThese entities no longer have matching groups or climate entities in storage.\n\nDelete these entities?'), '2 verwaiste Entitäten gefunden:\n\n• climate.bad\n• climate.wohnzimmer\n\nDiesen Entitäten sind keine gespeicherten Gruppen oder Klimageräte mehr zugeordnet.\n\nDiese Entitäten löschen?');
  assert.equal(de('Clear all nodes'), 'Alle Schaltpunkte löschen');
  assert.equal(t('Clear all nodes', 'en'), 'Clear all nodes');
});

test('all explicitly localized static UI strings have dictionary entries', () => {
  const dictionarySource = readFileSync(new URL('../src/localize.ts', import.meta.url), 'utf8');
  const start = dictionarySource.indexOf('{', dictionarySource.indexOf('const de:'));
  const dictionary = JSON.parse(dictionarySource.slice(start, dictionarySource.indexOf('\n};', start) + 2));
  for (const file of ['src/panel.ts', 'src/climate-scheduler-card.ts', 'src/climate-dialog.ts', 'src/keyframe-timeline.ts', 'custom_components/climate_scheduler/frontend/app.js']) {
    const source = ts.createSourceFile(file, readFileSync(new URL(`../${file}`, import.meta.url), 'utf8'), ts.ScriptTarget.Latest, true);
    function visit(node) {
      if (ts.isCallExpression(node) && ['t', 'this._t', 'csT', 'showToast', 'schedulerAlert', 'schedulerConfirm'].includes(node.expression.getText(source))) {
        const message = node.arguments[0];
        if (message && (ts.isStringLiteral(message) || ts.isNoSubstitutionTemplateLiteral(message)) && /[a-zA-Z]{2}/.test(message.text)) {
          assert.ok(Object.hasOwn(dictionary, message.text), `${file}: missing translation for ${message.text}`);
        }
      }
      ts.forEachChild(node, visit);
    }
    visit(source);
  }
});

// Minimal DOM fixture for promise/queue/cancellation semantics, independent of browser layout.
function dialogs() {
  class Element {
    constructor(tag) { this.tag = tag; this.children = []; this.handlers = {}; this.returnValue = ''; this.isConnected = true; }
    append(...children) { for (const child of children) { child.parent = this; this.children.push(child); } }
    setAttribute() {}
    addEventListener(type, handler) { this.handlers[type] = handler; }
    showModal() { this.open = true; }
    close(value = '') { this.returnValue = value; this.open = false; this.handlers.close(); }
    remove() { this.parent.children = this.parent.children.filter(child => child !== this); }
    focus() { this.focused = true; }
    select() { this.selected = true; }
  }
  const root = new Element('panel');
  const focus = new Element('button');
  const window = { climateSchedulerPanelRoot: root, climateSchedulerLocalize: value => value };
  const document = { body: root, activeElement: focus, createElement: tag => new Element(tag) };
  vm.runInNewContext(readFileSync(new URL('../custom_components/climate_scheduler/frontend/ui-dialogs.js', import.meta.url), 'utf8'), { window, document });
  return { window, root, focus };
}

test('confirmation waits, cancellation is false and acceptance is true', async () => {
  const { window, root, focus } = dialogs();
  let changed = false;
  const cancel = window.schedulerConfirm('Delete?').then(accepted => { if (accepted) changed = true; return accepted; });
  await Promise.resolve();
  assert.equal(changed, false);
  root.children[0].close(); // Escape yields an empty returnValue.
  assert.equal(await cancel, false);
  assert.equal(changed, false);
  assert.equal(focus.focused, true);
  const accept = window.schedulerConfirm('Continue?');
  await Promise.resolve();
  root.children[0].children[0].handlers.submit({ preventDefault() {} });
  assert.equal(await accept, true);
  assert.equal(root.children.length, 0);
});

test('prompts preserve input, cancel returns null and dialogs are serialized', async () => {
  const { window, root } = dialogs();
  const first = window.schedulerPrompt('Name', 'Winter');
  const second = window.schedulerPrompt('Name', 'Summer');
  await Promise.resolve();
  assert.equal(root.children.length, 1);
  const form = root.children[0].children[0];
  const input = form.children.find(child => child.tag === 'label').children[0];
  assert.equal(input.value, 'Winter');
  input.value = 'Urlaub <2026>';
  root.children[0].close('accept');
  assert.equal(await first, 'Urlaub <2026>');
  await Promise.resolve();
  root.children[0].close('cancel');
  assert.equal(await second, null);
});

test('runtime has no blocking browser dialogs or untranslated template expressions in strings', () => {
  const source = ts.createSourceFile('app.js', readFileSync(new URL('../custom_components/climate_scheduler/frontend/app.js', import.meta.url), 'utf8'), ts.ScriptTarget.Latest, true, ts.ScriptKind.JS);
  function visit(node) {
    if (ts.isCallExpression(node)) {
      const name = node.expression.getText(source);
      assert.ok(!['confirm', 'alert', 'prompt'].includes(name), `Browser dialog: ${name}`);
      if (/^scheduler(Confirm|Alert|Prompt)$/.test(name)) assert.ok(ts.isAwaitExpression(node.parent), `${name} must be awaited`);
    }
    if (ts.isStringLiteral(node)) assert.ok(!node.text.includes('${csT('), 'Translation must be interpolated');
    ts.forEachChild(node, visit);
  }
  visit(source);
});
