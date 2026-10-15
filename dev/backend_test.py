"""Run with python -m unittest discover -s dev -p '*_test.py'.

Exercise production modules with a small HA boundary adapter. These tests do
not replace an integration test against a running Home Assistant instance.
"""
import ast
import copy
import importlib
import logging
from pathlib import Path
import sys
import types
import unittest
from datetime import datetime, timedelta, timezone
from enum import IntFlag, StrEnum
from unittest.mock import AsyncMock, Mock

ROOT = Path(__file__).resolve().parents[1]
COMPONENT = ROOT / 'custom_components' / 'climate_scheduler'
sys.path.insert(0, str(ROOT))


def module(name, **attrs):
    value = types.ModuleType(name)
    value.__dict__.update(attrs)
    sys.modules[name] = value
    if '.' in name:
        parent, key = name.rsplit('.', 1)
        if parent in sys.modules:
            setattr(sys.modules[parent], key, value)
    return value


class Units(StrEnum):
    CELSIUS = '°C'
    FAHRENHEIT = '°F'


class Features(IntFlag):
    TARGET_TEMPERATURE = 1
    TURN_ON = 2
    TURN_OFF = 4
    PRESET_MODE = 8


class Modes(StrEnum):
    AUTO = 'auto'
    OFF = 'off'
    HEAT = 'heat'
    COOL = 'cool'
    HEAT_COOL = 'heat_cool'
    DRY = 'dry'
    FAN_ONLY = 'fan_only'


class Actions(StrEnum):
    OFF = 'off'
    HEATING = 'heating'
    COOLING = 'cooling'
    IDLE = 'idle'


class Entity:
    def async_write_ha_state(self):
        pass

    async def async_added_to_hass(self):
        pass


class CoordinatorEntity(Entity):
    def __init__(self, coordinator):
        self.coordinator = coordinator
        self.hass = coordinator.hass


class Coordinator:
    def __init__(self, hass, *args, **kwargs):
        self.hass = hass

    async def async_request_refresh(self):
        return await self._async_update_data()


class Store:
    def __init__(self, *args):
        self.loaded = None
        self.saved = []

    async def async_load(self):
        return copy.deepcopy(self.loaded)

    async def async_save(self, data):
        self.saved.append(copy.deepcopy(data))


# Stub only external HA interfaces; import the actual production modules below.
module('homeassistant')
module('homeassistant.core', HomeAssistant=object, callback=lambda fn: fn)
module('homeassistant.config_entries', ConfigEntry=object)
module('homeassistant.const', UnitOfTemperature=Units, ATTR_TEMPERATURE='temperature', __version__='2026.6.4')
module('homeassistant.helpers')
module('homeassistant.helpers.storage', Store=Store)
module('homeassistant.helpers.entity_platform', AddEntitiesCallback=object)
module('homeassistant.helpers.update_coordinator', CoordinatorEntity=CoordinatorEntity,
       DataUpdateCoordinator=Coordinator, UpdateFailed=RuntimeError)
module('homeassistant.helpers.device_registry')
module('homeassistant.helpers.event', async_track_state_change_event=Mock())
module('homeassistant.components')
module('homeassistant.components.climate', ClimateEntity=Entity, ClimateEntityFeature=Features,
       HVACMode=Modes, HVACAction=Actions)
module('homeassistant.components.sensor', SensorEntity=Entity,
       SensorDeviceClass=types.SimpleNamespace(TEMPERATURE='temperature'),
       SensorStateClass=types.SimpleNamespace(MEASUREMENT='measurement'))
module('homeassistant.util')
clock = module('homeassistant.util.dt', now=lambda: datetime(2026, 10, 15, 12, tzinfo=timezone.utc))
pkg = module('custom_components.climate_scheduler')
pkg.__path__ = [str(COMPONENT)]
storage_module = importlib.import_module('custom_components.climate_scheduler.storage')
coordinator_module = importlib.import_module('custom_components.climate_scheduler.coordinator')
climate_module = importlib.import_module('custom_components.climate_scheduler.climate')
sensor_module = importlib.import_module('custom_components.climate_scheduler.sensor')


def node(temp=20, time='00:00', **extra):
    return {'time': time, 'temp': temp, **extra}


def profile(temp=20, mode='all_days', schedules=None):
    return {'schedule_mode': mode, 'schedules': schedules or {'all_days': [node(temp)]}}


def group(entity='climate.room', active='Winter', **extra):
    return {'entities': [entity], 'enabled': True, 'active_profile_global': active,
            'active_profile': 'Default', 'profiles': {'Default': profile(8)}, **extra}


