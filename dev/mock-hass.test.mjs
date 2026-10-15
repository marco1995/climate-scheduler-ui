import { test } from 'node:test';
import assert from 'node:assert/strict';
import { createDemoHass } from './mock-hass.mjs';

test('schedule edits persist and profile switching restores the selected schedule', async () => {
  const values = new Map();
  const storage = { getItem: key => values.get(key), setItem: (key, value) => values.set(key, value) };
  let hass = createDemoHass(storage);
  const call = (service, service_data) => hass.callWS({ type: 'call_service', domain: 'climate_scheduler', service, service_data });
  const edited = [{ time: '00:00', temp: 19.5 }];
  await call('set_group_schedule', { schedule_id: 'Wohnbereich', nodes: edited, day: 'all_days' });
  hass = createDemoHass(storage);
  assert.deepEqual((await call('get_schedule', { schedule_id: 'Wohnbereich' })).response.nodes, edited);
  await call('set_active_profile', { schedule_id: 'Wohnbereich', profile_name: 'Urlaub' });
  assert.equal((await call('get_schedule', { schedule_id: 'Wohnbereich' })).response.nodes[0].temp, 16);
  await call('set_active_profile', { schedule_id: 'Wohnbereich', profile_name: 'Default' });
  assert.deepEqual((await call('get_schedule', { schedule_id: 'Wohnbereich' })).response.nodes, edited);
  const result = await call('get_groups', {});
  result.response.groups.Wohnbereich.entities.length = 0;
  assert.equal((await call('get_groups', {})).response.groups.Wohnbereich.entities.length, 2);
  await assert.rejects(call('reload_integration', {}), /Nur mit Home Assistant/);
});

test('unmonitored rooms can be monitored and moved between groups', async () => {
  const hass = createDemoHass({ getItem: () => null, setItem: () => {} });
  const call = (name, data) => hass.callService('climate_scheduler', name, data);
  await call('set_ignored', { schedule_id: 'climate.bad', ignored: false });
  await call('add_to_group', { schedule_id: 'Wohnbereich', entity_id: 'climate.bad' });
  const { response } = await hass.callWS({ type: 'call_service', domain: 'climate_scheduler', service: 'get_groups' });
  assert.ok(response.groups.Wohnbereich.entities.includes('climate.bad'));
  assert.deepEqual(response.groups['climate.bad'].entities, []);
  const history = await hass.callWS({ type: 'history/history_during_period', entity_ids: ['climate.bad'], start_time: '2026-10-15T00:00:00Z', end_time: '2026-10-15T12:00:00Z' });
  assert.equal(history['climate.bad'].length, 49);
  assert.equal(history['climate.bad'][48].last_updated, '2026-10-15T12:00:00.000Z');
});
