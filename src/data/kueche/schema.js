// ===== Datenmodell "Küche" (Prompt-Baukasten) =====
// Reine Daten-/Logikschicht – KEIN UI, KEIN DOM. Die vier Kataloge liegen als
// JSON daneben (rezepte / rollen / formate / tabus). assemblePrompt() setzt aus
// dem Zustand + Katalogen den fertigen Prompt zusammen.
//
// Zweigleisiges Rezept-Schema (damit sich später auch die kuratierten Prompts
// abbilden lassen):
//   kind: "modular"        -> Prompt wird aus Slot-Werten zusammengebaut (die Küche)
//   kind: "fixesTemplate"  -> ein kompletter, opaker Prompt-String mit [Platzhaltern]
//                             (genau die Form der bestehenden kuratierten Prompts)

/** @typedef {'modular'|'fixesTemplate'} RezeptKind */

/**
 * @typedef {Object} Rezept
 * @property {RezeptKind} kind
 * @property {string} id
 * @property {string} verb          Station 1, z. B. "erklären"
 * @property {string} label         Klartext-Überschrift der Auswahl
 * @property {string} icon          Emoji (im UI leicht global abschaltbar)
 * @property {string} beschreibung  ein Satz Nutzen
 * @property {{aufgabe?: string, voll?: string}} template
 *           modular:       { aufgabe }  Fragment mit {thema} {material} {fach} {schulform} {klassenstufe}
 *           fixesTemplate: { voll }     kompletter Prompt-String mit [Platzhaltern]
 * @property {RezeptDefaults} [defaults]  Vorbelegung der optionalen Slots
 */

/**
 * @typedef {Object} RezeptDefaults
 * @property {string}   [rolleId]  Verweis auf rollen[].id (Station 4)
 * @property {string}   [format]   Verweis auf formate.formate[].id (Station 5)
 * @property {string}   [laenge]   Verweis auf formate.laengen[].id
 * @property {string}   [ton]      Verweis auf formate.toene[].id
 * @property {string[]} [tabus]    Verweise auf tabus[].id (Station 6)
 */

/**
 * @typedef {Object} KuecheState   Die Auswahl der Gastgeberin.
 * @property {Object}   settings              Station 0 (localStorage, einmalig)
 * @property {string}   settings.schulform
 * @property {string}   settings.fach
 * @property {string}   settings.klassenstufe
 * @property {string}   settings.zielTool     'ais' | 'chatgpt' | 'claude' | 'copilot'
 * @property {string}   rezeptId              Station 1 (Pflicht)
 * @property {string}   thema                 Station 2 (Pflicht)
 * @property {string}   [material]            Station 2 (optional, eingefügtes Material)
 * @property {Object}   [gaeste]              Station 3
 * @property {string}   [gaeste.vorwissen]
 * @property {string}   [gaeste.sprachniveau]
 * @property {string[]} [gaeste.besonderheiten]
 * @property {string}   [rolleId]             Station 4 (überschreibt Rezept-Default)
 * @property {string}   [rolleFreitext]
 * @property {string}   [format]              Station 5 (überschreiben Defaults)
 * @property {string}   [laenge]
 * @property {string}   [ton]
 * @property {string[]} [tabus]               Station 6
 * @property {string}   [tabusFreitext]
 */

/**
 * @typedef {Object} Katalog
 * @property {Rezept[]} rezepte
 * @property {{id:string,label:string,text:string}[]} rollen
 * @property {{formate:any[],laengen:any[],toene:any[]}} formate
 * @property {{id:string,label:string,text:string}[]} tabus
 */

export const ZIEL_TOOL_OPTIONS = ['ais', 'chatgpt', 'claude', 'copilot'];

const byId = (list, id) => (list || []).find((x) => x.id === id);
const fill = (tpl, vars) => (tpl || '').replace(/\{(\w+)\}/g, (_, k) => String(vars[k] ?? '').trim());

/**
 * Baut aus State + Katalogen den fertigen Prompt-String.
 * Rein funktional; leere Slots werden ausgelassen. Reihenfolge und Bold-Labels
 * spiegeln bewusst die Struktur der kuratierten Prompts (Rolle/Aufgabe/Kontext/…).
 * @param {KuecheState} state
 * @param {Katalog} catalog
 * @returns {string}
 */
/**
 * Wie assemblePrompt(), liefert aber die einzelnen Abschnitte als Array
 * [{ key, text }] – damit das UI Abschnitte diffen und neu hinzugekommene
 * hervorheben kann. Reihenfolge = spätere Prompt-Reihenfolge.
 * @param {KuecheState} state
 * @param {Katalog} catalog
 * @returns {{key:string, text:string}[]}
 */