def hass(unit=Units.CELSIUS):
    states = {'climate.room': types.SimpleNamespace(state='heat', attributes={
        'current_temperature': 20, 'temperature': 20, 'min_temp': 5, 'max_temp': 30,
        'hvac_modes': ['off', 'heat'], 'supported_features': 1})}
    return types.SimpleNamespace(
        config=types.SimpleNamespace(units=types.SimpleNamespace(temperature_unit=unit)),
        states=types.SimpleNamespace(get=states.get),
        services=types.SimpleNamespace(async_call=AsyncMock()),
        bus=types.SimpleNamespace(async_fire=Mock()),
        async_create_task=lambda coro: coro.close(), data={},
    )


def setup(unit=Units.CELSIUS, profiles=None, groups=None):
    ha = hass(unit)
    store = storage_module.ScheduleStorage(ha)
    store._data = {'profiles': profiles or {'Winter': profile()},
                   'groups': groups or {'Room': group()},
                   'settings': {'min_temp': 41 if unit == Units.FAHRENHEIT else 5,
                                'max_temp': 95 if unit == Units.FAHRENHEIT else 30}}
    store._sync_group_profile_views()
    coord = coordinator_module.HeatingSchedulerCoordinator(ha, store, timedelta(seconds=60))
    return ha, store, coord


