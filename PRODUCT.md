# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Lehrkräfte im deutschsprachigen Raum – Grundschule bis Berufsschule, alle Fächer. Kein technischer Hintergrund vorausgesetzt; die Zielperson kann kein „Prompt-Engineering" und will es auch nicht lernen. Typische Situation: eine konkrete Aufgabe steht an (Elternbrief, Stunde planen, Feedback, Förderung, Korrektur), oft unter Zeitdruck, am Schreibtisch oder zwischendurch. Öffentliches, frei zugängliches Angebot, nicht an eine einzelne Schule oder einen Träger gebunden.

## Product Purpose

Lehrkräften helfen, „die richtigen Worte für die KI zu finden". Die Seite überbrückt die Lücke zwischen einer echten Lehrer-Aufgabe und einem brauchbaren KI-Prompt: Statt vor einem leeren Chatfenster zu sitzen, wählt die Lehrkraft eine Aufgabe, beantwortet ein paar kurze Fragen und erhält einen fertigen, kopierbaren Prompt für ein KI-Tool ihrer Wahl. Erfolg = die Lehrkraft kommt spürbar schneller zu einem verwendbaren Ergebnis und nutzt KI dabei datensparsam und selbstbewusst.

## Positioning

Kuratierte, auf den deutschen Schulalltag zugeschnittene Prompt-Sammlung **plus** geführter Zusammenbau – nicht eine generische, endlose Prompt-Liste. Zwei ineinandergreifende Wege, die eine neutrale Prompt-Bibliothek nicht bietet:
- der **Assistent**, der einen kuratierten Prompt Schritt für Schritt mit den Angaben der Lehrkraft befüllt (Feld für Feld, ohne Fachjargon);
- die **„Küche"** (Prompt-Baukasten), die aus modularen Bausteinen – Rezept/Verb, Rolle, Kontext, Format, Ton, Tabus – einen maßgeschneiderten Prompt zusammensetzt.
Beides in Alltagssprache, ohne Login, kostenlos. Datenschutzbewusstsein ist eingebaut, nicht aufgesetzt.

## Operating Context

