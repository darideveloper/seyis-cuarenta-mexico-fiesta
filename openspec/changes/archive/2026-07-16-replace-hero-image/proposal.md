## Why

The hero section currently uses a generic beach stock photo. The user wants to replace it with their own image (`van.png`) to personalize the landing page for Lori's Birthday Celebration.

## What Changes

- Replace `public/imgs/hero.jpg` with the user's `van.png` image
- Update the `<img>` tag's `alt` text in `src/sections/hero.jsx` to describe the new image
- Rebuild `dist/` with the updated asset

## Capabilities

### New Capabilities
- `hero-media`: Manages the hero section's images — asset file placement, references in components, and build output

### Modified Capabilities

<!-- No existing capabilities are being modified. -->

## Impact

- **Asset**: `public/imgs/hero.jpg` replaced (delete old, add new)
- **Component**: `src/sections/hero.jsx` — one-line `alt` text update
- **Build**: `npm run build` copies the new image to `dist/imgs/hero.jpg`
