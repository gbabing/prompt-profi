---
name: Prompt-Profi
description: The classroom chalkboard where a teacher's task gets chalked into a usable AI prompt, line by line.
colors:
  chalk-yellow: "#f5cb5c"
  chalk-yellow-hover: "#ffd977"
  on-primary-board-green: "#1e3628"
  board-green: "#22402f"
  board-green-dark: "#1b3325"
  board-green-tertiary: "#1f3a2b"
  slate-panel: "#2b4d3a"
  slate-panel-hover: "#33593f"
  chalk-white: "#f3efe4"
  chalk-white-heading: "#f6f2e7"
  chalk-dusty: "#c6d1c2"
  chalk-smudged: "#9fb09c"
  oak: "#b9793f"
  oak-dark: "#8a5628"
  oak-light: "#d69a5e"
  oak-edge: "#6b4320"
  chalk-amber: "#f2c14e"
  chalk-rose: "#f29ab7"
  chalk-teal: "#6fd2c2"
  chalk-green: "#a9dd7e"
  chalk-blue: "#93bdf2"
  chalk-lilac: "#cbaaf0"
  chalk-orange: "#f4a259"
  # Semantische Status- & Hilfsfarben (Callouts, Formular-Status, Datenschutz/Recht)
  success: "#198754"
  success-mid: "#78d296"
  success-soft: "#6fd29a"
  success-pale: "#cdeed6"
  success-palest: "#eafff4"
  success-deep: "#0a5c37"
  danger: "#dc3545"
  danger-mid: "#f08a8a"
  danger-soft: "#f0a3a3"
  danger-softer: "#f0c6c6"
  danger-pale: "#f3cccc"
  danger-palest: "#f6dede"
  danger-deep: "#842029"
  info-green: "#33502f"
  info-green-deep: "#274224"
  info-green-mid: "#3f6238"
  info-green-pale: "#d3e6c6"
  info-teal-pale: "#cdeee6"
  info-green-bg: "#eef5ec"
  legal-amber: "#e2952f"
  legal-amber-deep: "#6a4a12"
  legal-amber-deepest: "#543a0e"
  legal-amber-pale: "#ecd6a4"
  legal-amber-palest: "#f6e6bf"
  # Warme Holz-Textfarben (Kreideleiste) & neutrale Scrims
  wood-text: "#f4e6d3"
  wood-text-soft: "#f4e2cb"
  warm-dark: "#3a2f2a"
  scrim-black: "#000000"
  scrim-near-black: "#111111"
typography:
  scale:
    s-066: "0.66rem"
    s-068: "0.68rem"
    s-070: "0.7rem"
    s-075: "0.75rem"
    s-078: "0.78rem"
    s-080: "0.8rem"
    s-0813: "0.8125rem"
    s-082: "0.82rem"
    s-083: "0.83rem"
    s-088: "0.875rem"
    s-090: "0.9rem"
    s-092: "0.92rem"
    s-094: "0.94rem"
    s-0938: "0.9375rem"
    s-095: "0.95rem"
    s-105: "1.05rem"
    s-108: "1.075rem"
    s-110: "1.1rem"
    s-115: "1.15rem"
    s-130: "1.3rem"
    s-135: "1.35rem"
    s-140: "1.4rem"
    s-160: "1.6rem"
    s-175: "1.75rem"
    s-185: "1.85rem"
    s-190: "1.9rem"
    s-200: "2rem"
    s-280: "2.8rem"
  display:
    fontFamily: "Bricolage Grotesque Variable, Bricolage Grotesque, system-ui, sans-serif"
    fontSize: "clamp(2.1rem, 5.5vw, 3.4rem)"
    fontWeight: 700
    lineHeight: 1.05
    letterSpacing: "-0.02em"
    fontVariation: "optical-sizing: auto"
  headline:
    fontFamily: "Bricolage Grotesque Variable, Bricolage Grotesque, system-ui, sans-serif"
    fontSize: "1.5rem"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "-0.01em"
  title:
    fontFamily: "Bricolage Grotesque Variable, Bricolage Grotesque, system-ui, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "-0.01em"
  body:
    fontFamily: "Inter, system-ui, -apple-system, Segoe UI, Roboto, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "normal"
  label:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "0.72rem"
    fontWeight: 700
    lineHeight: 1.3
    letterSpacing: "0.04em"
  mono:
    fontFamily: "SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, monospace"
    fontSize: "0.85rem"
    fontWeight: 400
    lineHeight: 1.65
