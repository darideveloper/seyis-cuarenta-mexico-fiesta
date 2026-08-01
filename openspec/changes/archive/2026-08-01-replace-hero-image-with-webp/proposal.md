## Why

The hero section currently loads a JPEG photo (`public/imgs/hero.jpg`). The user provided a WebP version of the same van photo with better compression and quality. Replacing the asset with WebP reduces payload size while keeping visual fidelity, and the spec's `hero-media` requirement must be updated to match the new file extension.

## What Changes

- Add `public/imgs/hero.webp` (the user's WebP image)
- Update the hero `<img>` tag in `src/sections/hero.jsx` to reference `./imgs/hero.webp` instead of `./imgs/hero.jpg`
- Update the `hero-media` capability spec: file extension in asset storage, build copy, and component reference requirements changes from `.jpg` to `.webp`

## Capabilities

### New Capabilities

<!-- No new capabilities are being introduced. -->

### Modified Capabilities

- `hero-media`: Update the hero image asset management requirement — the hero image is now stored at `public/imgs/hero.webp`, copied to `dist/imgs/hero.webp` during builds, and referenced via `./imgs/hero.webp` in the hero component. The `.jpg` extension is no longer used.

## Impact

- **Asset**: `public/imgs/hero.webp` added; `public/imgs/hero.jpg` no longer referenced (left in place)
- **Component**: `src/sections/hero.jsx` — one-line `src` update
- **Build**: `npm run build` copies the WebP asset to `dist/imgs/hero.webp`
- **Spec**: `openspec/specs/hero-media/spec.md` requirements updated to `.webp`
