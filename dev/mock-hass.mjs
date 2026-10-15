export const STORAGE_KEY = 'climate-scheduler-demo-v1';
const copy = value => structuredClone(value);
const nodes = [
  { time: '00:00', temp: 17 }, { time: '06:30', temp: 21 },
  { time: '09:00', temp: 18 }, { time: '17:00', temp: 22 }, { time: '22:00', temp: 17 }
];
function group(entities = []) {
  const profile = { schedule_mode: 'all_days', schedules: { all_days: copy(nodes) } };
  return { entities, enabled: true, ignored: false, ...copy(profile), active_profile: 'Default', profiles: { Default: copy(profile), Urlaub: { schedule_mode: 'all_days', schedules: { all_days: [{ time: '00:00', temp: 16 }] } } } };
}
function seed() {
  const states = {};
  for (const [id, name, temp] of [['wohnzimmer', 'Wohnzimmer', 21.3], ['kueche', 'Küche', 20.1], ['schlafzimmer', 'Schlafzimmer', 18.4], ['bad', 'Badezimmer', 22.5]]) {
    const entity_id = `climate.${id}`;
    states[entity_id] = { entity_id, state: 'heat', attributes: { friendly_name: name, current_temperature: temp, temperature: 21, min_temp: 5, max_temp: 30, target_temp_step: 0.5, supported_features: 401, hvac_modes: ['off', 'heat', 'auto'], hvac_action: 'heating', preset_modes: ['none', 'eco', 'comfort'], preset_mode: 'none' } };
  }
  return { states, groups: { Wohnbereich: group(['climate.wohnzimmer', 'climate.kueche']), Schlafzimmer: group(['climate.schlafzimmer']) }, settings: { temperature_unit: '°C', min_temp: 5, max_temp: 30, defaultSchedule: copy(nodes) }, advances: {} };
}