rounded:
  hair: "3px"
  tab: "6px"
  sm: "9px"
  card: "12px"
  md: "13px"
  lg: "18px"
  xl: "24px"
  pill: "999px"
spacing:
  xs: "0.5rem"
  sm: "0.75rem"
  md: "1rem"
  lg: "1.5rem"
  xl: "2rem"
components:
  button-primary:
    backgroundColor: "{colors.chalk-yellow}"
    textColor: "{colors.on-primary-board-green}"
    rounded: "{rounded.pill}"
    padding: "0.85rem 1.4rem"
  button-primary-hover:
    backgroundColor: "{colors.chalk-yellow-hover}"
    textColor: "{colors.on-primary-board-green}"
  button-secondary:
    backgroundColor: "{colors.slate-panel}"
    textColor: "{colors.chalk-dusty}"
    rounded: "{rounded.pill}"
    padding: "0.5rem 1rem"
  chip:
    backgroundColor: "{colors.slate-panel}"
    textColor: "{colors.chalk-white}"
    rounded: "{rounded.pill}"
    padding: "0.45rem 0.9rem"
  chip-selected:
    backgroundColor: "{colors.chalk-yellow}"
    textColor: "{colors.on-primary-board-green}"
  card:
    backgroundColor: "{colors.slate-panel}"
    textColor: "{colors.chalk-white}"
    rounded: "{rounded.md}"
    padding: "1.4rem 1.35rem 1.15rem"
  input:
    backgroundColor: "{colors.board-green-dark}"
    textColor: "{colors.chalk-white}"
    rounded: "{rounded.md}"
    padding: "0.625rem 1rem"
---

# Design System: Prompt-Profi

## Overview

**Creative North Star: "Die Kreidetafel" (The Classroom Chalkboard)**

