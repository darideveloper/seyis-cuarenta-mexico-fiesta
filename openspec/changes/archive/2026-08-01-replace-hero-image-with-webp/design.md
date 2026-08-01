## Context

The hero section renders a full-width `<img>` element from `public/imgs/hero.jpg` via `src/sections/hero.jsx`. Vite copies `public/` contents verbatim into `dist/` (no hashing or transformation). The user supplied a WebP version of the same van photo, and the asset swap has already been applied and verified in the working tree.

## Goals / Non-Goals

**Goals:**
- Serve the hero image as WebP from `public/imgs/hero.webp`
- Reference the WebP file from the hero `<img>` tag
- Keep the `hero-media` capability spec in sync with the actual file extension

**Non-Goals:**
- Removing the unused `public/imgs/hero.jpg` (out of scope; no behavior depends on its deletion)
- Adding `webp`/`avif` responsive `<picture>` sources, compression pipelines, or build-time transforms

## Decisions

- **Use a plain `<img src>` swap, no `<picture>` element**: The site has a single hero image and no need for format fallbacks. Swapping the `src` is the minimal change satisfying the requirement. Alternative (multiple `<source>` elements) adds complexity without a current requirement for legacy-browser fallbacks.
- **Keep WebP file as a separate asset (`hero.webp`) rather than overwriting `hero.jpg`**: Preserves the original JPEG for rollback and avoids ambiguity in the spec; the component reference is the single source of truth for which file is served. Alternative (overwriting `hero.jpg` in place) was rejected because the spec explicitly tracks the `.webp` extension.
- **Update the `hero-media` spec requirements to `.webp`**: The spec is the contract; it currently hard-codes `.jpg` in asset storage, build copy, and component reference. Keeping it stale would create spec/code drift.

## Risks / Trade-offs

- **Legacy browsers without WebP support** → Modern browsers all support WebP since ~2020; this site targets current browsers. No mitigation needed.
- **Stale `hero.jpg` remaining on disk** → Harmless dead asset; can be removed in a follow-up if desired.
- **Spec drift if archive is skipped** → Mitigated by archiving this change so the delta is merged into `openspec/specs/hero-media/spec.md`.