// Implements only a local HA facade. No requests are forwarded to a real server.
export function createDemoHass(storage) {
  let data;
  try { data = JSON.parse(storage.getItem(STORAGE_KEY)); } catch { /* Start with fixtures if storage is invalid. */ }
  if (!data?.states || !data?.groups || !data?.settings || !data?.advances) data = seed();
  const persist = () => storage.setItem(STORAGE_KEY, JSON.stringify(data));
  const findGroup = id => data.groups[id] || Object.values(data.groups).find(g => g.entities.includes(id));
  const requireGroup = id => { const g = findGroup(id); if (!g) throw new Error(`Demo: Zeitplan ${id} existiert nicht.`); return g; };
  function service(domain, name, args = {}) {
    if (domain === 'logger') return {};
    if (domain === 'climate') {
      const ids = Array.isArray(args.entity_id) ? args.entity_id : [args.entity_id];
      for (const id of ids) {
        const state = data.states[id];
        if (!state) throw new Error(`Unbekanntes Demo-Gerät: ${id}`);
        if (name === 'set_hvac_mode') state.state = args.hvac_mode;
        else if (['set_temperature', 'set_preset_mode', 'set_fan_mode', 'set_swing_mode'].includes(name)) {
          const { entity_id, ...attributes } = args;
          Object.assign(state.attributes, attributes);
        } else throw new Error(`In der Demo nicht unterstützt: ${domain}.${name}`);
      }
      persist(); return {};
    }
    if (domain !== 'climate_scheduler') throw new Error(`Unbekannte Demo-Domain: ${domain}`);
    const id = args.schedule_id;
    let g = findGroup(id);
    switch (name) {
      case 'get_groups': return { groups: copy(data.groups) };
      case 'get_settings': return copy(data.settings);
      case 'save_settings': data.settings = { ...data.settings, ...JSON.parse(args.settings) }; break;
      case 'get_schedule': return g ? { ...copy(g), nodes: copy(g.schedules[args.day || 'all_days'] || []) } : { nodes: [], ignored: true, enabled: false };
      case 'get_profiles': return copy({ profiles: g?.profiles || {}, active_profile: g?.active_profile || null });
      case 'get_override_status': return { has_override: false };
      case 'get_advance_status': return copy(data.advances[id] || { is_active: false, history: [] });
      case 'create_group':
        if (data.groups[id]) throw new Error('Gruppe existiert bereits.');
        data.groups[id] = group(); break;
      case 'delete_group': delete data.groups[id]; break;
      case 'rename_group':
        if (data.groups[args.new_name]) throw new Error('Gruppe existiert bereits.');
        data.groups[args.new_name] = requireGroup(args.old_name); delete data.groups[args.old_name]; break;
      case 'add_to_group':
        g = requireGroup(id);
        for (const other of Object.values(data.groups)) other.entities = other.entities.filter(e => e !== args.entity_id);
        g.entities.push(args.entity_id); break;
      case 'remove_from_group': g = requireGroup(id); g.entities = g.entities.filter(e => e !== args.entity_id); break;
      case 'set_schedule':
      case 'set_group_schedule': {
        if (!g) { g = group(data.states[id] ? [id] : []); data.groups[id] = g; }
        const profile = g.profiles[args.profile_name || g.active_profile];
        if (!profile) throw new Error('Profil existiert nicht.');
        profile.schedule_mode = args.schedule_mode || profile.schedule_mode;
        profile.schedules[args.day || 'all_days'] = copy(args.nodes);
        if (!args.profile_name || args.profile_name === g.active_profile) Object.assign(g, copy(profile));
        break;
      }
      case 'enable_schedule': case 'enable_group': requireGroup(id).enabled = true; break;
      case 'disable_schedule': case 'disable_group': requireGroup(id).enabled = false; break;
      case 'set_ignored':
        if (!g) { g = group([id]); data.groups[id] = g; }
        g.ignored = args.ignored; break;
      case 'clear_schedule':
        g = requireGroup(id); g.schedules = {}; g.profiles[g.active_profile].schedules = {}; break;
      case 'create_profile':
        g = requireGroup(id);
        if (g.profiles[args.profile_name]) throw new Error('Profil existiert bereits.');
        g.profiles[args.profile_name] = copy(g.profiles[g.active_profile]); break;
      case 'delete_profile':
        g = requireGroup(id);
        if (Object.keys(g.profiles).length <= 1) throw new Error('Das letzte Profil kann nicht gelöscht werden.');
        delete g.profiles[args.profile_name];
        if (g.active_profile === args.profile_name) g.active_profile = Object.keys(g.profiles)[0];
        Object.assign(g, copy(g.profiles[g.active_profile])); break;
      case 'rename_profile':
        g = requireGroup(id);
        if (g.profiles[args.new_name]) throw new Error('Profil existiert bereits.');
        g.profiles[args.new_name] = g.profiles[args.old_name]; delete g.profiles[args.old_name];
        if (g.active_profile === args.old_name) g.active_profile = args.new_name; break;
      case 'set_active_profile':
        g = requireGroup(id);
        if (!g.profiles[args.profile_name]) throw new Error('Profil existiert nicht.');
        g.active_profile = args.profile_name; Object.assign(g, copy(g.profiles[g.active_profile])); break;
      case 'advance_schedule': case 'advance_group':
        data.advances[id] = { is_active: true, history: [] }; break;
      case 'cancel_advance': data.advances[id] = { is_active: false, history: [] }; break;
      case 'clear_advance_history': if (data.advances[id]) data.advances[id].history = []; break;
      default: throw new Error(`Nur mit Home Assistant verfügbar: ${name}`);
    }
    persist(); return {};
  }
  return {
    states: data.states,
    config: { unit_system: { temperature: '°C' }, time_zone: 'Europe/Vienna' },
    themes: { darkMode: false },
    connection: { subscribeEvents: async () => () => {} },
    callService: async (domain, name, args) => service(domain, name, args),
    callWS: async message => {
      if (message.type === 'call_service') return { response: service(message.domain, message.service, message.service_data) };
      if (message.type === 'history/history_during_period') {
        return Object.fromEntries(message.entity_ids.map(id => [id, Array.from({ length: 49 }, (_, i) => ({
          state: 'heat', last_updated: new Date(+new Date(message.start_time) + (+new Date(message.end_time) - +new Date(message.start_time)) * i / 48).toISOString(),
          attributes: { ...data.states[id]?.attributes, current_temperature: 20 + Math.sin(i / 6) * 1.5 }
        }))]));
      }
      throw new Error(`In der Demo nicht unterstützt: ${message.type}`);
    }
  };
}