- Nutzung meist bei einer konkret anstehenden Aufgabe; Kernabläufe: (1) Startseite → Aufgabe/Kategorie wählen → Assistent befüllt Prompt → kopieren → im gewählten KI-Tool einfügen; (2) „Eigenen Prompt bauen" über die stationsbasierte Küche (`/bauen`).
- Grundeinstellungen (Schulform, Fach, Klassenstufe, Ziel-Tool) werden einmal gesetzt und lokal gemerkt, damit sie nicht wiederholt abgefragt werden.
- Inhalte werden von Admins über Decap CMS gepflegt oder direkt als Markdown im Repo; Lehrkräfte können über ein Formular eigene Prompts vorschlagen („Community-Beitrag", nach Sichtung).
- Begleitend: eine Aufklärungsseite „KI & Datenschutz im Unterricht" in Alltagssprache.

## Capabilities and Constraints

- **Bestand:** 90 kuratierte Prompts in 7 Kategorien – Unterrichtsvorbereitung, Kreativer Unterricht, Arbeitsorganisation, Individuelle Förderung, Feedback, Elternkommunikation, Kreative/Verrückte Prompts.
- **Prompt-Schema (Frontmatter):** `title`, `description`, `category`, `stage` (Grundschule / Sek I / Sek II / Berufsschule / Alle), `subject` (freier Fach-String), optional `hint`, `order`, mehrzeiliger `prompt` mit `[Platzhaltern]`. `pending`-Prompts werden ausgeblendet.
- **Küche-Datenmodell:** zweigleisiges Rezept-Schema (`modular` = aus Slots zusammengebaut; `fixesTemplate` = kompletter Prompt-String mit Platzhaltern), Kataloge als JSON (rezepte / rollen / formate / tabus) mit referenzieller Validierung.
- **Ziel-Tool tool-neutral:** unterstützte Ziele sind `ais` (AIS.chat), `chatgpt`, `claude`, `copilot`. Die Lehrkraft wählt frei; die Seite schreibt kein Tool vor. Prompts sind bewusst so gebaut, dass sie in jedem Tool funktionieren.
- **Reine statische Web-App:** Astro (statische Generierung), Inhalte als Markdown, Fuse.js für Suche, Decap CMS als Admin-Oberfläche, GitHub als Repo/Auth, Cloudflare Pages als Hosting (Auto-Deploy). Kein eigenes Backend außer einem kleinen Cloudflare-Worker-Endpoint für Prompt-Einreichungen. Kein Nutzer-Login, keine Konten.

## Brand Commitments

- **Name:** Prompt-Profi (Wortmarke mit gesetztem „.": „Prompt-Profi**.**"). Betrieben unter `prompt-profi.babing-media.de` (Babing Media).
- **Sprache:** durchgehend Deutsch, Du-Ansprache, Alltagssprache statt Fachjargon; ruhig, ermutigend, ohne KI-Hype und ohne Panikmache („ohne Panik, aber mit Augenmaß").
- **Schriften (im Einsatz):** Bricolage Grotesque (variabel), Fraunces (variabel), Inter.
- **Favicon:** aktuell „P"-Platzhalter (`public/favicon.svg`), durch echtes Logo ersetzbar.

## Evidence on Hand

- Echte, im Repo vorhandene Inhalte: 90 kuratierte Prompts (`src/content/prompts/`), Küche-Kataloge (`src/data/kueche/`), Startseiten-Aufgabenwähler (`src/data/einstieg.js`), Aufklärungsseite `ki-datenschutz.astro`, Rechtsseiten `impressum.astro` / `datenschutz.astro`.
- **Nicht vorhanden – nicht erfinden:** keine Nutzerzahlen, Testimonials, Schul-Referenzen, Auszeichnungen oder Wirksamkeits-/Zeitersparnis-Belege. Der Einreichungs-Endpoint und das Decap-CMS-Setup existieren, sind aber (laut README) teils noch einzurichten (OAuth-Proxy „entscheiden wir gemeinsam, sobald die Seite steht").

## Product Principles

1. **Aufgabe zuerst, Prompt zuletzt.** Der Einstieg ist immer eine echte Lehrer-Aufgabe, nie ein leeres Textfeld oder abstraktes „Prompt schreiben".
2. **Führen statt voraussetzen.** Niemand muss Prompt-Engineering können; der Weg zum fertigen Prompt läuft über kurze, verständliche Fragen.
3. **Niedrigschwellig und kostenlos.** Ohne Login, ohne Hürden, in Alltagssprache – sofort nutzbar.
4. **Datensparsamkeit eingebaut.** Datenschutzbewusste Nutzung wird durch Aufklärung und Voreinstellungen gefördert, ohne zu bevormunden oder Angst zu machen.
5. **Tool-neutral.** Die Lehrkraft wählt ihr KI-Tool selbst; Prompts funktionieren überall. (Zu klären: bestehende Copy stellt AIS.chat als „freigegebenen Weg" heraus – künftige Arbeit muss diese Betonung bewusst mit der tool-neutralen Position in Einklang bringen, nicht versehentlich.)

## Accessibility & Inclusion

Zielgruppe mit gemischter Technik-Affinität und oft unter Zeitdruck: Verständlichkeit, klare Sprache und geringe kognitive Last sind Pflicht, keine Kür. Inhaltlich adressiert das Produkt selbst Inklusion und Differenzierung (DaZ, LRS, ADHS, Nachteilsausgleich) – der inklusive Anspruch der Inhalte sollte sich in der Bedienbarkeit der Oberfläche spiegeln. Kein spezifischer Konformitätsstandard (z. B. BITV/WCAG-Stufe) wurde bislang festgelegt.
