## Context

The site was built with a blue (#4F6A9E) primary surface color, muted gold (#C8B568) accent, and Domine/Nunito fonts. The event's official artwork (itinerary, updated hero image) uses warm ivory, metallic amber gold, near-black ribbons, a Didone display serif, a formal script, and letterspaced caps. Tokens live in `tailwind.config.js` and `src/index.sass`; fonts load via Google Fonts `<link>` in `index.html`. Blue is consumed in ~8 files (header, footer, load overlay, form submit, input/select/transport-type borders).

## Goals / Non-Goals

**Goals:**
- Align site palette and typography with the official event artwork.
- Keep token names stable where possible so existing classes (`text-gold`, `bg-black`) retune automatically.
- Eliminate every `blue` usage with a deliberate themed replacement.

**Non-Goals:**
- No layout/structure changes to sections or components.
- No self-hosting of fonts or build-pipeline changes.
- No changes to hero title text or hero image handling (covered by existing specs).

## Decisions

1. **Token strategy: retune existing names, add new stops, drop blue.**
   Keep `black` (#1a1a1a), `white`, retune `gold` to #C9A24B; add `cream` #F9F5ED, `gold-light` #E8D5A4, `gold-dark` #8E6A23; remove `blue`.
   Rationale: `text-gold`/`bg-black` classes (including those mandated by the hero-title spec) pick up new values with zero JSX churn. Alternatives: new semantic names (`brand-gold`) — rejected, forces edits everywhere for no gain.

2. **Font pairing: Playfair Display + Montserrat + Great Vibes.**
   - `display`: Playfair Display (700/900) for h1-h6 and caps headers — closest web-safe Didone to the "SEYI @ 40" lettering.
   - `sans` (body): Montserrat (400/500/600/700) for body copy and letterspaced labels.
   - `script`: Great Vibes (400) for accent lines, applied via explicit class where wanted.
   Loaded via one Google Fonts `<link>` with existing preconnects, `display=swap` (matches current approach). Alternatives considered: Bodoni Moda (closer to Didot but heavier/variable-weight quirks), Alex Brush for script (heavier strokes) — kept as fallback if client finds Great Vibes too thin.

3. **Surface remapping: blue surfaces become black-with-gold; page background becomes cream.**
   - `header.jsx`, `footer.jsx`, `load.jsx`: `bg-blue` → `bg-black`, text/accents gold.
   - `form.jsx` submit: `bg-blue text-gold` → `bg-black text-gold border-gold`, hover inverts to gold bg / black text.
   - `input.jsx`, `select.jsx`, `transport-type.jsx`: `border-blue`/`bg-blue` → gold equivalents.
   - `body` background → cream in `index.sass`; scrollbar stays gold.
   Rationale: the artwork's ribbons/banners are black with gold type; cream headers would lose contrast. Alternative (cream surfaces) rejected.

4. **Sass variables mirror tailwind tokens.** Update `$blue` removal and `$gold` value in `src/index.sass` so sass-side usages (scrollbar) stay consistent; add `$cream` if needed.

## Risks / Trade-offs

- [Missed `blue` class survives] → grep `blue` across `src/` before finishing; `pnpm lint` + `pnpm build` as gate.
- [Great Vibes too thin vs artwork script] → swap to Alex Brush is a one-line font-family change; token name `script` isolates it.
- [Webfont FOUT/layout shift] → accepted; `display=swap` matches existing behavior.
- [Cream background reduces contrast on white cards] → white surfaces remain for cards/inputs; cream only for page background.
