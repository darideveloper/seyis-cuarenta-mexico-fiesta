## Why

The load overlay still renders `public/imgs/spinner.gif`, a 168 KB raster whose frames have the legacy blue background (#4F6A9E) baked into every pixel. After the gold/ivory rebrand the overlay is black, so a blue rectangle now shows behind the gold ring — and a raster can never adapt to theme tokens. An inline SVG ring spinner fixes the visual clash, shrinks the payload to ~1 KB, and stays crisp on retina.

## What Changes

- Replace `<img src="./imgs/spinner.gif">` in the load overlay with an inline SVG ring spinner: faint circular track + rotating gold arc (option A "ring port" from exploration).
- Spinner colors come exclusively from brand theme tokens (`stroke-gold` etc.), so any future retheme adapts automatically.
- Delete the `public/imgs/spinner.gif` asset.
- Overlay behavior (black background, LoadContext fade-out) is preserved unchanged.

## Capabilities

### New Capabilities
- `loading-spinner`: Theme-adaptive SVG ring spinner rendered inside the load overlay.

### Modified Capabilities
<!-- None. The brand-theme spec already mandates the overlay's black background; this change only swaps the spinner content. -->

## Impact

- `src/sections/load.jsx` — swap `<img>` for new `Spinner` component
- New `src/components/spinner.jsx` (component convention: kebab-case, default export)
- Delete `public/imgs/spinner.gif`
- No changes to `src/context/load.jsx`, other sections, or the API layer