class BackendRegressions(unittest.IsolatedAsyncioTestCase):
    async def test_legacy_migration_preserves_each_profile_before_any_sync(self):
        ha = hass()
        store = storage_module.ScheduleStorage(ha)
        store._store.loaded = {
            'entities': {'climate.old': {'nodes': [node(17)]}},
            'groups': {'Kitchen': {
                'entities': ['climate.kitchen'], 'schedule_mode': 'all_days',
                'schedules': {'all_days': [node(25)]},
                'profiles': {'Home': profile(25), 'Vacation': profile(8)},
                'active_profile': 'Vacation'}},
        }
        await store.async_load()
        self.assertEqual(store._data['profiles']['Kitchen - Vacation']['schedules']['all_days'], [node(8)])
        self.assertEqual(store._data['profiles']['Kitchen - Home']['schedules']['all_days'], [node(25)])
        self.assertEqual(store._data['profiles']['__entity_climate.old - Default']['schedules']['all_days'], [node(17)])
        self.assertEqual(store._data['groups']['Kitchen']['schedules']['all_days'], [node(8)])
        self.assertTrue(store._data['groups']['Kitchen']['profiles']['Vacation']['legacy'])
        before = copy.deepcopy(store._data)
        store._store.loaded = before
        await store.async_load()
        self.assertEqual(store._data, before)
        self.assertTrue(store._store.saved)

    async def test_profile_selection_survives_coordinator_update(self):
        ha, store, coord = setup(profiles={'Winter': profile(), 'Away': profile(8)})
        entity = climate_module.ClimateSchedulerGroupEntity(coord, store, 'Room', await store.async_get_group('Room'))
        await store.async_set_active_profile('Room', 'Away')
        entity._handle_coordinator_update()
        self.assertEqual(set(entity._attr_preset_modes), {'Winter', 'Away'})
        self.assertEqual(entity._attr_preset_mode, 'Away')
        self.assertEqual(entity._attr_target_temperature, 8)

    async def test_distinct_profiles_are_isolated_and_shared_profiles_stay_shared(self):
        ha, store, coord = setup(profiles={'Winter': profile(), 'Other': profile(15)}, groups={
            'Room': group(), 'Other Room': group('climate.other', 'Other'),
            'Shared': group('climate.shared')})
        source = [node(22)]
        await store.async_set_group_schedule('Room', source, 'all_days', 'all_days', 'Winter')
        source[0]['temp'] = 99
        groups = await store.async_get_groups()
        self.assertEqual(groups['Room']['schedules']['all_days'], [node(22)])
        self.assertEqual(groups['Shared']['schedules']['all_days'], [node(22)])
        self.assertEqual(groups['Other Room']['schedules']['all_days'], [node(15)])
        await store.async_set_group_schedule('Room', [node(9)], 'all_days', 'all_days', 'Other')
        self.assertEqual((await store.async_get_group('Room'))['active_profile'], 'Winter')
        self.assertEqual((await store.async_get_group('Room'))['schedules']['all_days'], [node(22)])

    async def test_same_friendly_names_cannot_overwrite_another_room(self):
        ha, store, coord = setup()
        ha.states.get = lambda entity_id: types.SimpleNamespace(attributes={'friendly_name': 'Room'})
        await store.async_set_ignored('climate.second', False)
        self.assertEqual(store._data['groups']['Room']['entities'], ['climate.room'])
        second = await store.async_get_entity_group('climate.second')
        self.assertNotEqual(second, 'Room')
        await store.async_set_ignored('climate.third', False)
        self.assertNotEqual(await store.async_get_entity_group('climate.third'), second)

    async def test_2400_is_normalized_in_input_and_stored_profiles(self):
        ha, store, coord = setup()
        await store.async_set_group_schedule('Room', [node(21, '24:00')], 'all_days')
        self.assertEqual((await store.async_get_group_schedule('Room', 'thu'))['nodes'], [node(21, '23:59')])
        self.assertEqual(store._store.saved[-1]['profiles']['Winter']['schedules']['all_days'][0]['time'], '23:59')
        for bad in ['24:01', '25:00', '12:60', 'aa:00']:
            with self.assertRaises(ValueError):
                await store.async_set_group_schedule('Room', [node(20, bad)])
        with self.assertRaises(ValueError):
            await store.async_set_group_schedule('Room', [node(float('nan'))])

    async def test_fahrenheit_bounds_values_and_service_payload(self):
        ha, store, coord = setup(Units.FAHRENHEIT, profiles={'Winter': profile(79)})
        ha.states.get('climate.room').attributes.update(current_temperature=74, temperature=79, min_temp=61, max_temp=88)
        entity = climate_module.ClimateSchedulerGroupEntity(coord, store, 'Room', await store.async_get_group('Room'))
        entity.entity_id = 'climate.scheduler_room'
        await entity.async_added_to_hass()
        self.assertEqual(entity._attr_temperature_unit, Units.FAHRENHEIT)
        self.assertEqual((entity._attr_min_temp, entity._attr_max_temp), (61, 88))
        self.assertEqual(entity._attr_current_temperature, 74)
        self.assertEqual(entity._attr_target_temperature, 79)
        await entity.async_set_temperature(temperature=80)
        self.assertEqual(ha.services.async_call.call_args.args[2]['temperature'], 80)
        entity._handle_coordinator_update()
        self.assertEqual(entity._attr_target_temperature, 80)
        for cls in [sensor_module.ColdestEntitySensor, sensor_module.WarmestEntitySensor]:
            sensor = cls(ha, store, coord)
            await sensor._async_update()
            self.assertEqual(sensor._attr_native_unit_of_measurement, Units.FAHRENHEIT)
            self.assertEqual(sensor._attr_native_value, 74)

    async def test_scheduled_and_advanced_fahrenheit_targets_respect_device_range(self):
        ha, store, coord = setup(Units.FAHRENHEIT, profiles={'Winter': profile(schedules={
            'all_days': [node(42, '00:00'), node(95, '18:00')]})})
        ha.states.get('climate.room').attributes.update(current_temperature=74, temperature=79, min_temp=61, max_temp=88)
        await coord._async_update_data()
        self.assertEqual(ha.services.async_call.call_args.args[2]['temperature'], 61)
        result = await coord.advance_to_next_node('climate.room')
        self.assertTrue(result['success'])
        self.assertEqual(ha.services.async_call.call_args.args[2]['temperature'], 88)

    async def test_switching_profile_clears_manual_hold_and_reapplies_schedule(self):
        ha, store, coord = setup(profiles={'Winter': profile(20), 'Other': profile(20)})
        await coord._async_update_data()
        await coord.async_set_manual_override('Room', 23)
        await store.async_set_active_profile('Room', 'Other')
        ha.services.async_call.reset_mock()
        await coord._async_update_data()
        self.assertNotIn('climate.room', coord.manual_overrides)
        self.assertEqual(ha.services.async_call.call_args.args[2]['temperature'], 20)

    async def test_manual_override_deadline_for_all_modes_and_empty_days(self):
        cases = [
            ('all_days', {'all_days': [node(20, '06:00'), node(21, '18:00')]}, datetime(2026, 10, 15, 18, tzinfo=timezone.utc)),
            ('5/2', {'weekday': [node(20, '06:00')], 'weekend': [node(18, '09:00')]}, datetime(2026, 10, 16, 6, tzinfo=timezone.utc)),
            ('individual', {'thu': [], 'fri': [], 'sat': [node(19, '09:00')]}, datetime(2026, 10, 17, 9, tzinfo=timezone.utc)),
        ]
        for mode, schedules, deadline in cases:
            with self.subTest(mode=mode):
                ha, store, coord = setup(profiles={'Winter': profile(mode=mode, schedules=schedules)})
                await coord.async_set_manual_override('Room', 23)
                self.assertEqual(coord.manual_overrides['climate.room']['until'], deadline)
                self.assertFalse((await coord.async_get_advance_status('Room'))['is_advanced'])
                result = await coord._async_update_data()
                # Empty current-day schedules are skipped before entity processing.
                if 'climate.room' in result:
                    self.assertEqual(result['climate.room']['reason'], 'manual_override_active')
                ha.services.async_call.assert_not_called()
                await coord.cancel_advance('Room')
                self.assertNotIn('climate.room', coord.manual_overrides)

    async def test_manual_override_expires_and_scheduled_event_contract_is_preserved(self):
        ha, store, coord = setup(profiles={'Winter': profile(schedules={'all_days': [node(20, '00:00'), node(21, '12:00', hvac_mode='heat')]})})
        coord.manual_overrides['climate.room'] = {'until': clock.now(), 'temperature': 23}
        await coord._async_update_data()
        self.assertNotIn('climate.room', coord.manual_overrides)
        calls = ha.services.async_call.call_args_list
        self.assertEqual([c.args[1] for c in calls][:2], ['set_hvac_mode', 'set_temperature'])
        self.assertEqual(calls[1].args[2]['temperature'], 21)
        event_type, event = ha.bus.async_fire.call_args.args
        self.assertEqual(event_type, 'climate_scheduler_node_activated')
        self.assertEqual(event['entities'], ['climate.room'])
        self.assertEqual(event['group_name'], 'Room')
        self.assertEqual(event['trigger_type'], 'scheduled')
        self.assertEqual(event['day'], 'thu')
        self.assertEqual(event['node']['time'], '12:00')

    async def test_advance_cancel_still_works_after_manual_override(self):
        ha, store, coord = setup(profiles={'Winter': profile(schedules={'all_days': [node(20, '06:00'), node(22, '18:00')]})})
        await coord.async_set_manual_override('Room', 23)
        result = await coord.advance_to_next_node('climate.room')
        self.assertTrue(result['success'])
        self.assertNotIn('climate.room', coord.manual_overrides)
        self.assertTrue((await coord.async_get_advance_status('Room'))['is_advanced'])
        self.assertEqual(ha.bus.async_fire.call_args.args[1]['trigger_type'], 'manual_advance')
        await coord.cancel_advance('Room')
        self.assertFalse((await coord.async_get_advance_status('Room'))['is_advanced'])


