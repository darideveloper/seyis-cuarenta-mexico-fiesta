## 1. Spinner Component

- [x] 1.1 Create `src/components/spinner.jsx`: default-export SVG (viewBox 0 0 100 100) with track circle (`stroke-gold opacity-20`) and arc circle (`stroke-gold`, round linecap, `stroke-dasharray="198 66"`, fill none), `animate-spin w-40` on the svg, no hex literals
- [x] 1.2 Update `src/sections/load.jsx`: import Spinner and replace the `<img src="./imgs/spinner.gif">` element, keeping the overlay's `load` class and `bg-black` untouched

## 2. Cleanup

- [x] 2.1 Delete `public/imgs/spinner.gif`

## 3. Verification

- [x] 3.1 Grep `src/` for `spinner.gif` — zero matches
- [x] 3.2 Run `pnpm lint` — zero warnings
- [x] 3.3 Run `pnpm build` — succeeds and `dist/` contains no spinner.gif
