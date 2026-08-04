## Context

`src/sections/load.jsx` renders a fixed full-screen overlay (`bg-black` after the rebrand) containing `<img src="./imgs/spinner.gif" className="w-40">`. The GIF's frames carry the old blue background, clashing with the new theme. `src/context/load.jsx` toggles `opacity-0`/`!-z-10` classes on `.load` one second after mount; that behavior is untouchable scope. Tailwind 3 provides `animate-spin` by default and generates `stroke-<color>` utilities from the brand tokens in `tailwind.config.js`.

## Goals / Non-Goals

**Goals:**
- Visual continuity with the old ring spinner (gold arc over a faint track, same ~w-40 size, similar speed).
- Colors driven purely by theme tokens so the spinner adapts to any retheme.
- Remove the raster asset and its baked-in blue.

**Non-Goals:**
- No logo knot draw-on animation (option B) or wordmark on the load screen.
- No changes to overlay timing, fade, or LoadContext logic.

## Decisions

1. **Ring port (option A): single inline SVG with two circles.**
   Track circle: `stroke-gold` at low opacity (e.g. `opacity-20`). Arc circle: `stroke-gold`, `stroke-linecap="round"`, `stroke-dasharray` ≈ 75% of circumference (r=42 → C≈264 → `198 66`), `fill="none"`. Rotation via Tailwind `animate-spin` on the `<svg>`.
   Rationale: drop-in visual equivalent of the GIF, no custom keyframes, tokens drive color. Alternatives rejected: knot draw-on (path authoring effort), CSS border spinner (brief asks for SVG).

2. **New component `src/components/spinner.jsx`.**
   Default export, no props, fixed `w-40` class matching the old image. Follows project component conventions (kebab-case file, component in `components/`).

3. **Token-only coloring.** No hex literals or CSS variables in the SVG; use Tailwind stroke utilities so the brand-theme tokens are the single source of truth.

4. **Delete `public/imgs/spinner.gif`** once unreferenced, to remove dead weight from `dist`.

## Risks / Trade-offs

- [Arc proportion/cap rounding differs slightly from GIF's faded tail] → acceptable; dasharray tunable in one place after a visual check.
- [animate-spin is 1s linear, GIF speed similar] → no perceptual regression expected.
- [LoadContext queries `.load` by class] → spinner must keep the overlay's existing `load` class untouched (it does; only the child swaps).