class ResourceRegressions(unittest.IsolatedAsyncioTestCase):
    async def test_duplicate_resources_are_removed_and_registration_is_idempotent(self):
        # Execute the production registration function without integration setup.
        tree = ast.parse((COMPONENT / '__init__.py').read_text(encoding='utf-8'))
        fn = next(n for n in tree.body if isinstance(n, ast.AsyncFunctionDef) and n.name == '_register_frontend_resources')
        scope = {'HomeAssistant': object, 'Path': Path, '__file__': str(COMPONENT / '__init__.py'),
                 'DOMAIN': 'climate_scheduler', '_LOGGER': logging.getLogger('resources'),
                 'time': types.SimpleNamespace(time=lambda: 0)}
        exec(compile(ast.Module(body=[fn], type_ignores=[]), str(COMPONENT / '__init__.py'), 'exec'), scope)
        entries = [
            {'id': 'a', 'url': '/climate_scheduler/static/climate-scheduler-card.js?v=old', 'type': 'module'},
            {'id': 'b', 'url': '/climate_scheduler/static/climate-scheduler-card.js?v=older', 'type': 'module'},
            {'id': 'c', 'url': '/hacsfiles/climate-scheduler/climate-scheduler-card.js', 'type': 'module'},
            {'id': 'unrelated', 'url': '/my/climate-scheduler-card.js', 'type': 'module'},
        ]
        async def delete(item_id):
            entries[:] = [e for e in entries if e['id'] != item_id]
        async def update(item_id, data):
            entry = next(e for e in entries if e['id'] == item_id)
            entry.update(url=data['url'], type=data['res_type'])
        resources = types.SimpleNamespace(loaded=True, store=object(), async_items=lambda: list(entries),
            async_delete_item=AsyncMock(side_effect=delete), async_update_item=AsyncMock(side_effect=update),
            async_create_item=AsyncMock())
        ha = hass()
        ha.data = {'climate_scheduler': {'frontend_static_registered': True},
                   'lovelace': types.SimpleNamespace(resources=resources)}
        async def executor(fn):
            return fn()
        ha.async_add_executor_job = executor
        await scope['_register_frontend_resources'](ha)
        await scope['_register_frontend_resources'](ha)
        self.assertEqual([e['id'] for e in entries], ['a', 'unrelated'])
        self.assertEqual(resources.async_update_item.await_count, 1)
        resources.async_create_item.assert_not_called()


if __name__ == '__main__':
    unittest.main()
