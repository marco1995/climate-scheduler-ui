/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol, Iterator */


function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

/** UI translations. Keep device values, service names and stored profile IDs unchanged. */
const de = {
    "HOME CLIMATE": "RAUMKLIMA",
    "Your rooms. Your rhythm.": "Deine Räume. Dein Rhythmus.",
    "Monitored": "Mit Zeitplan",
    "Unmonitored": "Ohne Zeitplan",
    "Profiles": "Profile",
    "Monitor": "Zeitsteuerung aktivieren",
    "Unmonitor": "Zeitsteuerung deaktivieren",
    "Instructions": "Anleitung",
    "Settings": "Einstellungen",
    "Schedule Settings": "Zeitplan-Einstellungen",
    "Target Temperature": "Zieltemperatur",
    "Target Humidity": "Zielluftfeuchtigkeit",
    "Temperature": "Temperatur",
    "Temperature (°C)": "Temperatur (°C)",
    "Temperature (°F)": "Temperatur (°F)",
    "Time of Day (24hr)": "Uhrzeit (24 h)",
    "Set to": "Einstellen auf",
    "Heat to": "Heizen auf",
    "Cool to": "Kühlen auf",
    "HVAC Mode": "Betriebsart",
    "Fan Mode": "Lüftermodus",
    "Thermostat Preset": "Thermostat-Voreinstellung",
    "Swing (Vertical)": "Schwenken (vertikal)",
    "Swing (Horizontal)": "Schwenken (horizontal)",
    "Auxiliary Heat": "Zusatzheizung",
    "Aux Heat": "Zusatzheizung",
    "Temperature Change": "Temperaturänderung",
    "No Temperature Change": "Keine Temperaturänderung",
    "-- No Change --": "-- Keine Änderung --",
    "No Change": "Keine Änderung",
    "Legend": "Legende",
    "Save": "Speichern",
    "Cancel": "Abbrechen",
    "Continue": "Fortfahren",
    "Confirm action": "Aktion bestätigen",
    "Please note": "Hinweis",
    "Enter a name": "Namen eingeben",
    "Name": "Name",
    "Done": "Fertig",
    "Copy": "Kopieren",
    "Paste": "Einfügen",
    "Undo": "Rückgängig",
    "Advance": "Vorziehen",
    "Clear": "Leeren",
    "Delete": "Löschen",
    "Close": "Schließen",
    "Enabled": "Aktiviert",
    "Disabled": "Deaktiviert",
    "Enable": "Aktivieren",
    "Disable": "Deaktivieren",
    "All Days": "Alle Tage",
    "All days": "Alle Tage",
    "Weekday": "Werktage",
    "Weekdays": "Werktage",
    "Weekend": "Wochenende",
    "Mon": "Mo",
    "Tue": "Di",
    "Wed": "Mi",
    "Thu": "Do",
    "Fri": "Fr",
    "Sat": "Sa",
    "Sun": "So",
    "Monday": "Montag",
    "Tuesday": "Dienstag",
    "Wednesday": "Mittwoch",
    "Thursday": "Donnerstag",
    "Friday": "Freitag",
    "Saturday": "Samstag",
    "Sunday": "Sonntag",
    "Schedule (All Days)": "Zeitplan (alle Tage)",
    "Copy Schedule": "Zeitplan kopieren",
    "Paste Schedule": "Zeitplan einfügen",
    "Clear Schedule": "Zeitplan löschen",
    "Clear Schedule?": "Zeitplan löschen?",
    "Clear Advance History": "Verlauf vorgezogener Schaltpunkte löschen",
    "Create New Group": "Neue Gruppe erstellen",
    "Group Name:": "Gruppenname:",
    "Create Group": "Gruppe erstellen",
    "Add to Group": "Zur Gruppe hinzufügen",
    "Edit Group": "Gruppe bearbeiten",
    "Delete Group": "Gruppe löschen",
    "Filter by name...": "Nach Namen filtern …",
    "Select a profile to edit...": "Profil zum Bearbeiten auswählen …",
    "Create new profile": "Neues Profil erstellen",
    "Rename profile": "Profil umbenennen",
    "Delete profile": "Profil löschen",
    "Previous keyframe": "Vorheriger Schaltpunkt",
    "Next keyframe": "Nächster Schaltpunkt",
    "Click to expand": "Zum Aufklappen klicken",
    "Current": "Aktuell",
    "Target": "Ziel",
    "Status": "Status",
    "Time": "Uhrzeit",
    "Node Settings": "Schaltpunkt-Einstellungen",
    "Schedule copied": "Zeitplan kopiert",
    "Schedule pasted": "Zeitplan eingefügt",
    "Profile saved successfully": "Profil erfolgreich gespeichert",
    "Failed to save profile changes": "Profiländerungen konnten nicht gespeichert werden",
    "Failed to load climate entities": "Klimageräte konnten nicht geladen werden",
    "Failed to delete group": "Gruppe konnte nicht gelöscht werden",
    "Please enter a group name": "Bitte einen Gruppennamen eingeben",
    "A group with this name already exists": "Eine Gruppe mit diesem Namen existiert bereits",
    "Failed to create group": "Gruppe konnte nicht erstellt werden",
    "Please select or create a group": "Bitte eine Gruppe auswählen oder erstellen",
    "Failed to add entity to group": "Gerät konnte nicht zur Gruppe hinzugefügt werden",
    "Minimum temperature must be a number": "Die Mindesttemperatur muss eine Zahl sein",
    "Maximum temperature must be a number": "Die Höchsttemperatur muss eine Zahl sein",
    "Cannot delete the last node. A schedule must have at least one node.": "Der letzte Schaltpunkt kann nicht gelöscht werden. Ein Zeitplan benötigt mindestens einen Schaltpunkt.",
    "Delete this node?": "Diesen Schaltpunkt löschen?",
    "Clear all nodes for this profile?": "Alle Schaltpunkte dieses Profils löschen?",
    "Enter name for new profile:": "Namen für das neue Profil eingeben:",
    "Reset to default schedule settings?": "Zeitplan-Einstellungen zurücksetzen?",
    "Clear the default schedule? All nodes will be removed.": "Standardzeitplan löschen? Alle Schaltpunkte werden entfernt.",
    "This action cannot be undone.": "Diese Aktion kann nicht rückgängig gemacht werden.",
    "Schedule mode": "Zeitplanmodus",
    "Copy schedule": "Zeitplan kopieren",
    "Paste schedule": "Zeitplan einfügen",
    "Undo last change": "Letzte Änderung rückgängig machen",
    "Save schedule": "Zeitplan speichern",
    "Advance to next scheduled node": "Zum nächsten Schaltpunkt vorziehen",
    "Stop monitoring this thermostat": "Zeitsteuerung dieses Thermostats deaktivieren",
    "Clear entire schedule": "Gesamten Zeitplan löschen",
    "All Days (24h)": "Alle Tage (24 h)",
    "Individual Days (7-day)": "Einzelne Tage (7 Tage)",
    "Weekday/Weekend (5/2)": "Werktage/Wochenende (5/2)",
    "Current Temp:": "Raumtemperatur:",
    "Target Temp:": "Zieltemperatur:",
    "Scheduled Temp:": "Laut Zeitplan:",
    "HVAC Mode:": "Betriebsart:",
    "Fan Mode:": "Lüftermodus:",
    "Swing Mode:": "Schwenkmodus:",
    "Preset Mode:": "Voreinstellung:",
    "Scheduled": "Laut Zeitplan",
    "Actions": "Aktionen",
    "24hr": "24 h",
    "7 Day": "7 Tage",
    "Delete Node": "Schaltpunkt löschen",
    "Test Event": "Ereignis testen",
    "Previous node": "Vorheriger Schaltpunkt",
    "Next node": "Nächster Schaltpunkt",
    "Delete selected node": "Ausgewählten Schaltpunkt löschen",
    "Choose Profile to Edit": "Profil zum Bearbeiten auswählen",
    "Enable schedule": "Zeitplan aktivieren",
    "Rename group": "Gruppe umbenennen",
    "Move to another group": "In andere Gruppe verschieben",
    "Remove from group": "Aus Gruppe entfernen",
    "Heat": "Heizen",
    "Cool": "Kühlen",
    "Heat cool": "Heizen/Kühlen",
    "Off": "Aus",
    "Auto": "Automatisch",
    "Dry": "Entfeuchten",
    "Fan only": "Nur Lüften",
    "Low": "Niedrig",
    "Medium": "Mittel",
    "High": "Hoch",
    "Duration (hours):": "Dauer (Stunden):",
    "Slots:": "Zeitabschnitte:",
    "Min Value:": "Mindestwert:",
    "Max Value:": "Höchstwert:",
    "X Axis Label:": "Beschriftung der X-Achse:",
    "Y Axis Label:": "Beschriftung der Y-Achse:",
    "Are you sure you want to clear the entire schedule for": "Gesamten Zeitplan löschen für",
    "Add": "Gerät",
    "to group:": "zu folgender Gruppe hinzufügen:",
    "or": "oder",
    "Convert All Schedules": "Alle Zeitpläne umrechnen",
    "This will convert all saved schedules (entities and groups) as well as the default schedule and min/max settings.": "Alle gespeicherten Zeitpläne (Geräte und Gruppen), der Standardzeitplan und die Temperaturgrenzen werden umgerechnet.",
    "Current unit (convert FROM):": "Aktuelle Einheit (von):",
    "Target unit (convert TO):": "Neue Einheit (nach):",
    "Warning:": "Achtung:",
    "This action cannot be undone. Make sure you select the correct source and target units.": "Diese Aktion kann nicht rückgängig gemacht werden. Bitte Ausgangs- und Zieleinheit sorgfältig prüfen.",
    "Convert Schedules": "Zeitpläne umrechnen",
    "Double-click or double-tap": "Doppelklicken oder doppelt antippen:",
    "the line to add a new node": "Auf der Linie einen neuen Schaltpunkt hinzufügen",
    "Drag nodes": "Schaltpunkte ziehen:",
    "vertically to change temperature or horizontally to move their time": "Vertikal die Temperatur, horizontal die Uhrzeit ändern",
    "Drag the horizontal segment": "Waagerechten Abschnitt ziehen:",
    "between two nodes to shift that period while preserving its duration": "Den Zeitraum zwischen zwei Schaltpunkten verschieben; die Dauer bleibt erhalten",
    "Copy / Paste": "Kopieren / Einfügen:",
    "buttons duplicate a schedule across days or entities": "Zeitpläne auf andere Tage oder Geräte übertragen",
    "Tap a node": "Schaltpunkt antippen:",
    "to open its settings panel for HVAC/fan/swing/preset values": "Einstellungen für Betriebsart, Lüfter, Schwenkmodus und Voreinstellung öffnen",
    "Group Management": "Gruppenverwaltung",
    "+ Create New Group": "+ Neue Gruppe erstellen",
    "Default Schedule": "Standardzeitplan",
    "Set the default temperature schedule used when clearing or creating new schedules": "Temperaturverlauf für neue oder zurückgesetzte Zeitpläne festlegen",
    "Time:": "Uhrzeit:",
    "Temperature:": "Temperatur:",
    "Graph Options": "Diagrammoptionen",
    "Tooltip Display:": "Tooltip-Anzeige:",
    "Show Historical Temperature": "Temperaturverlauf anzeigen",
    "Show Cursor Position": "Zeigerposition anzeigen",
    "Choose what information to display when hovering over the graph": "Informationen auswählen, die beim Bewegen des Mauszeigers über das Diagramm angezeigt werden",
    "Min Temp (": "Mindesttemperatur (",
    "Max Temp (": "Höchsttemperatur (",
    "Temperature Precision": "Temperaturgenauigkeit",
    "Graph Snap Step:": "Raster im Diagramm:",
    "Temperature rounding when dragging nodes on the graph": "Temperaturschritte beim Ziehen von Schaltpunkten im Diagramm",
    "Input Field Step:": "Schrittweite der Eingabe:",
    "Step size for temperature input fields and up/down buttons": "Schrittweite für Temperaturfelder und Plus-/Minus-Schaltflächen",
    "Humidity Slider Step:": "Schrittweite der Luftfeuchtigkeit:",
    "Step size for humidity slider in node settings dialog": "Schrittweite des Luftfeuchtigkeitsreglers in den Schaltpunkt-Einstellungen",
    "Derivative Sensors": "Änderungsratensensoren",
    "Automatically create sensors to track heating/cooling rates for performance analysis": "Sensoren zur Analyse der Heiz- und Kühlgeschwindigkeit automatisch erstellen",
    "When enabled, creates sensor.climate_scheduler_[name]_rate for each thermostat to track temperature change rate (°C/h)": "Erstellt für jedes Thermostat einen Sensor sensor.climate_scheduler_[name]_rate zur Messung der Temperaturänderung (°C/h)",
    "Workday Integration": "Arbeitstag-Integration",
    "Configure which days are workdays for 5/2 mode scheduling": "Arbeitstage für die Zeitplanung im 5/2-Modus festlegen",
    "Use Workday integration for 5/2 scheduling": "Arbeitstag-Integration für den 5/2-Modus verwenden",
    "Checking if Workday integration is installed...": "Arbeitstag-Integration wird gesucht …",
    "Select Workdays:": "Arbeitstage auswählen:",
    "Choose which days are considered workdays when Workday integration is disabled": "Arbeitstage auswählen, wenn die Arbeitstag-Integration deaktiviert ist",
    "Refresh Entities": "Geräte aktualisieren",
    "Sync All Thermostats": "Alle Thermostate synchronisieren",
    "Reload Integration": "Integration neu laden",
    "Convert All Schedules...": "Alle Zeitpläne umrechnen …",
    "Run Diagnostics": "Diagnose ausführen",
    "Cleanup Derivative Sensors": "Änderungsratensensoren bereinigen",
    "Cleanup Orphaned Entities": "Verwaiste Entitäten bereinigen",
    "Cleanup Unmonitored Storage": "Einträge ohne Zeitsteuerung bereinigen",
    "Reset to Defaults": "Auf Standardwerte zurücksetzen",
    "Debug Console": "Diagnosekonsole",
    ", created by": ", entwickelt von",
    "☕ Buy me a coffee": "☕ Einen Kaffee spendieren",
    "e.g., Bedrooms": "z. B. Schlafzimmer",
    "Create new group...": "Neue Gruppe erstellen …",
    "Group name": "Gruppenname",
    "Waiting for Home Assistant connection...": "Verbindung zu Home Assistant wird hergestellt …",
    "❌ Climate Scheduler Integration Not Found": "❌ Climate-Scheduler-Integration nicht gefunden",
    "This card requires the Climate Scheduler integration to be installed.": "Für diese Karte muss die Climate-Scheduler-Integration installiert sein.",
    "No climate entity data": "Keine Klimagerätedaten vorhanden",
    "Temperature Range": "Temperaturbereich",
    "Time Slots:": "Zeitabschnitte:",
    "Prev Day End:": "Endwert des Vortags:",
    "Snap Value:": "Rasterschritt:",
    "None": "Keine",
    "e.g. Time": "z. B. Uhrzeit",
    "e.g. Value": "z. B. Temperatur",
    "❌ Connection Failed": "❌ Verbindung fehlgeschlagen",
    "Could not connect to Home Assistant": "Verbindung zu Home Assistant konnte nicht hergestellt werden",
    "Technical Details": "Technische Details",
    "Troubleshooting:": "Fehlerbehebung:",
    "No groups created yet": "Noch keine Gruppen erstellt",
    "No unmonitored entities": "Keine Geräte ohne Zeitplan",
    "Select a group...": "Gruppe auswählen …",
    "Install Workday integration": "Arbeitstag-Integration installieren",
    "Undo last change (Ctrl+Z)": "Letzte Änderung rückgängig machen (Strg+Z)",
    "Copy current schedule": "Aktuellen Zeitplan kopieren",
    "Paste copied schedule": "Kopierten Zeitplan einfügen",
    "Clear advance history markers": "Markierungen vorgezogener Schaltpunkte löschen",
    "Test fire event with current active node": "Testereignis für den aktiven Schaltpunkt auslösen",
    "Failed to show group selection modal": "Gruppenauswahl konnte nicht geöffnet werden",
    "Failed to switch profile": "Profil konnte nicht gewechselt werden",
    "Failed to load canvas graph component": "Diagramm konnte nicht geladen werden",
    "Returned to active profile": "Aktives Profil wieder geöffnet",
    "Failed to save mode change": "Änderung des Zeitplanmodus konnte nicht gespeichert werden",
    "Selected profile is unavailable for the target schedule": "Das ausgewählte Profil ist für diesen Zeitplan nicht verfügbar",
    "Select a monitored schedule first": "Bitte zuerst einen Zeitplan mit aktiver Zeitsteuerung auswählen",
    "Dismiss this notice": "Hinweis schließen",
    "Virtual Schedule (No Entities) - Events Only": "Virtueller Zeitplan (ohne Geräte) – nur Ereignisse",
    "Entity enabled": "Gerät aktiviert",
    "Entity ignored": "Zeitsteuerung für das Gerät deaktiviert",
    "Cancel Advance": "Vorziehen aufheben",
    "Cancel advance override for all entities in group": "Vorziehen für alle Geräte der Gruppe aufheben",
    "Advance all entities in group to next scheduled node": "Alle Geräte der Gruppe zum nächsten Schaltpunkt vorziehen",
    "Advance canceled for all entities in group": "Vorziehen für alle Geräte der Gruppe aufgehoben",
    "Advanced all entities in group to next scheduled node": "Alle Geräte der Gruppe zum nächsten Schaltpunkt vorgezogen",
    "Advance history cleared for all entities in group": "Verlauf vorgezogener Schaltpunkte für alle Geräte der Gruppe gelöscht",
    "Saved!": "Gespeichert!",
    "Copied!": "Kopiert!",
    "Pasted!": "Eingefügt!",
    "Schedule cleared": "Zeitplan gelöscht",
    "Failed to clear schedule. Please try again.": "Zeitplan konnte nicht gelöscht werden. Bitte erneut versuchen.",
    "Failed to clear group schedule. Please try again.": "Gruppenzeitplan konnte nicht gelöscht werden. Bitte erneut versuchen.",
    "Schedule saved, but failed to update enabled state.": "Zeitplan gespeichert, aber der Aktivierungsstatus konnte nicht aktualisiert werden.",
    "Failed to save schedule. Check browser console for details.": "Zeitplan konnte nicht gespeichert werden. Details stehen in der Browserkonsole.",
    "Integration reloaded successfully": "Integration erfolgreich neu geladen",
    "A group with this name already exists. Please select it from the dropdown or use a different name.": "Eine Gruppe mit diesem Namen existiert bereits. Bitte auswählen oder einen anderen Namen verwenden.",
    "Please select the current temperature unit (FROM)": "Bitte die aktuelle Temperatureinheit auswählen (von)",
    "Please select the target temperature unit (TO)": "Bitte die neue Temperatureinheit auswählen (nach)",
    "Converting...": "Wird umgerechnet …",
    "23:59 (in use)": "23:59 (belegt)",
    "⟲ Syncing...": "⟲ Wird synchronisiert …",
    "✓ Synced!": "✓ Synchronisiert!",
    "⟲ Sync All Thermostats": "⟲ Alle Thermostate synchronisieren",
    "When enabled, uses the Workday integration for accurate 5/2 scheduling (respects holidays and custom workdays). When disabled, uses the selected workdays below.": "Verwendet die Arbeitstag-Integration für den 5/2-Modus und berücksichtigt Feiertage sowie individuelle Arbeitstage. Andernfalls gelten die unten ausgewählten Arbeitstage.",
    "Could not determine if Workday integration is installed.": "Die Verfügbarkeit der Arbeitstag-Integration konnte nicht ermittelt werden.",
    "✓ Reset!": "✓ Zurückgesetzt!",
    "✓ Cleared!": "✓ Gelöscht!",
    "🔍 Running diagnostics...": "🔍 Diagnose läuft …",
    "✓ Diagnostics Complete!": "✓ Diagnose abgeschlossen!",
    "🧹 Cleaning up...": "🧹 Wird bereinigt …",
    "✓ Cleanup Complete!": "✓ Bereinigung abgeschlossen!",
    "🧹 Cleanup Derivative Sensors": "🧹 Änderungsratensensoren bereinigen",
    "Failed to cleanup derivative sensors": "Änderungsratensensoren konnten nicht bereinigt werden",
    "🔍 Scanning...": "🔍 Wird durchsucht …",
    "No orphaned entities found": "Keine verwaisten Entitäten gefunden",
    "🗑️ Deleting...": "🗑️ Wird gelöscht …",
    "No entities were removed": "Es wurden keine Entitäten entfernt",
    "Failed to cleanup orphaned entities": "Verwaiste Entitäten konnten nicht bereinigt werden",
    "🔍 Dry run...": "🔍 Vorschau wird erstellt …",
    "Dry run complete: no stale storage entries to remove.": "Vorschau abgeschlossen: Keine veralteten Speichereinträge gefunden.",
    "🧹 Cleaning storage...": "🧹 Speicher wird bereinigt …",
    "Storage cleanup complete": "Speicherbereinigung abgeschlossen",
    "Failed to cleanup storage": "Speicher konnte nicht bereinigt werden",
    "Clear all nodes": "Alle Schaltpunkte löschen",
    "Close profile editor": "Profileditor schließen",
    "Schedule": "Zeitplan",
    "Click to collapse": "Zum Einklappen klicken",
    "▼ Expand": "▼ Aufklappen",
    "▲ Collapse": "▲ Einklappen",
    "Hide Config": "Konfiguration ausblenden",
    "Show Config": "Konfiguration anzeigen",
    "↶ Undo": "↶ Rückgängig",
    "Double-click to add • Drag to move • Right-click/hold to delete": "Doppelklicken zum Hinzufügen • Ziehen zum Verschieben • Rechtsklicken oder gedrückt halten zum Löschen",
    "keyframes": "Schaltpunkte",
    "Workday integration not detected. Configure workdays manually below.": "Arbeitstag-Integration nicht gefunden. Bitte die Arbeitstage unten manuell festlegen.",
    "• Try refreshing the page (pull down on mobile)": "• Seite neu laden (auf Mobilgeräten nach unten ziehen)",
    "• Check if you're logged into Home Assistant": "• Anmeldung bei Home Assistant prüfen",
    "• Restart the Home Assistant app": "• Home-Assistant-App neu starten",
    "• Check Settings → Companion App → Debugging": "• Einstellungen → Companion App → Fehlerbehebung prüfen",
    "Make sure the Climate Scheduler integration is installed and the frontend is available at /climate_scheduler/static": "Bitte prüfen, ob die Climate-Scheduler-Integration installiert und die Oberfläche unter /climate_scheduler/static erreichbar ist",
    "Failed to load panel module:": "Panel konnte nicht geladen werden:",
    "Home": "Zuhause",
    "Away": "Abwesend",
    "Sleep": "Schlafen",
    "Comfort": "Komfort",
    "Eco": "Energiesparen",
    "Boost": "Schnellheizen",
    "Heat Cool": "Heizen/Kühlen",
    "Fan Only": "Nur Lüften",
    "On": "Ein",
    "Idle": "Inaktiv",
    "Heating": "Heizen",
    "Cooling": "Kühlen",
    "Switched {0} to profile: {1}": "„{0}“ auf Profil „{1}“ umgestellt",
    "Enabled scheduling for {0}": "Zeitplanung für „{0}“ aktiviert",
    "Disabled scheduling for {0}": "Zeitplanung für „{0}“ deaktiviert",
    "Created profile: {0}": "Profil erstellt: {0}",
    "Renamed profile to: {0}": "Profil umbenannt in: {0}",
    "Deleted profile: {0}": "Profil gelöscht: {0}",
    "Failed to enable entity": "Gerät konnte nicht aktiviert werden",
    "Failed to disable entity": "Gerät konnte nicht deaktiviert werden",
    "Removed {0} from {1}": "„{0}“ aus „{1}“ entfernt",
    "{0} is now unmonitored": "Zeitsteuerung für „{0}“ deaktiviert",
    "Test event fired for node at {0}": "Testereignis für den Schaltpunkt um {0} ausgelöst",
    "Cleared schedule for group \"{0}\"": "Zeitplan der Gruppe „{0}“ gelöscht",
    "Moved entity from {0} to {1}": "Gerät von „{0}“ nach „{1}“ verschoben",
    "Added entity to {0}": "Gerät zu „{0}“ hinzugefügt",
    "Cannot convert from {0} to {1} - they are the same unit": "Umrechnung von {0} nach {1} nicht möglich: Die Einheiten sind gleich",
    "Successfully converted all schedules to {0}. Reloading...": "Alle Zeitpläne erfolgreich in {0} umgerechnet. Wird neu geladen …",
    "Renamed group to: {0}": "Gruppe umbenannt in: {0}",
    "Deleted group: {0}": "Gruppe gelöscht: {0}",
    "Graph snap step set to {0}°": "Diagrammraster auf {0}° eingestellt",
    "Input field step set to {0}°": "Eingabeschrittweite auf {0}° eingestellt",
    "Humidity slider step set to {0}%": "Schrittweite der Luftfeuchtigkeit auf {0}% eingestellt",
    "Diagnostics saved to {0}": "Diagnose gespeichert unter {0}",
    "Deleted {0} sensors with {1} errors": "{0} Sensoren gelöscht; {1} Fehler aufgetreten",
    "Removed {0} orphaned entities": "{0} verwaiste Entitäten entfernt",
    "Dry-run preview saved to {0}": "Bereinigungsvorschau gespeichert unter {0}",
    "Cleanup result saved to {0}": "Bereinigungsergebnis gespeichert unter {0}",
    "Editing Profile: {0}": "Profil bearbeiten: {0}",
    "Member Entities ({0})": "Zugeordnete Geräte ({0})",
    "{0} (in use)": "{0} (belegt)",
    "Timeline Editor ({0}h • {1} slots @ {2}min)": "Zeitplaneditor ({0} h • {1} Abschnitte à {2} min)",
    "Entity {0}": "Gerät {0}",
    "{0} groups": "{0} Gruppen",
    "{0} entity references": "{0} Geräteverweise",
    "{0} profiles": "{0} Profile",
    "{0} advance-history entries": "{0} Verlaufseinträge vorgezogener Schaltpunkte",
    "Failed to monitor entity: {0}": "Zeitsteuerung konnte nicht aktiviert werden: {0}",
    "Failed to update enabled state: {0}": "Aktivierungsstatus konnte nicht aktualisiert werden: {0}",
    "Failed to load profile: {0}": "Profil konnte nicht geladen werden: {0}",
    "Failed to create profile: {0}": "Profil konnte nicht erstellt werden: {0}",
    "Failed to rename profile: {0}": "Profil konnte nicht umbenannt werden: {0}",
    "Failed to delete profile: {0}": "Profil konnte nicht gelöscht werden: {0}",
    "Failed to remove entity from group: {0}": "Gerät konnte nicht aus der Gruppe entfernt werden: {0}",
    "Failed to unmonitor entity: {0}": "Zeitsteuerung konnte nicht deaktiviert werden: {0}",
    "Failed: {0}": "Fehlgeschlagen: {0}",
    "Failed to fire test event: {0}": "Testereignis konnte nicht ausgelöst werden: {0}",
    "Failed to reload integration: {0}": "Integration konnte nicht neu geladen werden: {0}",
    "Failed to convert schedules: {0}": "Zeitpläne konnten nicht umgerechnet werden: {0}",
    "Failed to rename group: {0}": "Gruppe konnte nicht umbenannt werden: {0}",
    "Failed to delete group: {0}": "Gruppe konnte nicht gelöscht werden: {0}",
    "Failed to sync temperatures: {0}": "Temperaturen konnten nicht synchronisiert werden: {0}",
    "Failed to run diagnostics: {0}": "Diagnose konnte nicht ausgeführt werden: {0}",
    "⚠️ Preset-Only Devices Detected": "⚠️ Geräte ohne Temperatursensor erkannt",
    "{0} devices in this group have no temperature sensor and will only receive mode changes (HVAC, fan, swing, preset).": "{0} Geräte dieser Gruppe haben keinen Temperatursensor. Sie erhalten nur Änderungen der Betriebsart, des Lüfter- oder Schwenkmodus und der Voreinstellung.",
    "Auto-creation of derivative sensors is disabled.\n\nThis will DELETE ALL climate_scheduler derivative sensors.\n\nAre you sure you want to continue?": "Die automatische Erstellung von Änderungsratensensoren ist deaktiviert.\n\nALLE Änderungsratensensoren von Climate Scheduler werden GELÖSCHT.\n\nWirklich fortfahren?",
    "This will remove derivative sensors for thermostats that no longer exist.\n\nContinue?": "Änderungsratensensoren nicht mehr vorhandener Thermostate werden entfernt.\n\nFortfahren?",
    "Found {0} orphaned entities:\n\n• {1}\n\nThese entities no longer have matching groups or climate entities in storage.\n\nDelete these entities?": "{0} verwaiste Entitäten gefunden:\n\n• {1}\n\nDiesen Entitäten sind keine gespeicherten Gruppen oder Klimageräte mehr zugeordnet.\n\nDiese Entitäten löschen?",
    "Dry run found changes:": "Die Vorschau hat Änderungen gefunden:",
    "Will remove: {0}.": "Wird entfernt: {0}.",
    "Groups: {0}": "Gruppen: {0}",
    "Proceed with cleanup?": "Mit der Bereinigung fortfahren?",
    "Show Debug Panel": "Diagnosekonsole anzeigen",
    "Auto-create derivative sensors": "Änderungsratensensoren automatisch erstellen",
    "Install it from HACS or visit:": "Über HACS installieren oder folgende Seite besuchen:",
    "Climate Scheduler Card": "Climate-Scheduler-Karte",
    "Full Climate Scheduler UI as a Lovelace card": "Vollständige Climate-Scheduler-Oberfläche als Lovelace-Karte",
    "Climate Scheduler has been updated. Please refresh your browser (Ctrl+F5 or Cmd+Shift+R) to load the new version.": "Climate Scheduler wurde aktualisiert. Bitte den Browser mit Strg+F5 oder Cmd+Umschalt+R neu laden.",
    "Integration frontend not found at /climate_scheduler/static": "Integrationsoberfläche unter /climate_scheduler/static nicht gefunden",
    "No authentication token found. Please ensure the panel is loaded within Home Assistant.": "Kein Anmeldetoken gefunden. Bitte das Panel innerhalb von Home Assistant öffnen.",
    "WebSocket not connected": "Keine WebSocket-Verbindung",
    "Failed to load panel module: {0}": "Panel konnte nicht geladen werden: {0}",
    "Unknown": "Unbekannt",
    "Unavailable": "Nicht verfügbar",
    "Horizontal": "Horizontal",
    "Vertical": "Vertikal",
    "Both": "Beide",
    "Quiet": "Leise",
    "Turbo": "Turbo",
    "Middle": "Mitte",
    "Top": "Oben",
    "Bottom": "Unten",
    "Left": "Links",
    "Right": "Rechts",
    "e.g. 5.0": "z. B. 5,0",
    "e.g. 30.0": "z. B. 30,0",
    "(manual)": "(manuell)",
    "Debug panel restored from saved state": "Gespeicherten Zustand der Diagnosekonsole wiederhergestellt",
    "Log level set to debug (check Home Assistant logs)": "Protokollstufe auf Debug gesetzt (siehe Home-Assistant-Protokolle)",
    "Debug panel enabled": "Diagnosekonsole aktiviert",
    "Frontend operations will be logged here. Backend logs are in Home Assistant system log.": "Oberflächenaktionen werden hier protokolliert. Backend-Protokolle stehen im Systemprotokoll von Home Assistant.",
    "Debug panel disabled": "Diagnosekonsole deaktiviert",
    "Log level reset to info": "Protokollstufe auf Info zurückgesetzt",
    "Debug console cleared": "Diagnosekonsole geleert",
    "Failed to set log level: {0}": "Protokollstufe konnte nicht gesetzt werden: {0}",
    "Failed to reset log level: {0}": "Protokollstufe konnte nicht zurückgesetzt werden: {0}",
    "Server timezone: {0}": "Server-Zeitzone: {0}",
    "Deleted {0} sensor entities. Integration reloaded.": "{0} Sensorentitäten gelöscht. Integration neu geladen.",
    "Deleted {0} sensor entities. Integration reloaded. Errors: {1}.": "{0} Sensorentitäten gelöscht. Integration neu geladen. Fehler: {1}."
};
const messageTemplates = Object.entries(de)
    .filter(([key]) => key.includes('{0}'))
    .map(([key, translated]) => ({
    pattern: new RegExp('^' + key.split(/\{\d+\}/).map(part => part.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('(.*?)') + '$', 's'),
    translated,
}));
function getLanguage() {
    const panel = typeof window !== 'undefined' ? window.climateSchedulerPanelRoot : null;
    const language = panel?.hass?.locale?.language || panel?.hass?.language;
    return language || (typeof document !== 'undefined' ? document.documentElement.lang : '') || 'en';
}
function t$3(message, language = getLanguage()) {
    if (!language.toLowerCase().startsWith('de'))
        return message;
    if (Object.prototype.hasOwnProperty.call(de, message))
        return de[message];
    for (const { pattern, translated } of messageTemplates) {
        const match = message.match(pattern);
        if (match)
            return translated.replace(/\{(\d+)\}/g, (_, index) => match[Number(index) + 1]);
    }
    // Match whole UI messages; captured names remain exactly as entered by the user.
    const patterns = [
        [/^Start monitoring (.*?)\?\n\nThis entity will be managed by the scheduler again\.$/s, name => `Zeitsteuerung für „${name}“ aktivieren?\n\nDieses Gerät wird wieder vom Zeitplan gesteuert.`],
        [/^Stop monitoring (.*?)\?\n\nUnmonitored entities will not be managed by the scheduler\.$/s, name => `Zeitsteuerung für „${name}“ deaktivieren?\n\nDieses Gerät wird nicht mehr vom Zeitplan gesteuert.`],
        [/^Delete profile "(.*?)"\?$/s, name => `Profil „${name}“ löschen?`],
        [/^Rename profile "(.*?)" to:$/s, name => `Neuer Name für das Profil „${name}“:`],
        [/^Clear schedule for group "(.*?)"\?$/s, name => `Zeitplan der Gruppe „${name}“ löschen?`],
        [/^Delete group "(.*?)"\? All entities will be moved back to the entity list\.$/s, name => `Gruppe „${name}“ löschen? Alle Geräte werden zurück in die Geräteliste verschoben.`],
        [/^Remove "(.*?)" from group "(.*?)"\?\n\nThe entity will return to your active entities list\.$/s, (name, group) => `„${name}“ aus der Gruppe „${group}“ entfernen?\n\nDas Gerät wird wieder in der Liste aktiver Geräte angezeigt.`],
        [/^(.*?) is now monitored\.$/s, name => `Zeitsteuerung für „${name}“ aktiviert.`],
        [/^Schedule \((All Days|Weekday|Weekend|Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday)\)$/s, day => `Zeitplan (${de[day] || day})`],
    ];
    for (const [pattern, translate] of patterns) {
        const match = message.match(pattern);
        if (match)
            return translate(...match.slice(1));
    }
    return message;
}

/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t$2=globalThis,e$2=t$2.ShadowRoot&&(void 0===t$2.ShadyCSS||t$2.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s$2=Symbol(),o$4=new WeakMap;let n$3 = class n{constructor(t,e,o){if(this._$cssResult$=true,o!==s$2)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e;}get styleSheet(){let t=this.o;const s=this.t;if(e$2&&void 0===t){const e=void 0!==s&&1===s.length;e&&(t=o$4.get(s)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),e&&o$4.set(s,t));}return t}toString(){return this.cssText}};const r$4=t=>new n$3("string"==typeof t?t:t+"",void 0,s$2),i$3=(t,...e)=>{const o=1===t.length?t[0]:e.reduce((e,s,o)=>e+(t=>{if(true===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[o+1],t[0]);return new n$3(o,t,s$2)},S$1=(s,o)=>{if(e$2)s.adoptedStyleSheets=o.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const e of o){const o=document.createElement("style"),n=t$2.litNonce;void 0!==n&&o.setAttribute("nonce",n),o.textContent=e.cssText,s.appendChild(o);}},c$2=e$2?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return r$4(e)})(t):t;

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:i$2,defineProperty:e$1,getOwnPropertyDescriptor:h$1,getOwnPropertyNames:r$3,getOwnPropertySymbols:o$3,getPrototypeOf:n$2}=Object,a$1=globalThis,c$1=a$1.trustedTypes,l$1=c$1?c$1.emptyScript:"",p$1=a$1.reactiveElementPolyfillSupport,d$1=(t,s)=>t,u$1={toAttribute(t,s){switch(s){case Boolean:t=t?l$1:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t);}return t},fromAttribute(t,s){let i=t;switch(s){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t);}catch(t){i=null;}}return i}},f$1=(t,s)=>!i$2(t,s),b$1={attribute:true,type:String,converter:u$1,reflect:false,useDefault:false,hasChanged:f$1};Symbol.metadata??=Symbol("metadata"),a$1.litPropertyMetadata??=new WeakMap;let y$1 = class y extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t);}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,s=b$1){if(s.state&&(s.attribute=false),this._$Ei(),this.prototype.hasOwnProperty(t)&&((s=Object.create(s)).wrapped=true),this.elementProperties.set(t,s),!s.noAccessor){const i=Symbol(),h=this.getPropertyDescriptor(t,i,s);void 0!==h&&e$1(this.prototype,t,h);}}static getPropertyDescriptor(t,s,i){const{get:e,set:r}=h$1(this.prototype,t)??{get(){return this[s]},set(t){this[s]=t;}};return {get:e,set(s){const h=e?.call(this);r?.call(this,s),this.requestUpdate(t,h,i);},configurable:true,enumerable:true}}static getPropertyOptions(t){return this.elementProperties.get(t)??b$1}static _$Ei(){if(this.hasOwnProperty(d$1("elementProperties")))return;const t=n$2(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties);}static finalize(){if(this.hasOwnProperty(d$1("finalized")))return;if(this.finalized=true,this._$Ei(),this.hasOwnProperty(d$1("properties"))){const t=this.properties,s=[...r$3(t),...o$3(t)];for(const i of s)this.createProperty(i,t[i]);}const t=this[Symbol.metadata];if(null!==t){const s=litPropertyMetadata.get(t);if(void 0!==s)for(const[t,i]of s)this.elementProperties.set(t,i);}this._$Eh=new Map;for(const[t,s]of this.elementProperties){const i=this._$Eu(t,s);void 0!==i&&this._$Eh.set(i,t);}this.elementStyles=this.finalizeStyles(this.styles);}static finalizeStyles(s){const i=[];if(Array.isArray(s)){const e=new Set(s.flat(1/0).reverse());for(const s of e)i.unshift(c$2(s));}else void 0!==s&&i.push(c$2(s));return i}static _$Eu(t,s){const i=s.attribute;return  false===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=false,this.hasUpdated=false,this._$Em=null,this._$Ev();}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this));}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.();}removeController(t){this._$EO?.delete(t);}_$E_(){const t=new Map,s=this.constructor.elementProperties;for(const i of s.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t);}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return S$1(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(true),this._$EO?.forEach(t=>t.hostConnected?.());}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.());}attributeChangedCallback(t,s,i){this._$AK(t,i);}_$ET(t,s){const i=this.constructor.elementProperties.get(t),e=this.constructor._$Eu(t,i);if(void 0!==e&&true===i.reflect){const h=(void 0!==i.converter?.toAttribute?i.converter:u$1).toAttribute(s,i.type);this._$Em=t,null==h?this.removeAttribute(e):this.setAttribute(e,h),this._$Em=null;}}_$AK(t,s){const i=this.constructor,e=i._$Eh.get(t);if(void 0!==e&&this._$Em!==e){const t=i.getPropertyOptions(e),h="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:u$1;this._$Em=e;const r=h.fromAttribute(s,t.type);this[e]=r??this._$Ej?.get(e)??r,this._$Em=null;}}requestUpdate(t,s,i,e=false,h){if(void 0!==t){const r=this.constructor;if(false===e&&(h=this[t]),i??=r.getPropertyOptions(t),!((i.hasChanged??f$1)(h,s)||i.useDefault&&i.reflect&&h===this._$Ej?.get(t)&&!this.hasAttribute(r._$Eu(t,i))))return;this.C(t,s,i);} false===this.isUpdatePending&&(this._$ES=this._$EP());}C(t,s,{useDefault:i,reflect:e,wrapped:h},r){i&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,r??s??this[t]),true!==h||void 0!==r)||(this._$AL.has(t)||(this.hasUpdated||i||(s=void 0),this._$AL.set(t,s)),true===e&&this._$Em!==t&&(this._$Eq??=new Set).add(t));}async _$EP(){this.isUpdatePending=true;try{await this._$ES;}catch(t){Promise.reject(t);}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,s]of this._$Ep)this[t]=s;this._$Ep=void 0;}const t=this.constructor.elementProperties;if(t.size>0)for(const[s,i]of t){const{wrapped:t}=i,e=this[s];true!==t||this._$AL.has(s)||void 0===e||this.C(s,void 0,i,e);}}let t=false;const s=this._$AL;try{t=this.shouldUpdate(s),t?(this.willUpdate(s),this._$EO?.forEach(t=>t.hostUpdate?.()),this.update(s)):this._$EM();}catch(s){throw t=false,this._$EM(),s}t&&this._$AE(s);}willUpdate(t){}_$AE(t){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=true,this.firstUpdated(t)),this.updated(t);}_$EM(){this._$AL=new Map,this.isUpdatePending=false;}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return  true}update(t){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM();}updated(t){}firstUpdated(t){}};y$1.elementStyles=[],y$1.shadowRootOptions={mode:"open"},y$1[d$1("elementProperties")]=new Map,y$1[d$1("finalized")]=new Map,p$1?.({ReactiveElement:y$1}),(a$1.reactiveElementVersions??=[]).push("2.1.2");

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t$1=globalThis,i$1=t=>t,s$1=t$1.trustedTypes,e=s$1?s$1.createPolicy("lit-html",{createHTML:t=>t}):void 0,h="$lit$",o$2=`lit$${Math.random().toFixed(9).slice(2)}$`,n$1="?"+o$2,r$2=`<${n$1}>`,l=document,c=()=>l.createComment(""),a=t=>null===t||"object"!=typeof t&&"function"!=typeof t,u=Array.isArray,d=t=>u(t)||"function"==typeof t?.[Symbol.iterator],f="[ \t\n\f\r]",v=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,_=/-->/g,m=/>/g,p=RegExp(`>|${f}(?:([^\\s"'>=/]+)(${f}*=${f}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),g=/'/g,$=/"/g,y=/^(?:script|style|textarea|title)$/i,x=t=>(i,...s)=>({_$litType$:t,strings:i,values:s}),b=x(1),E=Symbol.for("lit-noChange"),A=Symbol.for("lit-nothing"),C=new WeakMap,P=l.createTreeWalker(l,129);function V(t,i){if(!u(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==e?e.createHTML(i):i}const N=(t,i)=>{const s=t.length-1,e=[];let n,l=2===i?"<svg>":3===i?"<math>":"",c=v;for(let i=0;i<s;i++){const s=t[i];let a,u,d=-1,f=0;for(;f<s.length&&(c.lastIndex=f,u=c.exec(s),null!==u);)f=c.lastIndex,c===v?"!--"===u[1]?c=_:void 0!==u[1]?c=m:void 0!==u[2]?(y.test(u[2])&&(n=RegExp("</"+u[2],"g")),c=p):void 0!==u[3]&&(c=p):c===p?">"===u[0]?(c=n??v,d=-1):void 0===u[1]?d=-2:(d=c.lastIndex-u[2].length,a=u[1],c=void 0===u[3]?p:'"'===u[3]?$:g):c===$||c===g?c=p:c===_||c===m?c=v:(c=p,n=void 0);const x=c===p&&t[i+1].startsWith("/>")?" ":"";l+=c===v?s+r$2:d>=0?(e.push(a),s.slice(0,d)+h+s.slice(d)+o$2+x):s+o$2+(-2===d?i:x);}return [V(t,l+(t[s]||"<?>")+(2===i?"</svg>":3===i?"</math>":"")),e]};class S{constructor({strings:t,_$litType$:i},e){let r;this.parts=[];let l=0,a=0;const u=t.length-1,d=this.parts,[f,v]=N(t,i);if(this.el=S.createElement(f,e),P.currentNode=this.el.content,2===i||3===i){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes);}for(;null!==(r=P.nextNode())&&d.length<u;){if(1===r.nodeType){if(r.hasAttributes())for(const t of r.getAttributeNames())if(t.endsWith(h)){const i=v[a++],s=r.getAttribute(t).split(o$2),e=/([.?@])?(.*)/.exec(i);d.push({type:1,index:l,name:e[2],strings:s,ctor:"."===e[1]?I:"?"===e[1]?L:"@"===e[1]?z:H}),r.removeAttribute(t);}else t.startsWith(o$2)&&(d.push({type:6,index:l}),r.removeAttribute(t));if(y.test(r.tagName)){const t=r.textContent.split(o$2),i=t.length-1;if(i>0){r.textContent=s$1?s$1.emptyScript:"";for(let s=0;s<i;s++)r.append(t[s],c()),P.nextNode(),d.push({type:2,index:++l});r.append(t[i],c());}}}else if(8===r.nodeType)if(r.data===n$1)d.push({type:2,index:l});else {let t=-1;for(;-1!==(t=r.data.indexOf(o$2,t+1));)d.push({type:7,index:l}),t+=o$2.length-1;}l++;}}static createElement(t,i){const s=l.createElement("template");return s.innerHTML=t,s}}function M(t,i,s=t,e){if(i===E)return i;let h=void 0!==e?s._$Co?.[e]:s._$Cl;const o=a(i)?void 0:i._$litDirective$;return h?.constructor!==o&&(h?._$AO?.(false),void 0===o?h=void 0:(h=new o(t),h._$AT(t,s,e)),void 0!==e?(s._$Co??=[])[e]=h:s._$Cl=h),void 0!==h&&(i=M(t,h._$AS(t,i.values),h,e)),i}class R{constructor(t,i){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=i;}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:i},parts:s}=this._$AD,e=(t?.creationScope??l).importNode(i,true);P.currentNode=e;let h=P.nextNode(),o=0,n=0,r=s[0];for(;void 0!==r;){if(o===r.index){let i;2===r.type?i=new k(h,h.nextSibling,this,t):1===r.type?i=new r.ctor(h,r.name,r.strings,this,t):6===r.type&&(i=new Z(h,this,t)),this._$AV.push(i),r=s[++n];}o!==r?.index&&(h=P.nextNode(),o++);}return P.currentNode=l,e}p(t){let i=0;for(const s of this._$AV) void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,i),i+=s.strings.length-2):s._$AI(t[i])),i++;}}class k{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,i,s,e){this.type=2,this._$AH=A,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=s,this.options=e,this._$Cv=e?.isConnected??true;}get parentNode(){let t=this._$AA.parentNode;const i=this._$AM;return void 0!==i&&11===t?.nodeType&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,i=this){t=M(this,t,i),a(t)?t===A||null==t||""===t?(this._$AH!==A&&this._$AR(),this._$AH=A):t!==this._$AH&&t!==E&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):d(t)?this.k(t):this._(t);}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t));}_(t){this._$AH!==A&&a(this._$AH)?this._$AA.nextSibling.data=t:this.T(l.createTextNode(t)),this._$AH=t;}$(t){const{values:i,_$litType$:s}=t,e="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=S.createElement(V(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===e)this._$AH.p(i);else {const t=new R(e,this),s=t.u(this.options);t.p(i),this.T(s),this._$AH=t;}}_$AC(t){let i=C.get(t.strings);return void 0===i&&C.set(t.strings,i=new S(t)),i}k(t){u(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let s,e=0;for(const h of t)e===i.length?i.push(s=new k(this.O(c()),this.O(c()),this,this.options)):s=i[e],s._$AI(h),e++;e<i.length&&(this._$AR(s&&s._$AB.nextSibling,e),i.length=e);}_$AR(t=this._$AA.nextSibling,s){for(this._$AP?.(false,true,s);t!==this._$AB;){const s=i$1(t).nextSibling;i$1(t).remove(),t=s;}}setConnected(t){ void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t));}}class H{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,i,s,e,h){this.type=1,this._$AH=A,this._$AN=void 0,this.element=t,this.name=i,this._$AM=e,this.options=h,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=A;}_$AI(t,i=this,s,e){const h=this.strings;let o=false;if(void 0===h)t=M(this,t,i,0),o=!a(t)||t!==this._$AH&&t!==E,o&&(this._$AH=t);else {const e=t;let n,r;for(t=h[0],n=0;n<h.length-1;n++)r=M(this,e[s+n],i,n),r===E&&(r=this._$AH[n]),o||=!a(r)||r!==this._$AH[n],r===A?t=A:t!==A&&(t+=(r??"")+h[n+1]),this._$AH[n]=r;}o&&!e&&this.j(t);}j(t){t===A?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"");}}class I extends H{constructor(){super(...arguments),this.type=3;}j(t){this.element[this.name]=t===A?void 0:t;}}class L extends H{constructor(){super(...arguments),this.type=4;}j(t){this.element.toggleAttribute(this.name,!!t&&t!==A);}}class z extends H{constructor(t,i,s,e,h){super(t,i,s,e,h),this.type=5;}_$AI(t,i=this){if((t=M(this,t,i,0)??A)===E)return;const s=this._$AH,e=t===A&&s!==A||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,h=t!==A&&(s===A||e);e&&this.element.removeEventListener(this.name,this,s),h&&this.element.addEventListener(this.name,this,t),this._$AH=t;}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t);}}class Z{constructor(t,i,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=s;}get _$AU(){return this._$AM._$AU}_$AI(t){M(this,t);}}const B=t$1.litHtmlPolyfillSupport;B?.(S,k),(t$1.litHtmlVersions??=[]).push("3.3.2");const D=(t,i,s)=>{const e=s?.renderBefore??i;let h=e._$litPart$;if(void 0===h){const t=s?.renderBefore??null;e._$litPart$=h=new k(i.insertBefore(c(),t),t,void 0,s??{});}return h._$AI(t),h};

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const s=globalThis;class i extends y$1{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0;}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=D(r,this.renderRoot,this.renderOptions);}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(true);}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(false);}render(){return E}}i._$litElement$=true,i["finalized"]=true,s.litElementHydrateSupport?.({LitElement:i});const o$1=s.litElementPolyfillSupport;o$1?.({LitElement:i});(s.litElementVersions??=[]).push("4.2.2");

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t=t=>(e,o)=>{ void 0!==o?o.addInitializer(()=>{customElements.define(t,e);}):customElements.define(t,e);};

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const o={attribute:true,type:String,converter:u$1,reflect:false,hasChanged:f$1},r$1=(t=o,e,r)=>{const{kind:n,metadata:i}=r;let s=globalThis.litPropertyMetadata.get(i);if(void 0===s&&globalThis.litPropertyMetadata.set(i,s=new Map),"setter"===n&&((t=Object.create(t)).wrapped=true),s.set(r.name,t),"accessor"===n){const{name:o}=r;return {set(r){const n=e.get.call(this);e.set.call(this,r),this.requestUpdate(o,n,t,true,r);},init(e){return void 0!==e&&this.C(o,void 0,t,e),e}}}if("setter"===n){const{name:o}=r;return function(r){const n=this[o];e.call(this,r),this.requestUpdate(o,n,t,true,r);}}throw Error("Unsupported decorator location: "+n)};function n(t){return (e,o)=>"object"==typeof o?r$1(t,e,o):((t,e,o)=>{const r=e.hasOwnProperty(o);return e.constructor.createProperty(o,t),r?Object.getOwnPropertyDescriptor(e,o):void 0})(t,e,o)}

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function r(r){return n({...r,state:true,attribute:false})}

// Version checking - detect if browser cache is stale
(async function () {
    try {
        const scriptUrl = document.currentScript?.src || new URL(import.meta.url).href;
        const loadedVersion = new URL(scriptUrl).searchParams.get('v');
        // Fetch the current server version
        const response = await fetch('/climate_scheduler/static/.version');
        if (response.ok) {
            const serverVersion = (await response.text()).trim().split(',')[0];
            // Compare versions - if they don't match, user has stale cache
            if (loadedVersion && serverVersion && loadedVersion !== serverVersion) {
                console.warn('[Climate Scheduler] Version mismatch detected. Loaded:', loadedVersion, 'Server:', serverVersion);
                // Store in sessionStorage to avoid showing repeatedly
                const notificationKey = 'climate_scheduler_refresh_shown';
                const shownVersion = sessionStorage.getItem(notificationKey);
                if (shownVersion !== serverVersion) {
                    // Show persistent notification
                    const event = new Event('hass-notification', {
                        bubbles: true,
                        cancelable: false,
                        composed: true
                    });
                    event.detail = {
                        message: t$3("Climate Scheduler has been updated. Please refresh your browser (Ctrl+F5 or Cmd+Shift+R) to load the new version."),
                        duration: 0 // Persistent notification
                    };
                    document.body.dispatchEvent(event);
                    // Mark as shown for this session
                    sessionStorage.setItem(notificationKey, serverVersion);
                    console.info('[Climate Scheduler] Refresh notification displayed');
                }
            }
        }
    }
    catch (e) {
        console.warn('[Climate Scheduler] Version check failed:', e);
    }
})();
let ClimateSchedulerCard = class ClimateSchedulerCard extends i {
    _t(message) {
        return t$3(message, this.hass?.locale?.language || this.hass?.language);
    }
    static getConfigElement() { return null; }
    static getStubConfig() { return {}; }
    constructor() {
        super();
        this._config = {};
        this._hasIntegration = false;
        this._errorMessage = null;
        this._panelLoaded = false;
        // Register card in picker
        this._registerCard();
    }
    _registerCard() {
        try {
            window.customCards = window.customCards || [];
            const cardType = 'climate-scheduler-card';
            const exists = window.customCards.some((c) => c.type === cardType);
            if (!exists) {
                window.customCards.push({
                    type: cardType,
                    name: this._t("Climate Scheduler Card"),
                    description: this._t("Full Climate Scheduler UI as a Lovelace card"),
                    preview: false,
                });
                console.info('[Climate Scheduler] Card registered in picker');
            }
        }
        catch (e) {
            console.error('[Climate Scheduler] Failed to register card in picker:', e);
        }
    }
    setConfig(config) {
        this._config = config || {};
    }
    async firstUpdated() {
        await this._loadPanel();
    }
    updated(changedProperties) {
        if (changedProperties.has('hass') && this.hass && !this._panelLoaded) {
            this._loadPanel();
        }
    }
    render() {
        if (this._errorMessage) {
            return b `
        <div class="wrapper">
          <div class="message error">
            ${this._errorMessage}
          </div>
        </div>
      `;
        }
        if (!this.hass) {
            return b `
        <div class="wrapper">
          <div class="message warning">${this._t("Waiting for Home Assistant connection...")}</div>
        </div>
      `;
        }
        if (!this._hasIntegration) {
            return b `
        <div class="wrapper">
          <div class="message error">
            <h3>${this._t("❌ Climate Scheduler Integration Not Found")}</h3>
            <p>${this._t("This card requires the Climate Scheduler integration to be installed.")}</p>
            <p>${this._t("Install it from HACS or visit:")}
              <a href="https://github.com/kneave/climate-scheduler" target="_blank">
                github.com/kneave/climate-scheduler
              </a>
            </p>
          </div>
        </div>
      `;
        }
        return b `
      <div class="wrapper">
        <climate-scheduler-panel 
          .hass=${this.hass} 
          embed="1">
        </climate-scheduler-panel>
      </div>
    `;
    }
    async _loadPanel() {
        // Check if integration is installed
        if (!this.hass) {
            return;
        }
        // Check if climate_scheduler domain services exist
        this._hasIntegration = this.hass.services?.climate_scheduler !== undefined;
        if (!this._hasIntegration) {
            this.requestUpdate();
            return;
        }
        // Load panel module
        try {
            // Determine base path - try integration-hosted static path first, fallback to standalone
            const scriptUrl = import.meta.url;
            // Integration registers frontend at /<domain>/static
            const basePath = '/climate_scheduler/static';
            // Only accept the integration-hosted static path; do not fallback.
            const testResponse = await fetch(`${basePath}/.version`);
            if (!testResponse.ok) {
                throw new Error(this._t("Integration frontend not found at /climate_scheduler/static"));
            }
            const hacstag = new URL(scriptUrl).searchParams.get('hacstag');
            const versionParam = new URL(scriptUrl).searchParams.get('v');
            let versionString = null;
            // Check .version file first - if it has a timestamp, prioritize it over hacstag
            try {
                const response = await fetch(`${basePath}/.version`);
                if (response.ok) {
                    const versionText = (await response.text()).trim();
                    if (versionText.includes(',')) {
                        // Has timestamp - this is a dev deployment, use it instead of hacstag
                        versionString = versionText;
                    }
                    else if (!hacstag && !versionParam) {
                        // No timestamp and no hacstag - production release via script
                        versionString = versionText;
                    }
                }
            }
            catch (e) {
                console.warn('Failed to load .version file:', e);
            }
            // Prefer v= param (bundled integration), then hacstag (HACS standalone)
            if (!versionString && versionParam) {
                versionString = versionParam;
            }
            else if (!versionString && hacstag) {
                versionString = hacstag;
            }
            if (!customElements.get('climate-scheduler-panel')) {
                await import(`${basePath}/panel.js?v=${versionString}`);
            }
            this._panelLoaded = true;
            this.requestUpdate();
        }
        catch (e) {
            this._errorMessage = b `
        ${this._t("Failed to load panel module:")} ${e.message}<br>
        ${this._t("Make sure the Climate Scheduler integration is installed and the frontend is available at /climate_scheduler/static")}
      `;
            this.requestUpdate();
        }
    }
    getCardSize() {
        return 10;
    }
};
ClimateSchedulerCard.styles = i$3 `
    :host {
      display: block;
    }
    .wrapper {
      width: 100%;
      min-height: 400px;
    }
    .message {
      padding: 16px;
    }
    .error {
      color: var(--error-color, red);
      border: 1px solid var(--error-color, red);
      border-radius: 4px;
      margin: 16px;
    }
    .warning {
      color: var(--warning-color, orange);
    }
    .error a {
      color: var(--primary-color, #03a9f4);
    }
  `;
__decorate([
    n({ type: Object })
], ClimateSchedulerCard.prototype, "hass", void 0);
__decorate([
    r()
], ClimateSchedulerCard.prototype, "_config", void 0);
__decorate([
    r()
], ClimateSchedulerCard.prototype, "_hasIntegration", void 0);
__decorate([
    r()
], ClimateSchedulerCard.prototype, "_errorMessage", void 0);
__decorate([
    r()
], ClimateSchedulerCard.prototype, "_panelLoaded", void 0);
ClimateSchedulerCard = __decorate([
    t('climate-scheduler-card')
], ClimateSchedulerCard);

export { ClimateSchedulerCard };
//# sourceMappingURL=climate-scheduler-card.js.map
