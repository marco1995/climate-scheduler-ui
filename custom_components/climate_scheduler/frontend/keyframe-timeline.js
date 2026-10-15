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

/** Readable axis ticks without changing the graph's temperature range. */
function temperatureTicks(min, max, count = 6) {
    if (!Number.isFinite(min) || !Number.isFinite(max) || max <= min)
        return [];
    const rough = (max - min) / Math.max(1, count - 1);
    const magnitude = 10 ** Math.floor(Math.log10(rough));
    const step = ([1, 2, 2.5, 5, 10].find(n => n * magnitude >= rough) || 10) * magnitude;
    const ticks = [];
    for (let i = Math.ceil(min / step); i * step <= max + step * 1e-9; i++) {
        ticks.push(Number((i * step).toPrecision(12)));
    }
    return ticks;
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

// Color palette for automatic background graph coloring
const BACKGROUND_GRAPH_COLORS = [
    '#f44336', // Red
    '#9c27b0', // Purple
    '#3f51b5', // Indigo
    '#00bcd4', // Cyan
    '#009688', // Teal
    '#4caf50', // Green
    '#8bc34a', // Light Green
    '#cddc39', // Lime
    '#ffeb3b', // Yellow
    '#ffc107', // Amber
    '#ff9800', // Orange
    '#ff5722', // Deep Orange
    '#795548', // Brown
    '#607d8b', // Blue Grey
];
let KeyframeTimeline = class KeyframeTimeline extends i {
    constructor() {
        super(...arguments);
        this.duration = 24; // hours
        this.slots = 96; // time divisions (e.g., 15-min intervals in 24h)
        this.keyframes = [];
        this.minValue = 5; // Minimum Y axis value (default: 5°C)
        this.maxValue = 30; // Maximum Y axis value (default: 30°C)
        this.snapValue = 0; // Y axis snap step (0 = no snapping)
        this.xAxisLabel = ''; // X axis label
        this.yAxisLabel = ''; // Y axis label
        this.title = ''; // Title displayed in top left
        this.showHeader = true; // Show header with controls
        this.allowCollapse = true; // Allow collapsing the timeline
        this.readonly = false; // Disable all interactions
        this.showCurrentTime = false; // Automatically show indicator at current time
        this.backgroundGraphs = []; // Background reference graphs
        this.advanceHistory = []; // Array of {activated_at, target_time, cancelled_at, target_node}
        this.tooltipMode = 'cursor'; // Tooltip display mode (set from global settings)
        this.canvasWidth = 0;
        this.canvasHeight = 600;
        this.showConfig = false;
        this.draggingIndex = null;
        this.draggingSegment = null;
        this.selectedKeyframeIndex = null;
        this.collapsed = false;
        this.showScrollNavLeft = false;
        this.showScrollNavRight = false;
        this.undoStack = []; // Changed to store full keyframe arrays
        this.legendCollapsed = true;
        this.isDragging = false;
        this.hasMoved = false;
        this.dragStartX = 0;
        this.dragStartY = 0;
        this.isPanning = false;
        this.panStartX = 0;
        this.panStartScrollLeft = 0;
        this.lastClickTime = 0;
        this.lastClickIndex = -1; // Track which keyframe was last clicked
        this.lastClickX = 0;
        this.instanceId = Math.random().toString(36).substring(7); // Unique instance ID for debugging
        this.lastClickY = 0;
        this.justDeletedKeyframe = false; // Prevent dblclick from adding after delete
        this.holdStartX = 0;
        this.holdStartY = 0;
        this.hoverRenderPending = false;
        this.hoverX = 0;
        this.hoverY = 0;
    }
    willUpdate(changedProperties) {
        // Property change tracking
    }
    firstUpdated() {
        const canvasEl = this.shadowRoot?.querySelector('canvas');
        if (canvasEl) {
            this.canvas = canvasEl;
            this.ctx = canvasEl.getContext('2d') || undefined;
            this.updateCanvasSize();
        }
        this.tooltipEl = this.shadowRoot?.querySelector('.cursor-tooltip');
        this.wrapperEl = this.shadowRoot?.querySelector('.timeline-canvas-wrapper');
        this.checkScrollVisibility();
        // Listen for scroll events to update button visibility
        if (this.wrapperEl) {
            this.wrapperEl.addEventListener('scroll', () => this.checkScrollVisibility());
        }
        // Update canvas size on window resize
        window.addEventListener('resize', () => {
            this.updateCanvasSize();
            this.drawTimeline();
            this.checkScrollVisibility();
        });
        // Draw immediately - CSS variables should now be properly set via styles.css
        requestAnimationFrame(() => {
            this.updateCanvasSize();
            this.drawTimeline();
        });
        // Setup current time indicator if enabled
        if (this.showCurrentTime) {
            this.updateCurrentTime();
            this.startCurrentTimeTimer();
        }
        // Setup keyboard shortcuts
        this.keyboardHandler = (e) => {
            if ((e.ctrlKey || e.metaKey) && e.key === 'z' && !e.shiftKey) {
                e.preventDefault();
                this.undo();
            }
        };
        document.addEventListener('keydown', this.keyboardHandler);
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        this.stopCurrentTimeTimer();
        // Remove keyboard listener
        if (this.keyboardHandler) {
            document.removeEventListener('keydown', this.keyboardHandler);
        }
    }
    updated(changedProperties) {
        super.updated(changedProperties);
        // Redraw when keyframes, backgroundGraphs or advanceHistory changes
        if (changedProperties.has('keyframes')) {
            this.drawTimeline();
            this.updateNavigationButtonsState();
        }
        // Redraw when backgroundGraphs or advanceHistory changes
        if (changedProperties.has('backgroundGraphs') || changedProperties.has('advanceHistory')) {
            this.drawTimeline();
        }
        // Start/stop timer when showCurrentTime changes
        if (changedProperties.has('showCurrentTime')) {
            if (this.showCurrentTime) {
                this.updateCurrentTime();
                this.startCurrentTimeTimer();
            }
            else {
                this.stopCurrentTimeTimer();
            }
        }
    }
    updateCurrentTime() {
        const now = new Date();
        const hours = now.getHours();
        const minutes = now.getMinutes();
        const seconds = now.getSeconds();
        // Calculate time as decimal hours
        const currentTime = hours + (minutes / 60) + (seconds / 3600);
        // Only update if within the timeline duration
        if (currentTime <= this.duration) {
            this.indicatorTime = currentTime;
            this.drawTimeline();
        }
    }
    startCurrentTimeTimer() {
        // Update every 10 seconds for smooth movement
        this.currentTimeTimer = window.setInterval(() => {
            this.updateCurrentTime();
        }, 10000);
    }
    stopCurrentTimeTimer() {
        if (this.currentTimeTimer) {
            window.clearInterval(this.currentTimeTimer);
            this.currentTimeTimer = undefined;
        }
    }
    updateCanvasSize() {
        if (!this.canvas)
            return;
        // Use offsetWidth to get actual canvas width (not clipped by scroll container)
        const canvasCSSWidth = this.canvas.offsetWidth;
        this.canvasWidth = canvasCSSWidth * window.devicePixelRatio;
        // Read height from CSS variables
        const computedStyle = getComputedStyle(this);
        const cssHeightVar = this.collapsed ? '--timeline-height-collapsed' : '--timeline-height';
        const cssHeight = computedStyle.getPropertyValue(cssHeightVar).trim();
        const baseHeight = parseInt(cssHeight);
        this.canvasHeight = baseHeight * window.devicePixelRatio;
        this.canvas.width = this.canvasWidth;
        this.canvas.height = this.canvasHeight;
    }
    normalizeValue(value) {
        // Convert value from minValue-maxValue range to 0-1 range
        return (value - this.minValue) / (this.maxValue - this.minValue);
    }
    denormalizeValue(normalized) {
        // Convert value from 0-1 range to minValue-maxValue range
        return normalized * (this.maxValue - this.minValue) + this.minValue;
    }
    getThemeColor(cssVar) {
        return getComputedStyle(this).getPropertyValue(cssVar).trim();
    }
    getBackgroundGraphColor(bgGraph, graphIndex) {
        return bgGraph.color || BACKGROUND_GRAPH_COLORS[graphIndex % BACKGROUND_GRAPH_COLORS.length];
    }
    toggleLegend(e) {
        e.stopPropagation();
        this.legendCollapsed = !this.legendCollapsed;
    }
    getBaseFontSize() {
        // Get computed font size from host element to respect browser/accessibility settings
        const computedStyle = getComputedStyle(this);
        return parseFloat(computedStyle.fontSize);
    }
    snapValueToGrid(value) {
        // Snap value to grid if snapValue is set
        if (this.snapValue > 0) {
            const snapped = Math.round(value / this.snapValue) * this.snapValue;
            return this.roundToStepPrecision(snapped, this.snapValue);
        }
        return this.roundToPrecision(value, 4);
    }
    roundToStepPrecision(value, step) {
        return this.roundToPrecision(value, this.getStepPrecision(step));
    }
    roundToPrecision(value, precision) {
        const safePrecision = Math.max(0, Math.min(precision, 10));
        const factor = 10 ** safePrecision;
        return Math.round((value + Number.EPSILON) * factor) / factor;
    }
    getStepPrecision(step) {
        if (!Number.isFinite(step) || step <= 0) {
            return 3;
        }
        const stepString = step.toString().toLowerCase();
        if (stepString.includes('e-')) {
            const exponent = Number(stepString.split('e-')[1]);
            return Number.isFinite(exponent) ? exponent : 3;
        }
        const decimalPart = stepString.split('.')[1];
        return decimalPart ? decimalPart.length : 0;
    }
    getGraphDimensions(rect) {
        const labelHeight = 30;
        const leftMargin = 35;
        const yAxisWidth = 35;
        const rightMargin = 35;
        const topMargin = 25;
        const bottomMargin = 25;
        const graphHeight = rect.height - labelHeight - topMargin - bottomMargin;
        // Use canvas width (not rect width which is clipped by scroll container)
        const canvasWidthCSS = this.canvas.width / (window.devicePixelRatio || 1);
        const graphWidth = canvasWidthCSS - leftMargin - yAxisWidth - rightMargin;
        return {
            labelHeight,
            leftMargin,
            yAxisWidth,
            rightMargin,
            topMargin,
            bottomMargin,
            graphHeight,
            graphWidth,
            canvasWidthCSS
        };
    }
    sortKeyframes() {
        // Keep track of what was selected/dragging before sort
        const selectedKeyframe = this.selectedKeyframeIndex !== null ? this.keyframes[this.selectedKeyframeIndex] : null;
        const draggingKeyframe = this.draggingIndex !== null ? this.keyframes[this.draggingIndex] : null;
        // Sort keyframes by time
        this.keyframes = [...this.keyframes].sort((a, b) => a.time - b.time);
        // Update indices to point to same keyframes after sort
        if (selectedKeyframe) {
            this.selectedKeyframeIndex = this.keyframes.findIndex(kf => kf === selectedKeyframe);
        }
        if (draggingKeyframe) {
            this.draggingIndex = this.keyframes.findIndex(kf => kf === draggingKeyframe);
        }
    }
    drawTimeline() {
        if (!this.ctx || !this.canvas)
            return;
        this.canvas.getBoundingClientRect();
        const dpr = window.devicePixelRatio;
        this.ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
        this.canvasWidth / this.slots;
        // Reserve space at bottom for labels, left for Y axis, right margin, and top for margin
        const labelHeight = 30 * dpr;
        const leftMargin = 35 * dpr;
        const yAxisWidth = 35 * dpr;
        const rightMargin = 35 * dpr;
        const topMargin = 45 * dpr;
        const bottomMargin = 25 * dpr;
        const graphHeight = this.canvasHeight - labelHeight - topMargin - bottomMargin;
        const graphWidth = this.canvasWidth - leftMargin - yAxisWidth - rightMargin;
        // Draw Y axis labels and horizontal grid lines
        const ticks = this.collapsed ? [this.minValue, this.maxValue] : temperatureTicks(this.minValue, this.maxValue);
        const baseFontSize = this.getBaseFontSize();
        const yLabelOffset = 9 * dpr; // Distance from Y-axis to label text
        const yAxisLabelOffset = -20 * dpr; // Distance from left edge to vertical Y-axis label
        const xAxisLabelOffset = 25 * dpr; // Distance from bottom to horizontal X-axis label
        this.ctx.fillStyle = this.getThemeColor('--canvas-text-secondary');
        this.ctx.font = `${baseFontSize * 0.8 * dpr}px sans-serif`;
        this.ctx.textAlign = 'right';
        this.ctx.textBaseline = 'middle';
        this.ctx.strokeStyle = this.getThemeColor('--canvas-grid-line');
        this.ctx.lineWidth = 1 * dpr;
        for (const value of ticks) {
            const ratio = (value - this.minValue) / (this.maxValue - this.minValue);
            const y = topMargin + (graphHeight * (1 - ratio));
            // Draw label
            this.ctx.fillText(new Intl.NumberFormat(getLanguage(), { maximumFractionDigits: 2 }).format(value), leftMargin + yAxisWidth - yLabelOffset, y);
            // Draw horizontal grid line
            this.ctx.beginPath();
            this.ctx.moveTo(leftMargin + yAxisWidth, y);
            this.ctx.lineTo(leftMargin + yAxisWidth + graphWidth, y);
            this.ctx.stroke();
        }
        // Draw Y axis label (vertical text on left side)
        if (this.yAxisLabel && !this.collapsed) {
            this.ctx.save();
            this.ctx.translate(leftMargin + yAxisLabelOffset, this.canvasHeight / 2);
            this.ctx.rotate(-Math.PI / 2);
            this.ctx.fillStyle = this.getThemeColor('--canvas-text-primary');
            this.ctx.font = `${baseFontSize * dpr}px sans-serif`;
            this.ctx.textAlign = 'center';
            this.ctx.textBaseline = 'middle';
            this.ctx.fillText(t$3(this.yAxisLabel), 0, 0);
            this.ctx.restore();
        }
        // Adjust slot width for graph area
        graphWidth / this.slots;
        // Draw hour markers (full height) and labels
        this.ctx.fillStyle = this.getThemeColor('--canvas-text-secondary');
        this.ctx.font = `${baseFontSize * dpr}px sans-serif`;
        this.ctx.textAlign = 'center';
        this.ctx.textBaseline = 'middle';
        const hoursToShow = Math.ceil(this.duration);
        const labelInterval = this.collapsed ? 3 : 1; // Show labels every 3 hours when collapsed
        for (let i = 0; i <= hoursToShow; i++) {
            const x = leftMargin + yAxisWidth + ((i / this.duration) * graphWidth);
            // Draw hour marker line with thicker lines every 6 hours
            const isMajorLine = i % 6 === 0;
            this.ctx.strokeStyle = isMajorLine
                ? this.getThemeColor('--canvas-grid-line-major')
                : this.getThemeColor('--canvas-grid-line');
            this.ctx.lineWidth = isMajorLine ? 2 * dpr : 1 * dpr;
            this.ctx.beginPath();
            this.ctx.moveTo(x, topMargin);
            this.ctx.lineTo(x, topMargin + graphHeight);
            this.ctx.stroke();
            // Draw hour label only at specified intervals (below graph area)
            if (i % labelInterval === 0) {
                const hour = i % 24;
                const label = hour === 0 ? '00' : hour.toString().padStart(2, '0');
                this.ctx.fillText(label, x, topMargin + graphHeight + (15 * dpr));
            }
        }
        // Draw axis lines (like SVG graph)
        this.ctx.strokeStyle = this.getThemeColor('--canvas-text-primary');
        this.ctx.lineWidth = 2 * dpr;
        // X-axis (bottom)
        this.ctx.beginPath();
        this.ctx.moveTo(leftMargin + yAxisWidth, topMargin + graphHeight);
        this.ctx.lineTo(leftMargin + yAxisWidth + graphWidth, topMargin + graphHeight);
        this.ctx.stroke();
        // Y-axis (left)
        this.ctx.beginPath();
        this.ctx.moveTo(leftMargin + yAxisWidth, topMargin);
        this.ctx.lineTo(leftMargin + yAxisWidth, topMargin + graphHeight);
        this.ctx.stroke();
        // Current time indicator (green dashed line like SVG)
        const now = new Date();
        const currentHours = now.getHours() + now.getMinutes() / 60;
        const currentX = leftMargin + yAxisWidth + ((currentHours / this.duration) * graphWidth);
        this.ctx.strokeStyle = '#00ff00';
        this.ctx.lineWidth = 2 * dpr;
        this.ctx.setLineDash([5 * dpr, 5 * dpr]);
        this.ctx.globalAlpha = 0.7;
        this.ctx.beginPath();
        this.ctx.moveTo(currentX, topMargin);
        this.ctx.lineTo(currentX, topMargin + graphHeight);
        this.ctx.stroke();
        this.ctx.setLineDash([]);
        this.ctx.globalAlpha = 1.0;
        // Current time label at top
        const hours = Math.floor(currentHours);
        const minutes = Math.floor((currentHours - hours) * 60);
        const timeLabel = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
        this.ctx.fillStyle = this.getThemeColor('--canvas-text-primary');
        this.ctx.font = `bold ${baseFontSize * dpr}px sans-serif`;
        this.ctx.textAlign = 'center';
        this.ctx.textBaseline = 'bottom';
        this.ctx.fillText(timeLabel, currentX, topMargin - (5 * dpr));
        // Draw X axis label (below time labels)
        if (this.xAxisLabel && !this.collapsed) {
            this.ctx.fillStyle = this.getThemeColor('--canvas-text-primary');
            this.ctx.font = `${baseFontSize * dpr}px sans-serif`;
            this.ctx.textAlign = 'center';
            this.ctx.textBaseline = 'top';
            this.ctx.fillText(t$3(this.xAxisLabel), leftMargin + yAxisWidth + (graphWidth / 2), this.canvasHeight - xAxisLabelOffset);
        }
        // Draw background graphs (reference data)
        const ctx = this.ctx;
        this.backgroundGraphs.forEach((bgGraph, graphIndex) => {
            if (bgGraph.keyframes.length === 0)
                return;
            // Sort keyframes by time for proper line drawing
            const sortedKeyframes = [...bgGraph.keyframes].sort((a, b) => a.time - b.time);
            // Use specified color or cycle through palette
            const color = this.getBackgroundGraphColor(bgGraph, graphIndex);
            const rgbaMatch = color.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
            if (rgbaMatch) {
                ctx.strokeStyle = `rgba(${rgbaMatch[1]}, ${rgbaMatch[2]}, ${rgbaMatch[3]}, 0.5)`;
            }
            else {
                // Try hex to rgba conversion
                const hexMatch = color.match(/#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})/i);
                if (hexMatch) {
                    const r = parseInt(hexMatch[1], 16);
                    const g = parseInt(hexMatch[2], 16);
                    const b = parseInt(hexMatch[3], 16);
                    ctx.strokeStyle = `rgba(${r}, ${g}, ${b}, 0.5)`;
                }
                else {
                    ctx.strokeStyle = color;
                }
            }
            ctx.lineWidth = 1.5 * dpr;
            ctx.setLineDash([3 * dpr, 3 * dpr]); // Dashed line for background
            // Draw lines between keyframes
            for (let i = 0; i < sortedKeyframes.length - 1; i++) {
                const kf1 = sortedKeyframes[i];
                const kf2 = sortedKeyframes[i + 1];
                const x1 = leftMargin + yAxisWidth + ((kf1.time / this.duration) * graphWidth);
                const y1 = topMargin + ((1 - this.normalizeValue(kf1.value)) * graphHeight);
                const x2 = leftMargin + yAxisWidth + ((kf2.time / this.duration) * graphWidth);
                const y2 = topMargin + ((1 - this.normalizeValue(kf2.value)) * graphHeight);
                // Draw line between points
                ctx.beginPath();
                ctx.moveTo(x1, y1);
                ctx.lineTo(x2, y2);
                ctx.stroke();
            }
            ctx.setLineDash([]); // Reset dash
            // Draw small circle markers at each keyframe (smaller than main graph)
            sortedKeyframes.forEach(kf => {
                const x = leftMargin + yAxisWidth + ((kf.time / this.duration) * graphWidth);
                const y = topMargin + ((1 - this.normalizeValue(kf.value)) * graphHeight);
                this.ctx.fillStyle = color;
                this.ctx.beginPath();
                this.ctx.arc(x, y, 2 * dpr, 0, Math.PI * 2);
                this.ctx.fill();
            });
        });
        // Draw FLAT/STEP lines between keyframes (like scheduler-card)
        if (this.keyframes.length > 0) {
            this.ctx.strokeStyle = this.getThemeColor('--keyframe-color');
            this.ctx.lineWidth = 3 * dpr;
            // Keyframes are already sorted by time
            for (let i = 0; i < this.keyframes.length - 1; i++) {
                const kf1 = this.keyframes[i];
                const kf2 = this.keyframes[i + 1];
                const x1 = leftMargin + yAxisWidth + ((kf1.time / this.duration) * graphWidth);
                const y1 = topMargin + ((1 - this.normalizeValue(kf1.value)) * graphHeight);
                const x2 = leftMargin + yAxisWidth + ((kf2.time / this.duration) * graphWidth);
                const y2 = topMargin + ((1 - this.normalizeValue(kf2.value)) * graphHeight);
                // Draw flat line (hold value until next keyframe)
                this.ctx.beginPath();
                this.ctx.moveTo(x1, y1);
                this.ctx.lineTo(x2, y1); // Horizontal to next time
                this.ctx.lineTo(x2, y2); // Vertical step to new value
                this.ctx.stroke();
            }
            // Wraparound: extend last keyframe to end, then wrap to first keyframe
            if (this.keyframes.length > 0) {
                const lastKf = this.keyframes[this.keyframes.length - 1];
                const firstKf = this.keyframes[0];
                const lastX = leftMargin + yAxisWidth + ((lastKf.time / this.duration) * graphWidth);
                const lastY = topMargin + ((1 - this.normalizeValue(lastKf.value)) * graphHeight);
                const firstY = topMargin + ((1 - this.normalizeValue(firstKf.value)) * graphHeight);
                // Determine the starting value (from previous day or from last keyframe)
                const startValue = this.previousDayEndValue !== undefined ? this.previousDayEndValue : lastKf.value;
                topMargin + ((1 - this.normalizeValue(startValue)) * graphHeight);
                // Calculate the position of the last hour marker (24:00/00:00)
                const endX = leftMargin + yAxisWidth + ((this.duration / this.duration) * graphWidth);
                // Extend last keyframe to right edge
                this.ctx.beginPath();
                this.ctx.moveTo(lastX, lastY);
                this.ctx.lineTo(endX, lastY);
                this.ctx.stroke();
                // Extend from left edge to first keyframe
                // In multi-day mode, use previousDayEndValue; in 24hr mode, wrap to own last value
                const wrapValue = this.previousDayEndValue !== undefined && this.previousDayEndValue !== null
                    ? this.previousDayEndValue
                    : lastKf.value;
                const wrapY = topMargin + ((1 - this.normalizeValue(wrapValue)) * graphHeight);
                if (firstKf.time > 0) {
                    // Hold wrap value horizontally, then step to first keyframe
                    const firstX = leftMargin + yAxisWidth + ((firstKf.time / this.duration) * graphWidth);
                    this.ctx.beginPath();
                    this.ctx.moveTo(leftMargin + yAxisWidth, wrapY);
                    this.ctx.lineTo(firstX, wrapY);
                    this.ctx.lineTo(firstX, firstY);
                    this.ctx.stroke();
                }
                else {
                    // First keyframe at 0, just draw vertical step
                    this.ctx.beginPath();
                    this.ctx.moveTo(leftMargin + yAxisWidth, wrapY);
                    this.ctx.lineTo(leftMargin + yAxisWidth, firstY);
                    this.ctx.stroke();
                }
            }
        }
        // Draw advance history markers
        if (this.advanceHistory && this.advanceHistory.length > 0) {
            this.advanceHistory.forEach(event => {
                if (event.target_node && event.target_node.temp !== null && event.target_node.temp !== undefined) {
                    // Parse activated_at time to get hour position
                    const activatedDate = new Date(event.activated_at);
                    const activatedHours = activatedDate.getHours() + (activatedDate.getMinutes() / 60);
                    // Only draw if within today's 24-hour range
                    if (activatedHours >= 0 && activatedHours < 24) {
                        const x = leftMargin + yAxisWidth + ((activatedHours / this.duration) * graphWidth);
                        const y = topMargin + ((1 - this.normalizeValue(event.target_node.temp)) * graphHeight);
                        // Draw diamond marker for advance activation
                        this.ctx.save();
                        this.ctx.fillStyle = '#00ff00';
                        this.ctx.strokeStyle = '#00aa00';
                        this.ctx.lineWidth = 2 * dpr;
                        this.ctx.translate(x, y);
                        this.ctx.rotate(Math.PI / 4);
                        const markerSize = 8 * dpr;
                        this.ctx.fillRect(-markerSize, -markerSize, markerSize * 2, markerSize * 2);
                        this.ctx.strokeRect(-markerSize, -markerSize, markerSize * 2, markerSize * 2);
                        this.ctx.restore();
                    }
                }
            });
        }
        // Draw current time indicator (vertical bar) if set
        if (this.indicatorTime !== undefined && this.indicatorTime >= 0 && this.indicatorTime <= this.duration) {
            const indicatorX = leftMargin + yAxisWidth + ((this.indicatorTime / this.duration) * graphWidth);
            this.ctx.strokeStyle = '#00ff00';
            this.ctx.lineWidth = 2 * dpr;
            this.ctx.setLineDash([5 * dpr, 5 * dpr]); // Dashed line
            // Draw vertical line through graph area
            this.ctx.beginPath();
            this.ctx.moveTo(indicatorX, topMargin);
            this.ctx.lineTo(indicatorX, topMargin + graphHeight);
            this.ctx.stroke();
            this.ctx.setLineDash([]); // Reset dash
        }
        // Draw keyframe markers
        this.keyframes.forEach((kf, index) => {
            const x = leftMargin + yAxisWidth + ((kf.time / this.duration) * graphWidth);
            const y = topMargin + ((1 - this.normalizeValue(kf.value)) * graphHeight);
            // Highlight if being dragged or selected
            const isDragging = this.draggingIndex === index;
            const isSelected = this.selectedKeyframeIndex === index;
            if (isDragging) {
                this.ctx.fillStyle = this.getThemeColor('--keyframe-dragging-color');
            }
            else if (isSelected) {
                this.ctx.fillStyle = this.getThemeColor('--keyframe-selected-color');
            }
            else {
                this.ctx.fillStyle = this.getThemeColor('--keyframe-color');
            }
            // Draw diamond marker (smaller when collapsed)
            this.ctx.save();
            this.ctx.translate(x, y);
            this.ctx.rotate(Math.PI / 4);
            const baseSize = this.collapsed ? 4 : 6;
            const size = (isDragging || isSelected) ? baseSize + 2 : baseSize;
            this.ctx.fillRect(-size * dpr, -size * dpr, size * 2 * dpr, size * 2 * dpr);
            this.ctx.restore();
            // Draw selection ring for selected keyframe (hide when collapsed)
            if (isSelected && !isDragging && !this.collapsed) {
                this.ctx.strokeStyle = this.getThemeColor('--keyframe-selected-color');
                this.ctx.lineWidth = 2;
                this.ctx.beginPath();
                this.ctx.arc(x, y, 12 * dpr, 0, Math.PI * 2);
                this.ctx.stroke();
            }
            // Draw hover ring for draggable indication (hide when collapsed)
            if (!isDragging && !isSelected && !this.collapsed) {
                const textColor = this.getThemeColor('--canvas-text-secondary');
                // Apply opacity to text color for hover ring
                const rgbaMatch = textColor.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
                if (rgbaMatch) {
                    this.ctx.strokeStyle = `rgba(${rgbaMatch[1]}, ${rgbaMatch[2]}, ${rgbaMatch[3]}, 0.3)`;
                }
                else {
                    this.ctx.strokeStyle = textColor;
                }
                this.ctx.lineWidth = 1;
                this.ctx.beginPath();
                this.ctx.arc(x, y, 10 * dpr, 0, Math.PI * 2);
                this.ctx.stroke();
            }
            // Draw value label above each keyframe (hide when collapsed)
            if (!this.collapsed) {
                const valueText = kf.value.toFixed(this.snapValue < 1 ? 1 : 0);
                this.ctx.font = `${baseFontSize * dpr}px system-ui, -apple-system, sans-serif`;
                this.ctx.textAlign = 'center';
                this.ctx.textBaseline = 'bottom';
                // Position label above the keyframe with some padding
                const labelY = y - 18 * dpr;
                // Draw background for better readability
                const textMetrics = this.ctx.measureText(valueText);
                const textWidth = textMetrics.width;
                const textHeight = 14 * dpr;
                const padding = 4 * dpr;
                this.ctx.fillStyle = this.getThemeColor('--canvas-label-bg');
                this.ctx.fillRect(x - textWidth / 2 - padding, labelY - textHeight - padding, textWidth + padding * 2, textHeight + padding * 2);
                // Draw text - use keyframe color
                if (isDragging) {
                    this.ctx.fillStyle = this.getThemeColor('--keyframe-dragging-color');
                }
                else if (isSelected) {
                    this.ctx.fillStyle = this.getThemeColor('--keyframe-selected-color');
                }
                else {
                    this.ctx.fillStyle = this.getThemeColor('--keyframe-color');
                }
                this.ctx.fillText(valueText, x, labelY);
            }
        });
        // Tooltip is rendered as a lightweight DOM overlay to avoid canvas redraw on hover.
    }
    buildHoverTooltip(x, y, rect) {
        const { leftMargin, yAxisWidth, rightMargin, topMargin, graphHeight, graphWidth } = this.getGraphDimensions(rect);
        // Check if in graph area
        if (x < leftMargin + yAxisWidth || x > rect.width - rightMargin ||
            y < topMargin || y > topMargin + graphHeight) {
            return null;
        }
        const adjustedX = x - leftMargin - yAxisWidth;
        const time = (adjustedX / graphWidth) * this.duration;
        let tooltipLines = [];
        if (this.tooltipMode === 'cursor') {
            // Show interpolated value at cursor position on schedule line
            const tooltipValue = this.getInterpolatedValue(time);
            if (tooltipValue !== null) {
                const hours = Math.floor(time);
                const minutes = Math.round((time - hours) * 60);
                tooltipLines.push({
                    text: `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')} - ${tooltipValue.toFixed(1)}°`,
                    color: this.getThemeColor('--keyframe-color')
                });
            }
        }
        else {
            // Get current time in decimal hours
            const now = new Date();
            const currentTime = now.getHours() + now.getMinutes() / 60;
            // Only show history if hovering over past time or close to current time (within 30 minutes)
            const timeDiff = time - currentTime;
            const showHistory = timeDiff <= 0.5; // Show if in past or within 30 minutes of now
            if (showHistory && this.backgroundGraphs && this.backgroundGraphs.length > 0) {
                this.backgroundGraphs.forEach((historyGraph, graphIndex) => {
                    if (!historyGraph || !historyGraph.keyframes || historyGraph.keyframes.length === 0)
                        return;
                    let displayPoint = null;
                    if (time >= currentTime) {
                        // At or past current time (but close to now): show latest temperature
                        displayPoint = historyGraph.keyframes[historyGraph.keyframes.length - 1];
                    }
                    else {
                        // Before current time: find closest data point to hover time
                        let closestPoint = null;
                        let closestDist = Infinity;
                        for (const point of historyGraph.keyframes) {
                            const dist = Math.abs(point.time - time);
                            if (dist < closestDist) {
                                closestDist = dist;
                                closestPoint = point;
                            }
                        }
                        if (closestPoint && closestDist < 0.5) { // Within 30 minutes
                            displayPoint = closestPoint;
                        }
                    }
                    if (displayPoint) {
                        const label = historyGraph.label || t$3('Temperature');
                        const color = historyGraph.color || BACKGROUND_GRAPH_COLORS[graphIndex % BACKGROUND_GRAPH_COLORS.length];
                        tooltipLines.push({ text: `${label}: ${displayPoint.value.toFixed(1)}°`, color });
                    }
                });
            }
        }
        if (tooltipLines.length === 0)
            return null;
        return {
            lines: tooltipLines
        };
    }
    hideHoverTooltip() {
        if (!this.tooltipEl)
            return;
        this.tooltipEl.hidden = true;
    }
    getOpaqueColor(color) {
        if (!this.shadowRoot)
            return color;
        if (!this.colorProbeEl) {
            this.colorProbeEl = document.createElement('span');
            this.colorProbeEl.style.position = 'absolute';
            this.colorProbeEl.style.visibility = 'hidden';
            this.colorProbeEl.style.pointerEvents = 'none';
            this.colorProbeEl.style.width = '0';
            this.colorProbeEl.style.height = '0';
            this.colorProbeEl.style.overflow = 'hidden';
            this.shadowRoot.appendChild(this.colorProbeEl);
        }
        this.colorProbeEl.style.color = color;
        const resolved = getComputedStyle(this.colorProbeEl).color;
        const rgbaMatch = resolved.match(/rgba\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*([0-9]*\.?[0-9]+)\s*\)/i);
        if (rgbaMatch) {
            return `rgb(${rgbaMatch[1]}, ${rgbaMatch[2]}, ${rgbaMatch[3]})`;
        }
        return resolved || color;
    }
    renderHoverTooltip() {
        if (!this.canvas || !this.tooltipEl || this.collapsed || this.isDragging || this.isPanning) {
            this.hideHoverTooltip();
            return;
        }
        const rect = this.canvas.getBoundingClientRect();
        const tooltip = this.buildHoverTooltip(this.hoverX, this.hoverY, rect);
        if (!tooltip) {
            this.hideHoverTooltip();
            return;
        }
        this.tooltipEl.replaceChildren();
        tooltip.lines.forEach(line => {
            const lineEl = document.createElement('div');
            lineEl.className = 'cursor-tooltip-line';
            lineEl.textContent = line.text;
            if (line.color) {
                lineEl.style.color = this.getOpaqueColor(line.color);
            }
            this.tooltipEl.appendChild(lineEl);
        });
        this.tooltipEl.hidden = false;
        // Stable anchor: above-left by default; flip horizontally to the right when near left edge.
        const cursorOffsetX = 32;
        const cursorOffsetY = 10;
        const margin = 10;
        const tooltipWidth = this.tooltipEl.offsetWidth;
        const tooltipHeight = this.tooltipEl.offsetHeight;
        const maxX = Math.max(margin, rect.width - tooltipWidth - margin);
        const maxY = Math.max(margin, rect.height - tooltipHeight - margin);
        let tooltipX = this.hoverX - tooltipWidth - cursorOffsetX;
        if (tooltipX < margin) {
            tooltipX = this.hoverX + cursorOffsetX;
        }
        tooltipX = Math.max(margin, Math.min(tooltipX, maxX));
        const tooltipY = Math.max(margin, Math.min(this.hoverY - tooltipHeight - cursorOffsetY, maxY));
        this.tooltipEl.style.left = `${Math.round(tooltipX)}px`;
        this.tooltipEl.style.top = `${Math.round(tooltipY)}px`;
    }
    queueHoverTooltipRender(x, y) {
        this.hoverX = x;
        this.hoverY = y;
        if (this.hoverRenderPending)
            return;
        this.hoverRenderPending = true;
        requestAnimationFrame(() => {
            this.hoverRenderPending = false;
            this.renderHoverTooltip();
        });
    }
    getInterpolatedValue(time) {
        if (this.keyframes.length === 0)
            return null;
        if (this.keyframes.length === 1)
            return this.keyframes[0].value;
        // Find surrounding keyframes
        let beforeKf = this.keyframes[0];
        let afterKf = this.keyframes[this.keyframes.length - 1];
        for (let i = 0; i < this.keyframes.length - 1; i++) {
            if (this.keyframes[i].time <= time && this.keyframes[i + 1].time >= time) {
                beforeKf = this.keyframes[i];
                afterKf = this.keyframes[i + 1];
                break;
            }
        }
        // Linear interpolation
        if (beforeKf.time === afterKf.time)
            return beforeKf.value;
        const ratio = (time - beforeKf.time) / (afterKf.time - beforeKf.time);
        return beforeKf.value + (afterKf.value - beforeKf.value) * ratio;
    }
    handleCanvasMouseDown(e) {
        if (!this.canvas || this.collapsed || this.readonly)
            return;
        const rect = this.canvas.getBoundingClientRect();
        const clientX = e instanceof MouseEvent ? e.clientX : e.touches[0].clientX;
        const clientY = e instanceof MouseEvent ? e.clientY : e.touches[0].clientY;
        const x = clientX - rect.left;
        const y = clientY - rect.top;
        const { leftMargin, yAxisWidth, rightMargin, topMargin, bottomMargin, graphHeight, graphWidth } = this.getGraphDimensions(rect);
        // Check if scrollable (only in expanded mode)
        const isScrollable = !this.collapsed && this.wrapperEl && this.wrapperEl.scrollWidth > this.wrapperEl.clientWidth;
        // For touch devices, set up long-press detection FIRST (before any returns)
        if ('touches' in e) {
            const currentTime = Date.now();
            const timeSinceLastClick = currentTime - this.lastClickTime;
            const dx = x - this.lastClickX;
            const dy = y - this.lastClickY;
            const distance = Math.sqrt(dx * dx + dy * dy);
            // Double-tap detected (within 300ms and 30px)
            if (timeSinceLastClick < 300 && distance < 30) {
                this.handleDoubleClick(x, y, rect);
                this.lastClickTime = 0; // Reset to prevent triple-tap
                return;
            }
            this.lastClickTime = currentTime;
            this.lastClickX = x;
            this.lastClickY = y;
            // Start long-press timer for touch devices (600ms)
            this.holdStartX = x;
            this.holdStartY = y;
            this.clearHoldTimer();
            this.holdTimer = window.setTimeout(() => {
                this.handleContextMenu(x, y, rect);
                // Clear dragging state if long press completes
                this.isDragging = false;
                this.draggingIndex = null;
            }, 600);
        }
        // Check if clicking on existing keyframe
        const clickedIndex = this.keyframes.findIndex(kf => {
            const kfX = leftMargin + yAxisWidth + ((kf.time / this.duration) * graphWidth);
            const kfY = topMargin + ((1 - this.normalizeValue(kf.value)) * graphHeight);
            const distance = Math.sqrt(Math.pow(x - kfX, 2) + Math.pow(y - kfY, 2));
            return distance < 20;
        });
        if (clickedIndex >= 0) {
            // Check for double-click to delete (desktop)
            if (e instanceof MouseEvent) {
                const currentTime = Date.now();
                const timeSinceLastClick = currentTime - this.lastClickTime;
                // Double-click detected on same keyframe (within 300ms)
                if (timeSinceLastClick < 300 && this.lastClickIndex === clickedIndex) {
                    this.deleteKeyframe(clickedIndex);
                    this.lastClickTime = 0; // Reset
                    this.lastClickIndex = -1;
                    this.draggingIndex = null; // Clear dragging state
                    this.isDragging = false;
                    this.justDeletedKeyframe = true; // Prevent dblclick handler from adding
                    setTimeout(() => this.justDeletedKeyframe = false, 100); // Reset after event propagation
                    e.preventDefault();
                    e.stopPropagation();
                    return;
                }
                this.lastClickTime = currentTime;
                this.lastClickIndex = clickedIndex;
            }
            // Prepare to drag existing keyframe (but wait to see if it's a long press or just a click)
            this.draggingIndex = clickedIndex;
            this.hasMoved = false; // Reset movement tracking
            this.dragStartX = x;
            this.dragStartY = y;
            // Don't set isDragging yet - we'll set it on first move
            // This allows clicks to work properly
            e.preventDefault();
            return;
        }
        // Check if clicking on a segment (line between two keyframes)
        const segmentIndex = this.findSegmentAtPoint(x, y, rect);
        if (segmentIndex >= 0) {
            // Prepare to drag segment
            this.draggingSegment = {
                startIndex: segmentIndex,
                endIndex: segmentIndex + 1,
                initialStartTime: this.keyframes[segmentIndex].time,
                initialEndTime: this.keyframes[segmentIndex + 1].time,
                initialPointerX: x
            };
            this.hasMoved = false;
            this.dragStartX = x;
            e.preventDefault();
            return;
        }
        // If scrollable and not clicking on keyframe, prepare for panning
        if (isScrollable) {
            this.isPanning = true;
            this.panStartX = clientX;
            this.panStartScrollLeft = this.wrapperEl.scrollLeft;
            e.preventDefault();
        }
    }
    handleCanvasMouseMove(e) {
        // Update hover position for tooltip (only for mouse, not touch)
        if (e instanceof MouseEvent && !this.isDragging && !this.isPanning && this.canvas) {
            this.queueHoverTooltipRender(e.offsetX, e.offsetY);
        }
        else if ('touches' in e) {
            this.hideHoverTooltip();
        }
        // Handle panning first (takes priority when active)
        if (this.isPanning && this.wrapperEl) {
            const clientX = e instanceof MouseEvent ? e.clientX : e.touches[0].clientX;
            const deltaX = clientX - this.panStartX;
            this.wrapperEl.scrollLeft = this.panStartScrollLeft - deltaX;
            e.preventDefault();
            return;
        }
        // Cancel long-press if moving during touch hold
        if ('touches' in e && this.holdTimer) {
            const rect = this.canvas?.getBoundingClientRect();
            if (rect) {
                this.wrapperEl?.scrollLeft || 0;
                const x = e.touches[0].clientX - rect.left;
                const y = e.touches[0].clientY - rect.top;
                const dx = x - this.holdStartX;
                const dy = y - this.holdStartY;
                const distance = Math.sqrt(dx * dx + dy * dy);
                // Cancel hold if moved more than 5px - user is dragging (match threshold below)
                if (distance > 5) {
                    this.clearHoldTimer();
                }
            }
        }
        if (!this.canvas)
            return;
        // Handle segment dragging
        if (this.draggingSegment !== null) {
            const rect = this.canvas.getBoundingClientRect();
            const clientX = e instanceof MouseEvent ? e.clientX : e.touches[0].clientX;
            this.wrapperEl?.scrollLeft || 0;
            const currentX = clientX - rect.left;
            const dx = currentX - this.dragStartX;
            const distance = Math.abs(dx);
            if (distance < 5)
                return; // Minimum movement threshold
            if (!this.hasMoved) {
                this.saveUndoState();
                this.hasMoved = true;
            }
            const { leftMargin, yAxisWidth, graphWidth } = this.getGraphDimensions(rect);
            // Calculate time delta
            const pixelDelta = currentX - this.draggingSegment.initialPointerX;
            const timeDelta = (pixelDelta / graphWidth) * this.duration;
            // Apply delta to both keyframes
            let newStartTime = this.draggingSegment.initialStartTime + timeDelta;
            let newEndTime = this.draggingSegment.initialEndTime + timeDelta;
            // Constrain to not pass adjacent keyframes
            const { startIndex, endIndex } = this.draggingSegment;
            if (startIndex > 0) {
                const prevTime = this.keyframes[startIndex - 1].time;
                const minGap = this.duration / this.slots;
                if (newStartTime < prevTime + minGap) {
                    const shift = (prevTime + minGap) - newStartTime;
                    newStartTime += shift;
                    newEndTime += shift;
                }
            }
            if (endIndex < this.keyframes.length - 1) {
                const nextTime = this.keyframes[endIndex + 1].time;
                const minGap = this.duration / this.slots;
                if (newEndTime > nextTime - minGap) {
                    const shift = newEndTime - (nextTime - minGap);
                    newStartTime -= shift;
                    newEndTime -= shift;
                }
            }
            // Clamp to boundaries (max 23:59 to prevent 24:00)
            newStartTime = Math.max(0, newStartTime);
            newEndTime = Math.min(23 + (59 / 60), newEndTime);
            // Snap times to nearest slot (15-minute intervals)
            const slotDuration = this.duration / this.slots;
            newStartTime = Math.round(newStartTime / slotDuration) * slotDuration;
            newEndTime = Math.min(23 + 59 / 60, Math.round(newEndTime / slotDuration) * slotDuration);
            // Update keyframes
            this.keyframes[startIndex].time = newStartTime;
            this.keyframes[endIndex].time = newEndTime;
            // Fire update event for settings panel
            this.dispatchEvent(new CustomEvent('nodeSettingsUpdate', {
                detail: {
                    index: startIndex,
                    keyframe: this.keyframes[startIndex]
                },
                bubbles: true,
                composed: true
            }));
            this.drawTimeline();
            return;
        }
        // Handle single keyframe dragging
        if (this.draggingIndex === null)
            return;
        const rect = this.canvas.getBoundingClientRect();
        const clientX = e instanceof MouseEvent ? e.clientX : e.touches[0].clientX;
        const clientY = e instanceof MouseEvent ? e.clientY : e.touches[0].clientY;
        this.wrapperEl?.scrollLeft || 0;
        const currentX = clientX - rect.left;
        const currentY = clientY - rect.top;
        // Calculate distance from drag start
        const dx = currentX - this.dragStartX;
        const dy = currentY - this.dragStartY;
        const distance = Math.sqrt(dx * dx + dy * dy);
        // Only consider it a move if moved more than 5 pixels
        if (distance < 5)
            return;
        // Start dragging on first move
        if (!this.isDragging) {
            this.isDragging = true;
            // Save undo state when starting to drag
            this.saveUndoState();
        }
        this.hasMoved = true; // Track that movement occurred
        if (!this.isDragging)
            return;
        let x = currentX;
        let y = currentY;
        const { leftMargin, yAxisWidth, rightMargin, topMargin, bottomMargin, graphHeight, graphWidth, canvasWidthCSS } = this.getGraphDimensions(rect);
        // Clamp to canvas bounds (graph area only)
        x = Math.max(leftMargin + yAxisWidth, Math.min(x, canvasWidthCSS - rightMargin));
        y = Math.max(topMargin, Math.min(y, topMargin + graphHeight));
        // Snap time to nearest slot (adjust for Y axis offset)
        const adjustedX = x - leftMargin - yAxisWidth;
        const slotWidth = graphWidth / this.slots;
        const slotIndex = Math.round(adjustedX / slotWidth);
        // Clamp to 23:59 (23.9833 hours) to prevent 24:00
        let time = Math.min((slotIndex / this.slots) * this.duration, 23 + (59 / 60));
        // Constrain time to not pass adjacent keyframes (array is already sorted)
        if (this.draggingIndex > 0) {
            const prevTime = this.keyframes[this.draggingIndex - 1].time;
            const minTime = prevTime + (this.duration / this.slots); // At least one slot apart
            time = Math.max(time, minTime);
        }
        if (this.draggingIndex < this.keyframes.length - 1) {
            const nextTime = this.keyframes[this.draggingIndex + 1].time;
            const maxTime = nextTime - (this.duration / this.slots); // At least one slot apart
            time = Math.min(time, maxTime);
        }
        // Value is in minValue-maxValue range (adjust for top margin)
        const adjustedY = y - topMargin;
        const normalizedValue = Math.max(0, Math.min(1, 1 - (adjustedY / graphHeight)));
        let value = Math.max(this.minValue, Math.min(this.maxValue, this.denormalizeValue(normalizedValue)));
        // Apply snapping if configured
        value = this.snapValueToGrid(value);
        // Update keyframe position
        const oldTime = this.keyframes[this.draggingIndex].time;
        this.keyframes = this.keyframes.map((kf, i) => i === this.draggingIndex ? { ...kf, time, value } : kf);
        // Re-sort if time changed (might change position in array)
        if (Math.abs(time - oldTime) > 0.01) {
            this.sortKeyframes();
        }
        // Fire update event for settings panel
        this.dispatchEvent(new CustomEvent('nodeSettingsUpdate', {
            detail: {
                index: this.draggingIndex,
                keyframe: this.keyframes[this.draggingIndex]
            },
            bubbles: true,
            composed: true
        }));
        this.drawTimeline();
        e.preventDefault();
    }
    handleCanvasMouseUp(e) {
        this.clearHoldTimer();
        this.hideHoverTooltip();
        // Handle segment dragging completion
        if (this.draggingSegment !== null && this.hasMoved) {
            this.dispatchEvent(new CustomEvent('segment-moved', {
                detail: {
                    startIndex: this.draggingSegment.startIndex,
                    endIndex: this.draggingSegment.endIndex
                },
                bubbles: true,
                composed: true
            }));
            this.draggingSegment = null;
            this.hasMoved = false;
            return;
        }
        // Handle single keyframe dragging completion
        if (this.draggingIndex !== null && this.hasMoved) {
            this.dispatchEvent(new CustomEvent('keyframe-moved', {
                detail: {
                    index: this.draggingIndex,
                    keyframe: this.keyframes[this.draggingIndex]
                },
                bubbles: true,
                composed: true
            }));
        }
        // Handle tap selection for touch devices (when not dragging)
        if ('touches' in e && this.draggingIndex !== null && !this.hasMoved) {
            // Select the keyframe
            this.selectedKeyframeIndex = this.draggingIndex;
            this.drawTimeline();
            this.dispatchEvent(new CustomEvent('keyframe-clicked', {
                detail: {
                    index: this.draggingIndex,
                    keyframe: this.keyframes[this.draggingIndex]
                },
                bubbles: true,
                composed: true
            }));
        }
        this.draggingIndex = null;
        this.draggingSegment = null;
        this.isDragging = false;
        this.hasMoved = false;
        this.isPanning = false; // Reset panning state
    }
    handleCanvasMouseLeave(e) {
        // Clear hover tooltip overlay
        this.hideHoverTooltip();
        // Also handle mouseup logic if needed
        this.handleCanvasMouseUp(e);
    }
    handleCanvasClick(e) {
        if (!this.canvas || this.collapsed || this.readonly)
            return;
        // If we just finished dragging, don't process click
        if (this.hasMoved)
            return;
        const rect = this.canvas.getBoundingClientRect();
        this.wrapperEl?.scrollLeft || 0;
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        // Use CSS pixels for click detection (canvas drawing uses device pixels with dpr scaling)
        const { leftMargin, yAxisWidth, topMargin, graphHeight, graphWidth } = this.getGraphDimensions(rect);
        // Check if clicking on existing keyframe
        const clickedIndex = this.keyframes.findIndex(kf => {
            const kfX = leftMargin + yAxisWidth + ((kf.time / this.duration) * graphWidth);
            const kfY = topMargin + ((1 - this.normalizeValue(kf.value)) * graphHeight);
            const distance = Math.sqrt(Math.pow(x - kfX, 2) + Math.pow(y - kfY, 2));
            return distance < 20;
        });
        if (clickedIndex >= 0) {
            // Select the keyframe
            this.selectedKeyframeIndex = clickedIndex;
            this.drawTimeline();
            this.dispatchEvent(new CustomEvent('keyframe-clicked', {
                detail: {
                    index: clickedIndex,
                    keyframe: this.keyframes[clickedIndex]
                },
                bubbles: true,
                composed: true
            }));
        }
        else {
            // Clicked on empty area - deselect
            this.selectedKeyframeIndex = null;
            this.drawTimeline();
        }
    }
    handleCanvasContextMenu(e) {
        if (!this.canvas || this.collapsed || this.readonly)
            return;
        e.preventDefault(); // Prevent default context menu
        const rect = this.canvas.getBoundingClientRect();
        this.wrapperEl?.scrollLeft || 0;
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        this.handleContextMenu(x, y, rect);
    }
    handleContextMenu(x, y, rect) {
        const { leftMargin, yAxisWidth, topMargin, graphHeight, graphWidth } = this.getGraphDimensions(rect);
        // Check if clicking on existing keyframe
        const clickedIndex = this.keyframes.findIndex(kf => {
            const kfX = leftMargin + yAxisWidth + ((kf.time / this.duration) * graphWidth);
            const kfY = topMargin + ((1 - this.normalizeValue(kf.value)) * graphHeight);
            const distance = Math.sqrt(Math.pow(x - kfX, 2) + Math.pow(y - kfY, 2));
            return distance < 20;
        });
        // Delete keyframe if clicked on one
        if (clickedIndex >= 0) {
            this.deleteKeyframe(clickedIndex);
        }
    }
    clearHoldTimer() {
        if (this.holdTimer) {
            window.clearTimeout(this.holdTimer);
            this.holdTimer = undefined;
        }
    }
    handleCanvasDoubleClick(e) {
        if (!this.canvas || this.collapsed || this.readonly || this.justDeletedKeyframe)
            return;
        const rect = this.canvas.getBoundingClientRect();
        this.wrapperEl?.scrollLeft || 0;
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        this.handleDoubleClick(x, y, rect);
    }
    handleDoubleClick(x, y, rect) {
        const { leftMargin, yAxisWidth, topMargin, graphHeight, graphWidth } = this.getGraphDimensions(rect);
        // Check if clicking on existing keyframe
        const clickedIndex = this.keyframes.findIndex(kf => {
            const kfX = leftMargin + yAxisWidth + ((kf.time / this.duration) * graphWidth);
            const kfY = topMargin + ((1 - this.normalizeValue(kf.value)) * graphHeight);
            const distance = Math.sqrt(Math.pow(x - kfX, 2) + Math.pow(y - kfY, 2));
            return distance < 20;
        });
        if (clickedIndex >= 0)
            return; // Don't add if clicking on existing
        // Check if click is within graph area
        if (x < leftMargin + yAxisWidth || y < topMargin || y > topMargin + graphHeight)
            return;
        // Snap time to nearest slot (adjust for Y axis offset)
        const adjustedX = x - leftMargin - yAxisWidth;
        const slotWidth = graphWidth / this.slots;
        const slotIndex = Math.round(adjustedX / slotWidth);
        // Clamp to 23:59 (23.9833 hours) to prevent 24:00
        const time = Math.min((slotIndex / this.slots) * this.duration, 23 + (59 / 60));
        // Value is in minValue-maxValue range (adjust for top margin)
        const adjustedY = y - topMargin;
        const normalizedValue = 1 - (adjustedY / graphHeight);
        let value = this.denormalizeValue(normalizedValue);
        // Apply snapping if configured
        value = this.snapValueToGrid(value);
        // Save state before adding
        this.saveUndoState();
        this.keyframes = [...this.keyframes, { time, value }];
        this.sortKeyframes(); // Keep array sorted
        this.drawTimeline();
        this.dispatchEvent(new CustomEvent('keyframe-added', {
            detail: { time, value },
            bubbles: true,
            composed: true
        }));
    }
    // Helper method to delete a keyframe
    deleteKeyframe(index) {
        if (index < 0 || index >= this.keyframes.length)
            return;
        // Save state before deleting
        this.saveUndoState();
        const deletedKeyframe = this.keyframes[index];
        // Remove from keyframes
        this.keyframes = this.keyframes.filter((_, i) => i !== index);
        // Clear selection if deleting selected keyframe
        if (this.selectedKeyframeIndex === index) {
            this.selectedKeyframeIndex = null;
        }
        else if (this.selectedKeyframeIndex !== null && this.selectedKeyframeIndex > index) {
            // Adjust selection index if deleting a keyframe before selected one
            this.selectedKeyframeIndex--;
        }
        this.drawTimeline();
        this.dispatchEvent(new CustomEvent('keyframe-deleted', {
            detail: { index, keyframe: deletedKeyframe },
            bubbles: true,
            composed: true
        }));
    }
    // Find segment (line between keyframes) at given point
    findSegmentAtPoint(x, y, rect) {
        const { leftMargin, yAxisWidth, topMargin, graphHeight, graphWidth } = this.getGraphDimensions(rect);
        // Check each segment
        for (let i = 0; i < this.keyframes.length - 1; i++) {
            const kf1 = this.keyframes[i];
            const kf2 = this.keyframes[i + 1];
            const x1 = leftMargin + yAxisWidth + ((kf1.time / this.duration) * graphWidth);
            const y1 = topMargin + ((1 - this.normalizeValue(kf1.value)) * graphHeight);
            const x2 = leftMargin + yAxisWidth + ((kf2.time / this.duration) * graphWidth);
            const y2 = topMargin + ((1 - this.normalizeValue(kf2.value)) * graphHeight);
            // Check distance to horizontal line segment (flat hold)
            if (x >= x1 && x <= x2) {
                const distanceToHorizontal = Math.abs(y - y1);
                if (distanceToHorizontal < 10)
                    return i;
            }
            // Check distance to vertical line segment (step)
            if (Math.abs(x - x2) < 10 && ((y >= y1 && y <= y2) || (y >= y2 && y <= y1))) {
                return i;
            }
        }
        return -1;
    }
    clearKeyframes() {
        // Save state before clearing
        this.saveUndoState();
        this.keyframes = [];
        this.selectedKeyframeIndex = null; // Clear selection
        this.drawTimeline();
        this.dispatchEvent(new CustomEvent('keyframes-cleared', {
            bubbles: true,
            composed: true
        }));
    }
    // Save current state to undo stack
    emitUndoStackChanged(action, size, removedCount = 0) {
        this.dispatchEvent(new CustomEvent('undo-stack-changed', {
            detail: {
                action,
                size,
                removedCount,
                keyframeCount: this.keyframes.length
            },
            bubbles: true,
            composed: true
        }));
    }
    saveUndoState() {
        // Deep copy current keyframes
        const stateCopy = this.keyframes.map(kf => ({ ...kf }));
        this.undoStack = [...this.undoStack, stateCopy];
        this.emitUndoStackChanged('push', this.undoStack.length);
        // Limit undo stack to 50 entries
        if (this.undoStack.length > 50) {
            const removedCount = this.undoStack.length - 50;
            this.undoStack = this.undoStack.slice(-50);
            this.emitUndoStackChanged('trim', this.undoStack.length, removedCount);
        }
        this.updateUndoButtonState();
        this.updateNavigationButtonsState();
    }
    // Public undo method (can be called externally or via Ctrl+Z)
    undo() {
        if (this.undoStack.length === 0)
            return;
        // Pop last state from undo stack
        const previousState = this.undoStack[this.undoStack.length - 1];
        this.undoStack = this.undoStack.slice(0, -1);
        this.emitUndoStackChanged('pop', this.undoStack.length, 1);
        // Restore previous state
        this.keyframes = previousState.map(kf => ({ ...kf }));
        this.drawTimeline();
        this.updateUndoButtonState();
        this.updateNavigationButtonsState();
        this.dispatchEvent(new CustomEvent('keyframe-restored', {
            detail: { keyframes: this.keyframes },
            bubbles: true,
            composed: true
        }));
    }
    // Set external undo button reference
    setUndoButton(buttonElement) {
        this.undoButton = buttonElement;
        // Add click handler
        if (this.undoButton) {
            this.undoButton.addEventListener('click', () => this.undo());
            this.updateUndoButtonState();
        }
    }
    // Set external previous button reference
    setPreviousButton(buttonElement) {
        this.previousButton = buttonElement;
        if (this.previousButton) {
            this.previousButton.addEventListener('click', () => this.selectPrevious());
            this.updateNavigationButtonsState();
        }
    }
    // Set external next button reference
    setNextButton(buttonElement) {
        this.nextButton = buttonElement;
        if (this.nextButton) {
            this.nextButton.addEventListener('click', () => this.selectNext());
            this.updateNavigationButtonsState();
        }
    }
    // Set external clear button reference
    setClearButton(buttonElement) {
        if (buttonElement) {
            buttonElement.addEventListener('click', () => this.clearKeyframes());
        }
    }
    // Update navigation buttons disabled state
    updateNavigationButtonsState() {
        const canNavigate = this.keyframes.length >= 2;
        if (this.previousButton) {
            this.previousButton.disabled = !canNavigate;
        }
        if (this.nextButton) {
            this.nextButton.disabled = !canNavigate;
        }
    }
    // Update undo button disabled state
    updateUndoButtonState() {
        if (this.undoButton) {
            if (this.undoStack.length > 0) {
                this.undoButton.disabled = false;
                this.undoButton.style.opacity = '1';
            }
            else {
                this.undoButton.disabled = true;
                this.undoButton.style.opacity = '0.5';
            }
        }
    }
    selectPrevious() {
        if (this.keyframes.length === 0)
            return;
        // Array is already sorted by time
        if (this.selectedKeyframeIndex === null || this.selectedKeyframeIndex === 0) {
            // No selection or at start - select last keyframe
            this.selectedKeyframeIndex = this.keyframes.length - 1;
        }
        else {
            // Select previous
            this.selectedKeyframeIndex--;
        }
        this.drawTimeline();
        this.dispatchEvent(new CustomEvent('keyframe-selected', {
            detail: {
                index: this.selectedKeyframeIndex,
                keyframe: this.keyframes[this.selectedKeyframeIndex]
            },
            bubbles: true,
            composed: true
        }));
    }
    selectNext() {
        if (this.keyframes.length === 0)
            return;
        // Array is already sorted by time
        if (this.selectedKeyframeIndex === null || this.selectedKeyframeIndex >= this.keyframes.length - 1) {
            // No selection or at end - select first keyframe
            this.selectedKeyframeIndex = 0;
        }
        else {
            // Select next
            this.selectedKeyframeIndex++;
        }
        this.drawTimeline();
        this.dispatchEvent(new CustomEvent('keyframe-selected', {
            detail: {
                index: this.selectedKeyframeIndex,
                keyframe: this.keyframes[this.selectedKeyframeIndex]
            },
            bubbles: true,
            composed: true
        }));
    }
    toggleConfig() {
        this.showConfig = !this.showConfig;
    }
    toggleCollapse() {
        if (!this.allowCollapse)
            return; // Don't allow collapsing if disabled
        this.hideHoverTooltip();
        this.collapsed = !this.collapsed;
        // Update canvas height after state change
        setTimeout(() => {
            this.updateCanvasSize();
            this.drawTimeline();
            this.checkScrollVisibility();
        }, 50);
    }
    checkScrollVisibility() {
        if (!this.wrapperEl)
            return;
        const isScrollable = !this.collapsed && this.wrapperEl.scrollWidth > this.wrapperEl.clientWidth;
        if (!isScrollable) {
            this.showScrollNavLeft = false;
            this.showScrollNavRight = false;
            return;
        }
        const scrollLeft = this.wrapperEl.scrollLeft;
        const maxScroll = this.wrapperEl.scrollWidth - this.wrapperEl.clientWidth;
        // Show left button if not at start (with 1px tolerance)
        this.showScrollNavLeft = scrollLeft > 1;
        // Show right button if not at end (with 1px tolerance)
        this.showScrollNavRight = scrollLeft < maxScroll - 1;
    }
    scrollToStart() {
        if (this.wrapperEl) {
            this.wrapperEl.scrollTo({ left: 0, behavior: 'smooth' });
        }
    }
    scrollToEnd() {
        if (this.wrapperEl) {
            this.wrapperEl.scrollTo({ left: this.wrapperEl.scrollWidth, behavior: 'smooth' });
        }
    }
    updateSlots(e) {
        const input = e.target;
        const newSlots = Math.max(1, Math.min(288, parseInt(input.value) || 1));
        if (newSlots !== this.slots) {
            this.slots = newSlots;
            this.updateCanvasSize();
            this.drawTimeline();
        }
    }
    updateDuration(e) {
        const input = e.target;
        const newDuration = Math.max(1, Math.min(168, parseInt(input.value) || 1));
        if (newDuration !== this.duration) {
            this.duration = newDuration;
            this.drawTimeline();
        }
    }
    updatePreviousDayEnd(e) {
        const input = e.target;
        if (input.value === '') {
            this.previousDayEndValue = undefined;
        }
        else {
            const value = parseFloat(input.value);
            this.previousDayEndValue = Math.max(this.minValue, Math.min(this.maxValue, value));
        }
        this.drawTimeline();
    }
    updateMinValue(e) {
        const input = e.target;
        const newMin = parseFloat(input.value);
        if (!isNaN(newMin) && newMin < this.maxValue) {
            this.minValue = newMin;
            this.drawTimeline();
        }
    }
    updateMaxValue(e) {
        const input = e.target;
        const newMax = parseFloat(input.value);
        if (!isNaN(newMax) && newMax > this.minValue) {
            this.maxValue = newMax;
            this.drawTimeline();
        }
    }
    updateSnapValue(e) {
        const input = e.target;
        if (input.value === '') {
            this.snapValue = 0;
        }
        else {
            const newSnap = parseFloat(input.value);
            this.snapValue = !isNaN(newSnap) && newSnap >= 0 ? newSnap : 0;
        }
    }
    updateXAxisLabel(e) {
        const input = e.target;
        this.xAxisLabel = input.value;
        this.drawTimeline();
    }
    updateYAxisLabel(e) {
        const input = e.target;
        this.yAxisLabel = input.value;
        this.drawTimeline();
    }
    render() {
        const slotDuration = this.duration / this.slots;
        const slotMinutes = slotDuration * 60;
        return b `
      <div class="timeline-container">
        ${!this.showHeader && this.title && this.allowCollapse ? b `
          <div class="timeline-title" @click=${this.toggleCollapse} title="${t$3(this.collapsed ? 'Click to expand' : 'Click to collapse')}">
            ${t$3(this.title)}
          </div>
        ` : !this.showHeader && this.title ? b `
          <div class="timeline-title" style="cursor: default;">
            ${t$3(this.title)}
          </div>
        ` : ''}
        
        ${this.showHeader ? b `
          <div class="timeline-header">
            <span @click=${this.allowCollapse ? this.toggleCollapse : null} title="${this.allowCollapse ? t$3(this.collapsed ? 'Click to expand' : 'Click to collapse') : ''}" style="cursor: ${this.allowCollapse ? 'pointer' : 'default'};">
              ${t$3(this.title || `Timeline Editor (${this.duration}h • ${this.slots} slots @ ${slotMinutes.toFixed(0)}min)`)}
            </span>
            <div class="timeline-controls">
              <button class="secondary" @click=${this.selectPrevious} ?disabled=${this.keyframes.length === 0} title="${t$3("Previous keyframe")}">
                ◀
              </button>
              <button class="secondary" @click=${this.selectNext} ?disabled=${this.keyframes.length === 0} title="${t$3("Next keyframe")}">
                ▶
              </button>
              ${this.allowCollapse ? b `
                <button class="secondary" @click=${this.toggleCollapse}>
                  ${this.collapsed ? t$3('▼ Expand') : t$3('▲ Collapse')}
                </button>
              ` : ''}
              <button class="secondary" @click=${this.toggleConfig}>
                ${t$3(this.showConfig ? 'Hide Config' : 'Show Config')}
              </button>
              <button class="secondary" @click=${this.undo} ?disabled=${this.undoStack.length === 0}>
                ${t$3("↶ Undo")}
              </button>
              <button @click=${this.clearKeyframes}>${t$3("Clear")}</button>
            </div>
          </div>
        ` : ''}
        
        ${this.showConfig ? b `
          <div class="config-panel">
            <div class="config-row">
              <label>${t$3("Duration (hours):")}</label>
              <input 
                type="number" 
                min="1" 
                max="168" 
                .value=${this.duration.toString()}
                @change=${this.updateDuration}
              />
            </div>
            <div class="config-row">
              <label>${t$3("Time Slots:")}</label>
              <input 
                type="number" 
                min="1" 
                max="288" 
                .value=${this.slots.toString()}
                @change=${this.updateSlots}
              />
            </div>
            <div class="config-row">
              <label>${t$3("Prev Day End:")}</label>
              <input 
                type="number" 
                min="${this.minValue}" 
                max="${this.maxValue}" 
                step="0.01"
                placeholder="${t$3("Auto")}"
                .value=${this.previousDayEndValue?.toString() || ''}
                @change=${this.updatePreviousDayEnd}
              />
            </div>
            <div class="config-row">
              <label>${t$3("Min Value:")}</label>
              <input 
                type="number" 
                step="0.1"
                .value=${this.minValue.toString()}
                @change=${this.updateMinValue}
              />
            </div>
            <div class="config-row">
              <label>${t$3("Max Value:")}</label>
              <input 
                type="number" 
                step="0.1"
                .value=${this.maxValue.toString()}
                @change=${this.updateMaxValue}
              />
            </div>
            <div class="config-row">
              <label>${t$3("Snap Value:")}</label>
              <input 
                type="number" 
                min="0"
                step="0.01"
                placeholder="${t$3("None")}"
                .value=${this.snapValue > 0 ? this.snapValue.toString() : ''}
                @change=${this.updateSnapValue}
              />
            </div>
            <div class="config-row">
              <label>${t$3("X Axis Label:")}</label>
              <input 
                type="text" 
                placeholder="${t$3("e.g. Time")}"
                .value=${this.xAxisLabel}
                @input=${this.updateXAxisLabel}
              />
            </div>
            <div class="config-row">
              <label>${t$3("Y Axis Label:")}</label>
              <input 
                type="text" 
                placeholder="${t$3("e.g. Value")}"
                .value=${this.yAxisLabel}
                @input=${this.updateYAxisLabel}
              />
            </div>
          </div>
        ` : ''}
        
        <div style="position: relative;">
          ${this.backgroundGraphs.length > 0 ? b `
            <div class="graph-legend ${this.legendCollapsed ? 'collapsed' : ''}">
              <div class="graph-legend-header" @click=${this.toggleLegend}>
                <span class="graph-legend-toggle">▶</span>
                <span>${t$3("Legend")}</span>
              </div>
              ${!this.legendCollapsed ? b `
                <div class="graph-legend-items">
                  ${this.backgroundGraphs.map((bgGraph, graphIndex) => b `
                    <div class="graph-legend-item" title=${bgGraph.label || t$3(`Entity ${graphIndex + 1}`)}>
                      <span class="graph-legend-swatch" style="background: ${this.getBackgroundGraphColor(bgGraph, graphIndex)};"></span>
                      <span class="graph-legend-label">${bgGraph.label || t$3(`Entity ${graphIndex + 1}`)}</span>
                    </div>
                  `)}
                </div>
              ` : ''}
            </div>
          ` : ''}
          <div class="timeline-canvas-wrapper ${this.collapsed ? '' : 'expanded'}" @click=${this.collapsed && this.allowCollapse ? this.toggleCollapse : null}>
            <div class="timeline-canvas ${this.collapsed ? 'collapsed' : ''} ${this.isDragging ? 'dragging' : ''}">
              <canvas 
                style="touch-action: none;"
                @click=${this.handleCanvasClick}
                @dblclick=${this.handleCanvasDoubleClick}
                @contextmenu=${this.handleCanvasContextMenu}
                @mousedown=${this.handleCanvasMouseDown}
                @mousemove=${this.handleCanvasMouseMove}
                @mouseup=${this.handleCanvasMouseUp}
                @mouseleave=${this.handleCanvasMouseLeave}
                @touchstart=${this.handleCanvasMouseDown}
                @touchmove=${this.handleCanvasMouseMove}
                @touchend=${this.handleCanvasMouseUp}
                @touchcancel=${this.handleCanvasMouseUp}
              ></canvas>
              <div class="cursor-tooltip" hidden></div>
            </div>
            ${this.collapsed ? b `<div class="expand-hint">${t$3("Click to expand")}</div>` : ''}
          </div>
          ${this.showScrollNavLeft ? b `
            <div class="scroll-nav left" @click=${this.scrollToStart}>◀</div>
          ` : ''}
          ${this.showScrollNavRight ? b `
            <div class="scroll-nav right" @click=${this.scrollToEnd}>▶</div>
          ` : ''}
        </div>
        
        <div class="info">
          ${t$3("Double-click to add • Drag to move • Right-click/hold to delete")} • ${this.keyframes.length} ${t$3("keyframes")}
        </div>
      </div>
    `;
    }
};
KeyframeTimeline.styles = i$3 `
    :host {
      display: block;
      width: 100%;
      --timeline-height: 400px;
      --timeline-height-collapsed: 100px;
      --timeline-bg: var(--surface, var(--card-background-color, #ffffff));
      --timeline-track: var(--secondary-background-color, #2c2c2c);
      --timeline-ruler: var(--divider-color, rgba(255, 255, 255, 0.12));
      --keyframe-color: var(--accent-color, var(--primary-color, #03a9f4));
      --keyframe-selected-color: var(--success-color, #4caf50);
      --keyframe-dragging-color: var(--warning-color, #ff9800);
      --canvas-text-primary: var(--text-primary, var(--primary-text-color, #212121));
      --canvas-text-secondary: var(--text-secondary, var(--secondary-text-color, #616161));
      --canvas-grid-line: rgba(128, 128, 128, 0.12);
      --canvas-grid-line-major: rgba(128, 128, 128, 0.22);
      --canvas-label-bg: var(--timeline-bg);
      --indicator-color: var(--accent-color, #ff9800);
    }
    
    .timeline-container {
      background: transparent;
      border-radius: 4px;
      padding: 0;
      user-select: none;
    }
    
    .timeline-title {
      font-size: 16px;
      font-weight: 600;
      color: var(--canvas-text-primary);
      cursor: pointer;
      user-select: none;
      margin-bottom: 12px;
    }
    
    .timeline-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 12px;
      color: var(--primary-text-color, #e1e1e1);
    }
    
    .timeline-header span {
      cursor: pointer;
      user-select: none;
    }
    
    .timeline-controls {
      display: flex;
      gap: 8px;
    }
    
    button {
      background: var(--primary-color, #03a9f4);
      color: var(--primary-text-color, white);
      border: none;
      padding: 6px 12px;
      border-radius: 4px;
      cursor: pointer;
      font-size: 14px;
    }
    
    button:hover:not(:disabled) {
      opacity: 1;
      background: color-mix(in srgb, var(--primary-color, #03a9f4) 12%, var(--card-background-color, #242424));
      color: var(--primary-text-color, #eee);
      border-color: var(--primary-color, #03a9f4);
    }
    
    button:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
    
    button.secondary {
      background: var(--secondary-background-color, #2c2c2c);
      border: 1px solid var(--divider-color, rgba(255, 255, 255, 0.12));
    }
    
    .config-panel {
      background: var(--secondary-background-color, #2c2c2c);
      border-radius: 4px;
      padding: 12px;
      margin-bottom: 12px;
    }
    
    .config-row {
      display: flex;
      align-items: center;
      gap: 8px;
      margin-bottom: 8px;
    }
    
    .config-row label {
      min-width: 80px;
      font-size: 14px;
    }
    
    input[type="number"], input[type="text"] {
      background: var(--timeline-track);
      color: var(--primary-text-color, #e1e1e1);
      border: 1px solid var(--divider-color, rgba(255, 255, 255, 0.12));
      border-radius: 4px;
      padding: 4px 8px;
      font-size: 14px;
    }
    
    .slot-list {
      display: flex;
      flex-direction: column;
      gap: 6px;
      margin-top: 8px;
    }
    
    .slot-item {
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 4px;
      background: var(--timeline-track);
      border-radius: 4px;
    }
    
    .slot-color {
      width: 20px;
      height: 20px;
      border-radius: 3px;
      cursor: pointer;
      border: 1px solid var(--divider-color, rgba(255, 255, 255, 0.12));
    }
    
    .timeline-canvas-wrapper {
      width: 100%;
      overflow-x: auto;
      overflow-y: hidden;
      background: transparent;
      border-radius: 4px;
      transition: height 0.3s ease;
      cursor: pointer;
      scrollbar-width: thin;
      scrollbar-color: var(--scrollbar-thumb-color, rgba(128, 128, 128, 0.4)) transparent;
    }
    
    .timeline-canvas-wrapper::-webkit-scrollbar {
      height: 8px;
    }
    
    .timeline-canvas-wrapper::-webkit-scrollbar-track {
      background: transparent;
    }
    
    .timeline-canvas-wrapper::-webkit-scrollbar-thumb {
      background: var(--scrollbar-thumb-color, rgba(128, 128, 128, 0.4));
      border-radius: 4px;
    }
    
    .timeline-canvas-wrapper::-webkit-scrollbar-thumb:hover {
      background: var(--scrollbar-thumb-color-hover, rgba(128, 128, 128, 0.6));
    }
    
    .timeline-canvas-wrapper.expanded {
      cursor: default;
    }
    
    .timeline-canvas-wrapper:not(.expanded) {
      overflow-x: hidden;
    }
    
    .timeline-canvas {
      min-width: max(100%, 800px);
      height: var(--timeline-height);
      background: transparent;
      cursor: crosshair;
      position: relative;
      touch-action: none;
      transition: height 0.3s ease;
    }
    
    .timeline-canvas.collapsed {
      min-width: 100%;
      height: var(--timeline-height-collapsed);
      cursor: pointer;
    }
    
    .timeline-canvas.dragging {
      cursor: grabbing;
    }
    
    canvas {
      display: block;
      width: 100%;
      height: 100%;
    }
    
    @media (max-width: 800px) {
      .timeline-canvas:not(.collapsed) {
        min-width: 800px;
      }
    }
    
    .expand-hint {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background: var(--card-background-color, rgba(0, 0, 0, 0.7));
      color: var(--primary-text-color, white);
      padding: 8px 16px;
      border-radius: 4px;
      font-size: 12px;
      pointer-events: none;
      opacity: 0;
      transition: opacity 0.2s ease;
      border: 1px solid var(--divider-color, rgba(255, 255, 255, 0.2));
    }
    
    .timeline-canvas-wrapper:hover .expand-hint {
      opacity: 1;
    }
    
    .timeline-canvas-wrapper.expanded .expand-hint {
      display: none;
    }
    
    .scroll-nav {
      position: absolute;
      top: 10px;
      transform: none;
      background: var(--card-background-color, rgba(0, 0, 0, 0.6));
      color: var(--primary-text-color, white);
      border: 1px solid var(--divider-color, rgba(255, 255, 255, 0.2));
      border-radius: 4px;
      width: 32px;
      height: 32px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      z-index: 10;
      transition: background 0.2s ease;
      user-select: none;
      pointer-events: auto; /* Ensure button is clickable but doesn't block canvas unnecessarily */
    }
    
    .scroll-nav:hover {
      background: var(--secondary-background-color, rgba(0, 0, 0, 0.8));
    }
    
    .scroll-nav.left {
      left: -10px;
    }
    
    .scroll-nav.right {
      right: -10px;
    }

    .graph-legend {
      position: absolute;
      top: 10px;
      left: 70px;
      z-index: 12;
      min-width: 160px;
      max-width: 240px;
      background: var(--timeline-bg);
      border: 1px solid var(--divider-color, rgba(255, 255, 255, 0.2));
      border-radius: 6px;
      color: var(--canvas-text-primary);
      font-size: 12px;
    }

    .graph-legend-header {
      display: flex;
      align-items: center;
      gap: 6px;
      padding: 6px 8px;
      cursor: pointer;
      user-select: none;
      font-weight: 600;
    }

    .graph-legend-toggle {
      display: inline-block;
      font-size: 11px;
      transform: rotate(90deg);
      transition: transform 0.2s ease;
    }

    .graph-legend.collapsed .graph-legend-toggle {
      transform: rotate(0deg);
    }

    .graph-legend-items {
      padding: 0 8px 8px 8px;
      display: flex;
      flex-direction: column;
      gap: 6px;
      max-height: 180px;
      overflow-y: auto;
    }

    .graph-legend-item {
      display: flex;
      align-items: center;
      gap: 8px;
      min-width: 0;
    }

    .graph-legend-swatch {
      width: 10px;
      height: 10px;
      border-radius: 2px;
      border: 1px solid var(--divider-color, rgba(255, 255, 255, 0.3));
      flex: 0 0 auto;
    }

    .graph-legend-label {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      color: var(--canvas-text-secondary);
    }

    .cursor-tooltip {
      position: absolute;
      z-index: 20;
      pointer-events: none;
      background-color: rgba(var(--rgb-card-background-color, 224, 224, 224), 0.9);
      background-image: none;
      border: 1px solid var(--primary-color);
      border-radius: 4px;
      padding: 8px;
      font-size: 13px;
      line-height: 18px;
      white-space: nowrap;
    }

    .cursor-tooltip-line {
      color: var(--keyframe-color);
      font-weight: 600;
      opacity: 1;
    }
    
    .info {
      margin-top: 12px;
      font-size: 12px;
      color: var(--canvas-text-secondary);
    }

    .timeline-container { border-radius: 14px; }
    .timeline-title { font-size: 14px; letter-spacing: -0.01em; }
    .timeline-header, .timeline-controls { flex-wrap: wrap; gap: 8px; }
    button { min-height: 36px; border-radius: 8px; font: inherit; font-size: 12px; }
    button:focus-visible, input:focus-visible { outline: 2px solid var(--primary-color, #03a9f4); outline-offset: 3px; }
    .config-panel { border-radius: 12px; padding: 16px; }
    .config-row { flex-wrap: wrap; }
    input[type="number"], input[type="text"] { border-radius: 7px; min-height: 30px; }
  `;
__decorate([
    n({ type: Number })
], KeyframeTimeline.prototype, "duration", void 0);
__decorate([
    n({ type: Number })
], KeyframeTimeline.prototype, "slots", void 0);
__decorate([
    n({ type: Array })
], KeyframeTimeline.prototype, "keyframes", void 0);
__decorate([
    n({ type: Number })
], KeyframeTimeline.prototype, "previousDayEndValue", void 0);
__decorate([
    n({ type: Number })
], KeyframeTimeline.prototype, "minValue", void 0);
__decorate([
    n({ type: Number })
], KeyframeTimeline.prototype, "maxValue", void 0);
__decorate([
    n({ type: Number })
], KeyframeTimeline.prototype, "snapValue", void 0);
__decorate([
    n({ type: String })
], KeyframeTimeline.prototype, "xAxisLabel", void 0);
__decorate([
    n({ type: String })
], KeyframeTimeline.prototype, "yAxisLabel", void 0);
__decorate([
    n({ type: String })
], KeyframeTimeline.prototype, "title", void 0);
__decorate([
    n({ type: Boolean })
], KeyframeTimeline.prototype, "showHeader", void 0);
__decorate([
    n({ type: Boolean })
], KeyframeTimeline.prototype, "allowCollapse", void 0);
__decorate([
    n({ type: Boolean })
], KeyframeTimeline.prototype, "readonly", void 0);
__decorate([
    n({ type: Number })
], KeyframeTimeline.prototype, "indicatorTime", void 0);
__decorate([
    n({ type: Boolean })
], KeyframeTimeline.prototype, "showCurrentTime", void 0);
__decorate([
    n({ type: Array })
], KeyframeTimeline.prototype, "backgroundGraphs", void 0);
__decorate([
    n({ type: Array })
], KeyframeTimeline.prototype, "advanceHistory", void 0);
__decorate([
    n({ type: String, attribute: false })
], KeyframeTimeline.prototype, "tooltipMode", void 0);
__decorate([
    r()
], KeyframeTimeline.prototype, "canvasWidth", void 0);
__decorate([
    r()
], KeyframeTimeline.prototype, "canvasHeight", void 0);
__decorate([
    r()
], KeyframeTimeline.prototype, "showConfig", void 0);
__decorate([
    r()
], KeyframeTimeline.prototype, "draggingIndex", void 0);
__decorate([
    r()
], KeyframeTimeline.prototype, "draggingSegment", void 0);
__decorate([
    r()
], KeyframeTimeline.prototype, "selectedKeyframeIndex", void 0);
__decorate([
    r()
], KeyframeTimeline.prototype, "collapsed", void 0);
__decorate([
    r()
], KeyframeTimeline.prototype, "showScrollNavLeft", void 0);
__decorate([
    r()
], KeyframeTimeline.prototype, "showScrollNavRight", void 0);
__decorate([
    r()
], KeyframeTimeline.prototype, "undoStack", void 0);
__decorate([
    r()
], KeyframeTimeline.prototype, "legendCollapsed", void 0);
KeyframeTimeline = __decorate([
    t('keyframe-timeline')
], KeyframeTimeline);

export { KeyframeTimeline };
//# sourceMappingURL=keyframe-timeline.js.map
