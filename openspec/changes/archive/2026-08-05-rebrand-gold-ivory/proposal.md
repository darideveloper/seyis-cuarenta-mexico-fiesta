## Why

The event's official branding (itinerary artwork, updated hero image) is a formal luxury aesthetic — warm ivory, metallic gold, near-black — while the site still uses the old blue-based palette (#4F6A9E) with Domine/Nunito fonts. The site now visually contradicts the event materials it is meant to support.

## What Changes

- **BREAKING** Remove the `blue` color token and all `blue`-based classes (header, footer, load overlay, form controls, submit button).
- Add an ivory/cream page background token and shift the site off pure white surfaces.
- Retune `gold` from muted olive (#C8B568) to warm metallic amber, and add light/dark gold stops for gradient/depth usage.
- Replace the type system: Domine → Playfair Display (display/titles), Nunito → Montserrat (body/letterspaced labels), plus Great Vibes for script accent lines.
- Restyle blue surfaces to the new theme: header/footer/load overlay become black or cream with gold accents; form controls get gold borders.

## Capabilities

### New Capabilities
- `brand-theme`: Design tokens (color palette + font families) and their application rules across the site, matching the official event artwork.

### Modified Capabilities
<!-- None. Existing specs (hero-title, hero-media) reference token names (e.g. text-gold), not hex values, so retuning token values does not change their requirements. -->

## Impact

- `tailwind.config.js` — colors and fontFamily extensions
- `index.html` — Google Fonts links (remove Domine/Nunito, add Playfair Display, Montserrat, Great Vibes)
- `src/index.sass` — `$` variables and base font-family rules
- Blue consumers (~8 files): `src/sections/header.jsx`, `footer.jsx`, `load.jsx`, `form.jsx`, `src/components/input.jsx`, `select.jsx`, `transport-type.jsx`
- No API, state, or routing changes
