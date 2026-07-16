## Context

The hero section renders a full-width `<img>` element from `public/imgs/hero.jpg` via `src/sections/hero.jsx`. The image is not a CSS background — it's a plain `<img>` tag with Tailwind `w-full`. Vite copies `public/` contents verbatim (no hashing). The user wants to replace the image with their local file `van.png`.

## Goals / Non-Goals

**Goals:**
- Replace `public/imgs/hero.jpg` with the user's image
- Update `alt` text to describe the new image content
- Rebuild production output

**Non-Goals:**
- No CSS or layout changes
- No new dependencies or image optimization pipeline
- No responsive images (`srcset`, `picture`, WebP)

## Decisions

| Decision | Choice | Rationale |
|----------|--------|-----------|
| Image format | Convert PNG to JPEG | `van.png` is a palette-based PNG. Serving PNG data under `.jpg` extension is incorrect. Convert to true JPEG via ImageMagick for proper format + smaller file. |
| Image location | Same path (`public/imgs/`) | Zero path changes in component; Vite handles copy automatically |
| Image replacement | Overwrite file in-place | Simplest approach — one `cp` command, no config changes |
| Alt text | Update to describe van | Current alt says "beach" which is inaccurate for the new image |

## Risks / Trade-offs

- **[Low] No image optimization beyond format**: Basic JPEG conversion with ImageMagick default quality. Mitigation: acceptable for a 1400×800 hero image; add `-quality 85` flag if file size matters.
- **[Low] No cache busting**: Files in `public/` get no hash in Vite. Mitigation: acceptable for this project (small, no aggressive caching concerns).
