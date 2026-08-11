// ===== Kreide-Linien-Icons =====
// Ein konsistentes, gezeichnetes Icon-Set (ersetzt Emoji) im selben Strich wie
// die übrigen Icons der Seite: 24×24, ohne Füllung, Kreidestrich = currentColor,
// 2px, runde Ecken/Enden. So bleiben die Icons Teil der Tafel-Welt statt bunter
// Sticker. Farbe kommt vom Kontext (z. B. Kategorie-Kreide via CSS).
const S = (inner) =>
  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${inner}</svg>`;

export const ICONS = {
  // Aufgaben (Startseite)
  brief:       S('<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3.5 7 8.5 6 8.5-6"/>'),
  kalender:    S('<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/>'),
  gluehbirne:  S('<path d="M9 18h6M10 21h4"/><path d="M8.4 15A6 6 0 1 1 15.6 15c-.5.5-.9 1-1 2h-5.2c-.1-1-.5-1.5-1-2Z"/>'),
  sprechblase: S('<path d="M20 12a7.5 7.5 0 0 1-10.9 6.7L4 20l1.3-4A7.5 7.5 0 1 1 20 12Z"/>'),
  puzzle:      S('<path d="M5 9.5V6a1 1 0 0 1 1-1h3.5a1.6 1.6 0 0 1 3 0H16a1 1 0 0 1 1 1v3.5a1.6 1.6 0 0 1 0 3V16a1 1 0 0 1-1 1h-3.5a1.6 1.6 0 0 0-3 0H6a1 1 0 0 1-1-1v-3.5a1.6 1.6 0 0 0 0-3Z"/>'),

  // Rezepte (Küche-Baukasten)
  stift:       S('<path d="M4 20l1.2-4L16 5.2l2.8 2.8L8 18.8 4 20Z"/><path d="m13.6 7.6 2.8 2.8"/>'),
  waage:       S('<path d="M12 4.5v14.5M8.5 19h7M5 7l7-1.4L19 7"/><path d="M5 7 2.9 11.6a2.5 2.5 0 0 0 4.2 0L5 7ZM19 7l-2.1 4.6a2.5 2.5 0 0 0 4.2 0L19 7Z"/>'),
  werkzeug:    S('<path d="M14.7 6.3a3.7 3.7 0 0 0 4.8 4.8l-8.5 8.5a2.1 2.1 0 0 1-3-3l8.5-8.5a3.7 3.7 0 0 0-1.8-1.8Z"/>'),
  gedanke:     S('<path d="M7.6 12.5a4 4 0 1 1 4.2-5.6A3.2 3.2 0 0 1 16 8.5a3 3 0 0 1-.6 6H8.2a3 3 0 0 1-.6-2Z"/><circle cx="6" cy="17.6" r="1.3"/><circle cx="8.6" cy="20.4" r=".8"/>'),

  // Stationen (Wizard)
  zahnrad:     S('<circle cx="12" cy="12" r="3.1"/><path d="M12 3.6v2.1M12 18.3v2.1M4.9 4.9l1.5 1.5M17.6 17.6l1.5 1.5M3.6 12h2.1M18.3 12h2.1M4.9 19.1l1.5-1.5M17.6 6.4l1.5-1.5"/>'),
  klemmbrett:  S('<rect x="6" y="4.5" width="12" height="16.5" rx="2"/><rect x="9" y="2.6" width="6" height="3.2" rx="1"/><path d="M9 11h6M9 15h5"/>'),
  korb:        S('<path d="M4 8h16l-1.3 10a2 2 0 0 1-2 1.8H7.3a2 2 0 0 1-2-1.8L4 8Z"/><path d="M8.5 8l2-4M15.5 8l-2-4M9.5 12v4M14.5 12v4"/>'),
  personen:    S('<circle cx="9" cy="8" r="3"/><path d="M3.6 19a5.5 5.5 0 0 1 10.8 0"/><path d="M16 5.6a3 3 0 0 1 0 5.4M17 13.7A5.5 5.5 0 0 1 20.4 19"/>'),
  kochmuetze:  S('<path d="M7 13.5a3.5 3.5 0 0 1-1-6.8 4 4 0 0 1 7.6-1.2A3.7 3.7 0 0 1 18 6.9a3.5 3.5 0 0 1-1 6.6H7Z"/><path d="M7 13.5V18a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-4.5"/>'),
  teller:      S('<circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="3.3"/>'),
  verboten:    S('<circle cx="12" cy="12" r="8"/><path d="m6.7 6.7 10.6 10.6"/>'),
  haken:       S('<circle cx="12" cy="12" r="8"/><path d="m8.3 12.2 2.5 2.5 4.9-5.4"/>'),
};

// Rezept-ID → Icon-Slug
export const REZEPT_ICON = {
  planen: 'kalender',
  erklaeren: 'gluehbirne',
  formulieren: 'stift',
  bewerten: 'waage',
  differenzieren: 'puzzle',
  ueberarbeiten: 'werkzeug',
  'ideen-sammeln': 'gedanke',
};
