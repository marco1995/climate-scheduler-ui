import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import vm from 'node:vm';
import ts from 'typescript';

const appSource = readFileSync(new URL('../custom_components/climate_scheduler/frontend/app.js', import.meta.url), 'utf8');
function appFunctions(names) {
  const file = ts.createSourceFile('app.js', appSource, ts.ScriptTarget.Latest, true, ts.ScriptKind.JS);
  return file.statements.filter(n => ts.isFunctionDeclaration(n) && names.includes(n.name?.text)).map(n => n.getText(file)).join('\n');
}
function saveRuntime() {
  const calls = [];
  const timers = new Map();
  let nextTimer = 0;
  const ctx = vm.createContext({
    console, Map, JSON,
    currentGroup: 'A', editingProfile: null, currentDay: 'mon', currentScheduleMode: 'individual',
    currentNodes: [{time: '06:00', temp: 20}],
    allGroups: { A: {active_profile: 'Winter', enabled: true}, B: {active_profile: 'Away', enabled: false} },
    pendingScheduleSaves: new Map(), pendingSaveNeeded: false, saveTimeout: null,
    isLoadingSchedule: false, isSaveInProgress: false, SAVE_DEBOUNCE_MS: 300,
    getDocumentRoot: () => ({querySelector: () => null}),
    getGraphNodes: () => ctx.currentNodes,
    setTimeout: cb => { timers.set(++nextTimer, cb); return nextTimer; },
    clearTimeout: id => timers.delete(id),
    csT: text => text, showToast() {},
    haAPI: {
      async setGroupSchedule(...args) { calls.push(['save', ...JSON.parse(JSON.stringify(args))]); },
      async enableGroup(name) { calls.push(['enable', name]); },
      async disableGroup(name) { calls.push(['disable', name]); }
    }
  });
  vm.runInContext(appFunctions(['saveSchedule', 'performSave', 'flushPendingSaveIfNeeded']), ctx);
  return {ctx, calls, timers};
}

test('debounced edits retain their group, profile, mode, day and node data after switching', async () => {
  const {ctx, calls} = saveRuntime();
  await ctx.saveSchedule();
  ctx.currentNodes[0].temp = 99;
  ctx.currentGroup = 'B'; ctx.editingProfile = 'Summer'; ctx.currentDay = 'weekend'; ctx.currentScheduleMode = '5/2';
  ctx.currentNodes = [{time: '09:00', temp: 18}];
  await ctx.saveSchedule();
  await ctx.performSave();
  assert.deepEqual(calls.filter(c => c[0] === 'save'), [
    ['save', 'A', [{time: '06:00', temp: 20}], 'mon', 'individual', 'Winter'],
    ['save', 'B', [{time: '09:00', temp: 18}], 'weekend', '5/2', 'Summer']
  ]);
  assert.deepEqual(calls.filter(c => c[0] !== 'save'), [['enable', 'A'], ['disable', 'B']]);
  assert.equal(ctx.allGroups.A.schedules.mon[0].temp, 20);
  assert.equal(ctx.allGroups.B.schedules, undefined, 'editing Summer cannot replace active Away cache');
});

test('edits arriving during an awaited save are serialized without retargeting the first save', async () => {
  const {ctx, calls} = saveRuntime();
  let release;
  const blocked = new Promise(resolve => { release = resolve; });
  const original = ctx.haAPI.setGroupSchedule;
  ctx.haAPI.setGroupSchedule = async (...args) => { await original(...args); if (args[0] === 'A') await blocked; };
  await ctx.saveSchedule();
  const running = ctx.performSave();
  ctx.currentGroup = 'B'; ctx.currentDay = 'all_days'; ctx.currentScheduleMode = 'all_days';
  ctx.currentNodes = [{time: '00:00', temp: 16}];
  await ctx.saveSchedule();
  await ctx.performSave(); // must not start a concurrent writer
  release();
  await running;
  assert.deepEqual(calls.filter(c => c[0] === 'save').map(c => c[1]), ['A', 'B']);
  assert.deepEqual(calls.filter(c => c[0] === 'enable' || c[0] === 'disable'), [['enable', 'A'], ['disable', 'B']]);
  assert.equal(ctx.pendingScheduleSaves.size, 0);
});

test('loading delays captured writes and coalesces only matching destinations', async () => {
  const {ctx, calls} = saveRuntime();
  ctx.isLoadingSchedule = true;
  await ctx.saveSchedule();
  ctx.currentNodes = [{time: '06:00', temp: 22}];
  await ctx.saveSchedule();
  ctx.currentDay = 'tue';
  ctx.currentNodes = [{time: '08:00', temp: 18}];
  await ctx.saveSchedule();
  await ctx.performSave();
  assert.equal(calls.length, 0);
  ctx.isLoadingSchedule = false;
  await ctx.performSave();
  assert.deepEqual(calls.filter(c => c[0] === 'save').map(c => [c[3], c[2][0].temp]), [['mon', 22], ['tue', 18]]);
});

test('rounding at midnight produces canonical HH:MM rather than 23:60 or 24:00', () => {
  const ctx = vm.createContext({currentSchedule: [], graphSnapStep: 0.5, normalizeTemperature: v => v});
  vm.runInContext(appFunctions(['keyframesToScheduleNodes', 'applyOptionalStringField', 'applyOptionalNumberField']), ctx);
  for (const time of [23.999999, 24, 24.1, 23 + 59.8 / 60]) {
    assert.equal(ctx.keyframesToScheduleNodes([{time, value: 20}])[0].time, '23:59');
  }
  assert.equal(ctx.keyframesToScheduleNodes([{time: -0.1, value: 20}])[0].time, '00:00');
});

