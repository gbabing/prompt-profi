// ===== Startseiten-Aufgabenwähler =====
// Die fünf vorgestellten Aufgaben unter "Was möchtest du gerade erledigen?".
// Hier klar editierbar – ohne Code-Graben:
//   emoji    : Icon (siehe SHOW_EMOJIS zum globalen Abschalten)
//   label    : Kacheltitel
//   desc     : ein Satz Nutzen
//   promptId : Ziel-Prompt = Dateiname in src/content/prompts/ OHNE ".md"
//   effort   : (optional) Aufwandshinweis überschreiben; sonst automatisch aus
//              der echten Feldzahl des Prompts abgeleitet ("5 kurze Fragen").
// Reihenfolge = Anzeigereihenfolge. Welche fünf oben stehen, lässt sich später
// anhand echter Nutzungsdaten anpassen.
export const AUFGABEN = [
  { emoji: '✉️', label: 'Elternbrief schreiben',       desc: 'Zu einem Anlass, klar und freundlich formuliert.',       promptId: 'ek-informationsbrief-an-eltern' },
  { emoji: '🗓️', label: 'Eine Stunde planen',          desc: 'Verlaufsplan mit Phasen, Methoden und Zeiten.',          promptId: 'uv-stundenverlaufsplan-fuer-45-minuten' },
  { emoji: '💡', label: 'Ein Thema kreativ angehen',   desc: 'Neuer Zugang oder Methode, die neugierig macht.',        promptId: 'ku-stummer-impuls-fuer-stundeneinstieg' },
  { emoji: '💬', label: 'Feedback formulieren',        desc: 'Motivierend und konkret, ohne Rotstift-Ton.',            promptId: 'fb-formatives-feedback-zu-schueler-innentext' },
  { emoji: '🧩', label: 'Etwas verständlich erklären', desc: 'Ein kniffliges Thema einfacher oder auf mehreren Wegen.', promptId: 'if-lerntypen-gerechte-aufgaben-entwickeln' },
];

// Emojis global ein-/ausblenden (auf false setzen entfernt alle Icons).
export const SHOW_EMOJIS = true;

// Slot für eine spätere 20-Sekunden-Demo (stumme Endlosschleife).
// Auf true setzen, sobald ein Demo-Video vorliegt.
export const SHOW_DEMO_SLOT = false;