Prompt-Profi is a real green classroom slate set in a warm oak frame, and writing on it *is* the interface. A teacher, short on time, recognises the board instantly, picks a chalked task, answers a few chalked questions, and watches a usable AI prompt get written up line by line. The surface is a deep, warm slate-green board (#22402f) wiped with faint radial chalk-cloud gradients and a fine SVG chalk-dust grain; a fixed oak border-image frames every viewport like the wooden edge of a real board. Ink is chalk-white (#f3efe4), never pure white; secondary text is dusty, faintly greenish chalk. The whole system is quiet, warm, analog, and encouraging — the opposite of a hype-y AI dashboard.

The system deliberately refuses two defaults. It refuses the dark-neon "AI tool" look: there are no colored glows, no cyan-on-black gradients, no synthetic sheen — shadows are neutral black-based elevation only. And it refuses the cream-paper-and-serif "AI assistant" default: the ground is a dark board, not a light page, and headings are a written grotesque, not a literary serif. Category meaning is carried by seven bright "chalk-stick" colors used as small tabs, indices, and badges; a single chalk-yellow (#f5cb5c) is the one "highlighted" primary action, always sitting on dark board-green text. Cards tilt a fraction of a degree, like index cards laid on a tray, and the H1 carries a hand-drawn chalk-squiggle underline.

The density is comfortable and generous, tuned for a teacher scanning under time pressure: large tap targets, one clear primary path per screen, low cognitive load. Iconography is authored 24×24 chalk line-drawings (stroke = currentColor), never emoji or colored stickers, so every glyph belongs to the board.

**Key Characteristics:**
- Dark warm slate-green board ground with chalk-dust grain and a fixed oak frame — never a light page.
- Chalk-white ink; one chalk-yellow highlight for the single primary action per screen.
- Seven bright chalk-stick category colors, used sparingly as tabs, indices, and badges.
- Neutral black-based elevation only — no colored glows, no neon.
- Authored chalk line-icons (24×24, stroke currentColor, 2px round); zero emoji.
- Written grotesque headings (Bricolage) over legible sans body (Inter); hand-drawn chalk underline on the H1.

## Colors

A dark, warm slate-green stage lit by chalk: near-white ink, one yellow highlight, and a rainbow of muted "chalk-stick" accents that appear only in small doses.

### Primary
- **Chalk Yellow** (#f5cb5c): The one "chalked-in" highlight. Reserved for the single primary action per screen — build/submit CTAs, the active wizard "next", copy buttons, selected chips, the H1's hand-drawn underline, focus glow, and highlight marks. Hover lifts to a brighter **Chalk Yellow Hover** (#ffd977). Primary actions always place **Board-Green ink** (#1e3628) on the yellow, never white-on-yellow.

### Secondary
Seven bright "chalk-stick" category colors. Each category owns one; they surface only as the small tab on a card, the oversized category index number, and category badges (via `color-mix` against the board). Never used as large fills.
- **Chalk Amber** (#f2c14e): Unterrichtsvorbereitung.
- **Chalk Rose** (#f29ab7): Kreativer Unterricht.
- **Chalk Teal** (#6fd2c2): Arbeitsorganisation.
- **Chalk Green** (#a9dd7e): Individuelle Förderung. Doubles as the "success / privacy-safe" hue for callouts and done-state icons.
- **Chalk Blue** (#93bdf2): Feedback.
- **Chalk Lilac** (#cbaaf0): Elternkommunikation.
- **Chalk Orange** (#f4a259): Kreative/Verrückte Prompts.

### Tertiary
- **Oak Frame** (#b9793f, with #d69a5e light / #8a5628 dark / #6b4320 edge): The wood. Renders the fixed viewport border-image and the footer "chalk-tray" gradient. Never used for text or interactive fills — it is the frame, not the content.

### Neutral
- **Board Green** (#22402f): The main slate ground; the whole app sits on it.
- **Board Green Dark** (#1b3325): The second, darker board for controls, footers, inset panels, and (as `rgba(0,0,0,.16)`/`.28`) input wells.
- **Slate Panel** (#2b4d3a, hover #33593f): The raised board-panel surface for cards, tiles, modals, and fields.
- **Chalk White** (#f3efe4) / **Chalk White Heading** (#f6f2e7): Body ink and heading ink respectively.
- **Chalk Dusty** (#c6d1c2): Secondary text — descriptions, intros, muted labels.
- **Chalk Smudged** (#9fb09c): Tertiary text — counts, hints, placeholders, disabled marks.
- **Chalk Hairlines** (`rgba(244,241,230,0.17)` border / `0.32` strong): All borders are faint chalk lines, not solid rules.

### Named Rules
**The One Chalk-Yellow Rule.** Chalk-yellow marks exactly one primary path per screen. If two things are yellow, one of them is wrong — demote it to a chalk-outlined secondary surface.

**The Chalk-Stick Restraint Rule.** Category colors appear only as small signals — a card tab, an index number, a badge tint. They never become a panel background or a large fill. Their scarcity is what keeps the board readable.

**The No-Neon Rule.** Accent color never glows. Depth is black-based shadow only; a colored halo would break the analog board.

## Typography

**Display Font:** Bricolage Grotesque (variable, self-hosted via Fontsource; falls back to system-ui). Optical sizing auto.
**Body Font:** Inter (variable weights 400–700, self-hosted; falls back to system-ui).
**Mono Font:** SFMono/Menlo/Consolas stack — for the generated prompt text and prompt textareas only.

**Character:** Bricolage is the "written on the board" voice — chunky, confident, slightly hand-set — carried by every heading, wordmark, category index, and wizard question. Inter is the "legible on slate" voice for everything a teacher actually reads at length. Every heading gets a `text-shadow: 0 1px 0 rgba(0,0,0,0.28)` so chalk text sits *on* the board rather than floating.

### Hierarchy
- **Display** (700, `clamp(2.1rem, 5.5vw, 3.4rem)`, line-height 1.05, tracking -0.02em, max 16ch): The hero H1 only ("KI-Hilfe für Lehrkräfte"), carrying the hand-drawn chalk underline.
- **Headline** (600, 1.5–1.6rem): Section titles, chooser heading, modal title, wizard question, legal H1/H2.
- **Title** (600, 1.25–1.35rem): Card and tile titles, category-card titles.
- **Body** (400, 1rem, line-height 1.5): Default reading text. Intros/descriptions run ~0.875–1.075rem in dusty chalk.
- **Label** (700, 0.66–0.75rem, tracking 0.03–0.04em, UPPERCASE): Overlines — builder titles, wizard step counts, sublabels, context labels.
- **Mono** (400, 0.85rem, line-height 1.65): The generated prompt block and prompt textareas — the "output" voice, visually distinct from chalk.

### Named Rules
**The Written-Heading Rule.** Every heading is Bricolage with a 1px dark text-shadow. Serif headings and un-shadowed chalk text both break the board illusion.

## Layout

Centered single column, `max-width: 1200px`, padded `3.5rem 1.5rem 4rem` (the extra top padding clears the oak frame). Card and tile grids are responsive auto-fill: `repeat(auto-fill, minmax(300px, 1fr))` for cards/categories, `minmax(250px, 1fr)` for the task chooser, gap ~1.35rem. The `/bauen` "Küche" uses a two-column layout (stations + a sticky live-preview aside) that collapses to one column on narrow screens. The oak frame is a fixed `body::before` overlay (13px, 8px under 640px) that never scrolls. Spacing rhythm is rem-based in ~0.25rem steps; internal card padding sits around 1.2–1.5rem. Single breakpoint at 640px (with a couple of component-local 560px collapses) folds multi-column grids and form rows to one column.

## Elevation & Depth

Depth is **neutral, black-based shadow plus subtle tonal layering** — never colored light. Panels lift off the board with soft dark shadows; the raised slate panels also carry a faint top-lit white gradient (`rgba(255,255,255,0.05)` → transparent) to read as chalk-brushed. The oak frame adds an inset dark shadow (`inset 0 0 30px rgba(0,0,0,0.5)`) so the board feels recessed inside the wood. Focus is a soft chalk-yellow ring (`0 0 0 3px var(--color-primary-soft)`), the one place accent color is allowed to spread.

### Shadow Vocabulary
- **Resting card** (`box-shadow: 0 1px 2px rgba(0,0,0,0.28)` → `--shadow-sm 0 6px 18px rgba(0,0,0,0.30)`): Cards/tiles rest on the low-to-small shadow.
- **Hover lift** (`--shadow-md: 0 14px 34px rgba(0,0,0,0.38)`): Cards and CTAs on hover, paired with a -2 to -5px translateY.
- **Modal** (`--shadow-lg: 0 28px 62px rgba(0,0,0,0.52)`, plus `inset 0 0 0 1px rgba(0,0,0,0.3)`): The board-panel dialog inside its oak border.

### Named Rules
**The Black-Shadow-Only Rule.** Elevation shadows are always black-based. The only colored spread permitted is the chalk-yellow focus ring; everything else stays neutral.

## Shapes

Softly rounded, faintly hand-drawn boxes. Radii: `--radius-sm 9px`, `--radius 13px`, `--radius-lg 18px`, `--radius-xl 24px`, and `--radius-pill 999px` for all buttons, chips, and badges. Borders are 1–1.5px chalk hairlines (`rgba(244,241,230,.17)`/`.32`), never solid dark rules. Cards, tiles, and category cards each wear a small colored "chalk tab" as a `::before` block (a rounded rectangle at top-left in the category color) — the signature silhouette of the system. Cards and tiles are rotated a fraction of a degree (`-0.7deg` to `0.65deg` on an nth-child cycle) so they read as index cards laid down by hand rather than a rigid grid.

## Components

### Buttons
- **Shape:** Fully pill-rounded (`--radius-pill`, 999px).
- **Primary:** Chalk-yellow fill (#f5cb5c) with board-green ink (#1e3628), `--shadow-sm`, padding ~0.7–0.85rem × 1.4rem. Used once per screen (build CTA, AIS button, copy, wizard next).
- **Hover / Focus:** Fill brightens to #ffd977, shadow deepens to `--shadow-md`, `translateY(-2px)`. Focus adds the chalk-yellow 3px ring.
- **Secondary / Ghost:** Slate-panel or faint-white (`rgba(255,255,255,0.045)`) fill with dusty chalk text and a chalk hairline; hover shifts text/border to chalk-yellow. Reserved for the "quieter" path (e.g. "Vorschlagen" next to "Bauen").

### Chips
- **Style:** Faint-white fill, 1.5px chalk-hairline border, chalk-white text, pill radius. Used for wizard options, follow-up prompts, filters.
- **State:** Hover shifts border+text to chalk-yellow. `.selected` fills chalk-yellow with board-green ink. `.copied` flips to a green (#198754) confirmation.

### Cards / Containers
- **Corner Style:** 12–13px rounded, faintly hand-drawn.
- **Background:** Slate panel (#2b4d3a) with a top-lit white gradient wash; 1.5px chalk-hairline border.
- **Shadow Strategy:** `--shadow-sm` at rest, `--shadow-md` + translateY(-5px) on hover (see Elevation).
- **Signature:** A colored chalk **tab** (`::before`, ~56×12px, category color) sits above the top edge; the whole card is rotated a fraction of a degree.
- **Internal Padding:** ~1.4rem.

### Inputs / Fields
- **Style:** Dark board wells — `rgba(0,0,0,0.16)` (prompt block `0.28`) with chalk-white text and chalk-hairline border, radius `--radius`/`--radius-sm`. Selects use an inline chalk-dusty SVG dropdown caret (stroke `#c6d1c2`), never a native arrow.
- **Focus:** Border shifts to chalk-yellow with a `0 0 0 3px var(--color-primary-soft)` chalk-yellow ring. No glow beyond the ring.
- **Placeholder:** Smudged chalk (#9fb09c).

### Navigation
- Minimal: a chalk wordmark ("Prompt-Profi**.**", the dot in chalk-yellow) as the brand, back-links in chalk-yellow, and a wooden footer nav. Footer links are warm off-white on the oak tray, brightening to white on hover.

### Callouts (signature)
- Tinted board panels with a **symmetric 1px chalk-tinted border** (`color-mix` of the callout's category color against transparent) and a rounded box — explicitly **not** a colored left side-bar. Privacy notes tint chalk-green, tool hints tint chalk-teal, warnings tint a soft chalk-red, generic hints tint chalk-yellow. Body text is a light tint of the same hue.

### Footer chalk-tray (signature)
- The footer is a wooden **chalk tray**: an oak gradient (`--wood-light` → `--wood` → `--wood-dark`) with a 3px `--wood-edge` top border and an inset shadow, warm off-white text. It closes the board like the ledge of a real slate.

### Chalk icons (signature)
- Authored 24×24 line SVGs from `src/data/icons.js`: `fill: none`, `stroke: currentColor`, 2px, round caps/joins. Color is inherited from context (category chalk on task tiles, chalk-white elsewhere). Task tiles and recipe cards render these; no emoji or raster icons anywhere in the chrome.

## Do's and Don'ts

### Do:
- **Do** keep the ground a dark warm slate-green (#22402f) with the chalk-dust grain and the fixed oak frame; new full-page surfaces inherit both.
- **Do** reserve chalk-yellow (#f5cb5c) for exactly one primary action per screen, always with board-green ink (#1e3628) on it — never white-on-yellow.
- **Do** use the seven chalk-stick colors only as small signals (card tabs, index numbers, badge tints via `color-mix`).
- **Do** render every heading in Bricolage with the 1px dark text-shadow, and give body copy to Inter.
- **Do** draw new icons as 24×24 chalk line SVGs (`stroke: currentColor`, 2px, round) in the style of `src/data/icons.js`.
- **Do** build callouts as symmetric chalk-tinted rounded panels, tinting border and text with the same category hue.

### Don't:
- **Don't** introduce colored glows, neon, or accent-tinted shadows — elevation is black-based, and the only colored spread is the chalk-yellow focus ring.
- **Don't** use pure white (#fff) as text on the board; chalk ink is #f3efe4 / #f6f2e7.
- **Don't** ship serif headings or a light cream page — both are the AI defaults this world rejects.
- **Don't** use emoji or colored sticker icons in the interface chrome.
- **Don't** give callouts a single colored left side-bar; the border is a symmetric chalk hairline.
- **Don't** let a card sit perfectly square and un-tabbed — the fractional tilt and the colored chalk tab are the signature.