function timelineRuntime() {
  class MouseEvent {
    constructor(x, y) { this.clientX = x; this.clientY = y; this.offsetX = x; this.offsetY = y; }
    preventDefault() {}
    stopPropagation() {}
  }
  class CustomEvent { constructor(type, options = {}) { this.type = type; Object.assign(this, options); } }
  class LitElement {
    constructor() { this.events = []; }
    dispatchEvent(event) { this.events.push(event); return true; }
    requestUpdate() {}
  }
  const decorator = () => () => {};
  const code = ts.transpileModule(readFileSync(new URL('../src/keyframe-timeline.ts', import.meta.url), 'utf8'), {
    compilerOptions: {module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020, experimentalDecorators: true}
  }).outputText;
  const ctx = vm.createContext({
    exports: {}, MouseEvent, CustomEvent, console,
    window: {setTimeout: () => 1, clearTimeout() {}}, setTimeout: () => 1,
    require(name) {
      if (name === 'lit') return {LitElement, html: () => '', css: () => ''};
      if (name === 'lit/decorators.js') return {customElement: decorator, property: decorator, state: decorator};
      if (name === './localize') return {t: value => value, getLanguage: () => 'en'};
      if (name === './temperature-scale') return {temperatureTicks: () => []};
      throw new Error(name);
    }
  });
  vm.runInContext(code, ctx); // TouchEvent is intentionally absent, like desktop Firefox.
  const timeline = new ctx.exports.KeyframeTimeline();
  timeline.canvas = {getBoundingClientRect: () => ({left: 0, top: 0, width: 240, height: 100})};
  timeline.getGraphDimensions = () => ({leftMargin: 0, yAxisWidth: 0, rightMargin: 0, topMargin: 0,
    bottomMargin: 0, graphHeight: 100, graphWidth: 240, canvasWidthCSS: 240});
  timeline.drawTimeline = () => {};
  timeline.queueHoverTooltipRender = () => {};
  timeline.collapsed = false; timeline.readonly = false; timeline.duration = 24; timeline.slots = 96;
  timeline.minValue = 5; timeline.maxValue = 30; timeline.snapValue = 0.5;
  return {timeline, MouseEvent};
}

for (const editor of ['active', 'profile']) {
  test(`${editor} timeline selects, drags and deletes without a TouchEvent constructor`, () => {
    const {timeline: t, MouseEvent} = timelineRuntime();
    t.keyframes = [{time: 0, value: 10}, {time: 12, value: 17.5, hvac_mode: 'heat', noChange: true}];
    t.handleCanvasClick(new MouseEvent(120, 50));
    assert.equal(t.selectedKeyframeIndex, 1);
    t.handleCanvasMouseDown(new MouseEvent(120, 50));
    t.handleCanvasMouseMove(new MouseEvent(180, 30));
    t.handleCanvasMouseUp(new MouseEvent(180, 30));
    assert.equal(t.keyframes[1].time, 18);
    assert.equal(t.keyframes[1].value, 22.5);
    assert.equal(t.keyframes[1].hvac_mode, 'heat', 'dragging must preserve climate metadata');
    assert.equal(t.keyframes[1].noChange, true);
    assert.ok(t.events.some(e => e.type === 'keyframe-moved'));
    t.handleCanvasContextMenu(new MouseEvent(180, 30));
    assert.equal(t.keyframes.length, 1);
    assert.ok(t.events.some(e => e.type === 'keyframe-deleted'));
  });
}

test('segment snapping at the right edge cannot reintroduce 24:00', () => {
  const {timeline: t, MouseEvent} = timelineRuntime();
  t.keyframes = [{time: 20, value: 20}, {time: 23, value: 20}];
  t.draggingSegment = {startIndex: 0, endIndex: 1, initialStartTime: 20, initialEndTime: 23, initialPointerX: 200};
  t.dragStartX = 200;
  t.handleCanvasMouseMove(new MouseEvent(240, 20));
  assert.ok(t.keyframes[1].time < 24);
});

test('non-admin profile event denial leaves the API usable, other errors remain visible', async () => {
  const ctx = vm.createContext({console});
  const source = readFileSync(new URL('../custom_components/climate_scheduler/frontend/ha-api.js', import.meta.url), 'utf8');
  vm.runInContext(source + '\nglobalThis.API = HomeAssistantAPI;', ctx);
  const api = new ctx.API();
  const hass = {connection: {subscribeEvents: async () => { throw {code: 'unauthorized'}; }},
    states: {'climate.room': {entity_id: 'climate.room'}}};
  api.setHassObject(hass);
  assert.equal(await api.subscribeToEvents('climate_scheduler_profile_changed', () => {}), null);
  assert.equal((await api.getClimateEntities())[0].entity_id, 'climate.room');
  hass.connection.subscribeEvents = async () => { throw new Error('disconnected'); };
  await assert.rejects(api.subscribeToEvents('climate_scheduler_profile_changed', () => {}), /disconnected/);
  const unsubscribe = () => {};
  hass.connection.subscribeEvents = async () => unsubscribe;
  assert.equal(await api.subscribeToEvents('climate_scheduler_profile_changed', () => {}), unsubscribe);
});