export function assembleParts(state, catalog) {
  const rezept = byId(catalog.rezepte, state.rezeptId);
  if (!rezept) return [];

  // Feste Templates (kuratierter Import) unverändert als ein Abschnitt.
  if (rezept.kind === 'fixesTemplate') {
    const voll = (rezept.template && rezept.template.voll) || '';
    return voll ? [{ key: 'voll', text: voll }] : [];
  }

  const s = state.settings || {};
  const g = state.gaeste || {};
  const d = rezept.defaults || {};
  const vars = {
    thema: state.thema || '', material: state.material || '',
    fach: s.fach || '', schulform: s.schulform || '', klassenstufe: s.klassenstufe || '',
  };

  const parts = [];

  // Rolle (Station 4) – Freitext > explizite Wahl > Rezept-Default
  const rolleText = (state.rolleFreitext && state.rolleFreitext.trim())
    || (byId(catalog.rollen, state.rolleId || d.rolleId) || {}).text;
  if (rolleText) parts.push({ key: 'rolle', text: `**Rolle:** Du bist ${rolleText}.` });

  // Aufgabe (Verb + Thema; Station 1 + 2)
  const aufgabe = fill(rezept.template.aufgabe, vars).trim();
  if (aufgabe) parts.push({ key: 'aufgabe', text: `**Aufgabe:** ${aufgabe}` });

  // Material (Station 2, optional)
  if (state.material && state.material.trim()) {
    parts.push({ key: 'material', text: `**Material (Grundlage):**\n${state.material.trim()}` });
  }

  // Kontext (Station 0 + 3)
  const ctx = [];
  if (s.fach) ctx.push(`Fach: ${s.fach}`);
  if (s.schulform) ctx.push(`Schulform: ${s.schulform}`);
  if (s.klassenstufe) ctx.push(`Klassenstufe: ${s.klassenstufe}`);
  if (g.vorwissen) ctx.push(`Vorwissen: ${g.vorwissen}`);
  if (g.sprachniveau) ctx.push(`Sprachniveau: ${g.sprachniveau}`);
  if (g.besonderheiten && g.besonderheiten.length) ctx.push(`Besonderheiten: ${g.besonderheiten.join(', ')}`);
  if (ctx.length) parts.push({ key: 'kontext', text: `**Kontext:** ${ctx.join('. ')}.` });

  // Ausgabe (Station 5, sonst Rezept-Defaults)
  const out = [];
  const fmt = byId(catalog.formate.formate, state.format || d.format);
  const len = byId(catalog.formate.laengen, state.laenge || d.laenge);
  const ton = byId(catalog.formate.toene, state.ton || d.ton);
  [fmt, len, ton].forEach((x) => { if (x) out.push(x.text); });
  if (out.length) parts.push({ key: 'ausgabe', text: `**Ausgabe:** ${out.join(' ')}` });

  // Regeln / Tabus (Station 6, sonst Rezept-Defaults)
  const tabuIds = (state.tabus && state.tabus.length) ? state.tabus : (d.tabus || []);
  const regeln = tabuIds.map((id) => (byId(catalog.tabus, id) || {}).text).filter(Boolean);
  if (state.tabusFreitext && state.tabusFreitext.trim()) regeln.push(state.tabusFreitext.trim());
  if (regeln.length) parts.push({ key: 'regeln', text: '**Bitte beachten:**\n' + regeln.map((r) => `- ${r}`).join('\n') });

  return parts;
}

/**
 * Fertiger Prompt-String (Abschnitte mit Leerzeilen verbunden).
 * @param {KuecheState} state
 * @param {Katalog} catalog
 * @returns {string}
 */
export function assemblePrompt(state, catalog) {
  return assembleParts(state, catalog).map((p) => p.text).join('\n\n');
}

/**
 * Prüft die referenzielle Integrität der Kataloge. Wirft mit Klartext-Fehlern,
 * damit Datenfehler früh auffallen (nicht erst im UI).
 * @param {Katalog} catalog
 */
export function validate(catalog) {
  const errors = [];
  const has = (list) => new Set((list || []).map((x) => x.id));
  const roleIds = has(catalog.rollen);
  const fmtIds = has(catalog.formate.formate);
  const lenIds = has(catalog.formate.laengen);
  const tonIds = has(catalog.formate.toene);
  const tabuIds = has(catalog.tabus);
  const seen = new Set();

  for (const r of catalog.rezepte) {
    if (seen.has(r.id)) errors.push(`Rezept-ID doppelt: "${r.id}"`);
    seen.add(r.id);
    if (!['modular', 'fixesTemplate'].includes(r.kind)) errors.push(`Rezept ${r.id}: unbekanntes kind "${r.kind}"`);
    if (r.kind === 'modular') {
      if (!(r.template && r.template.aufgabe)) errors.push(`Rezept ${r.id}: template.aufgabe fehlt`);
      const d = r.defaults || {};
      if (d.rolleId && !roleIds.has(d.rolleId)) errors.push(`Rezept ${r.id}: rolleId "${d.rolleId}" unbekannt`);
      if (d.format && !fmtIds.has(d.format)) errors.push(`Rezept ${r.id}: format "${d.format}" unbekannt`);
      if (d.laenge && !lenIds.has(d.laenge)) errors.push(`Rezept ${r.id}: laenge "${d.laenge}" unbekannt`);
      if (d.ton && !tonIds.has(d.ton)) errors.push(`Rezept ${r.id}: ton "${d.ton}" unbekannt`);
      (d.tabus || []).forEach((t) => { if (!tabuIds.has(t)) errors.push(`Rezept ${r.id}: tabu "${t}" unbekannt`); });
    } else if (!(r.template && r.template.voll)) {
      errors.push(`Rezept ${r.id}: template.voll fehlt`);
    }
  }
  if (errors.length) throw new Error('Katalog-Validierung fehlgeschlagen:\n- ' + errors.join('\n- '));
  return true;
}
