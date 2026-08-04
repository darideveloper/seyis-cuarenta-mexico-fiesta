## 1. Theme Tokens & Fonts

- [x] 1.1 Update `tailwind.config.js` colors: retune `gold` to #C9A24B, add `cream` #F9F5ED, `gold-light` #E8D5A4, `gold-dark` #8E6A23, remove `blue`
- [x] 1.2 Add `fontFamily` to `tailwind.config.js`: `display` (Playfair Display), `sans` (Montserrat), `script` (Great Vibes)
- [x] 1.3 Replace Google Fonts `<link>` in `index.html`: remove Domine/Nunito, add Playfair Display (700;900), Montserrat (400;500;600;700), Great Vibes (400) with `display=swap`
- [x] 1.4 Update `src/index.sass`: remove `$blue`, set `$gold: #C9A24B`, add `$cream: #F9F5ED`, set body background cream and body font Montserrat, headings Playfair Display

## 2. Restyle Blue Surfaces

- [x] 2.1 `src/sections/header.jsx`: `bg-blue` → `bg-black`, adjust child text to gold/cream as needed
- [x] 2.2 `src/sections/footer.jsx`: `bg-blue`/`fill-blue`/`text-blue` → black background with gold accents
- [x] 2.3 `src/sections/load.jsx`: `bg-blue` overlay → `bg-black`
- [x] 2.4 `src/sections/form.jsx`: submit button → `bg-black text-gold border-gold`, hover `bg-gold text-black`
- [x] 2.5 `src/components/input.jsx` and `select.jsx`: `border-blue` → `border-gold`
- [x] 2.6 `src/components/transport-type.jsx`: `border-blue`/`bg-blue` → gold equivalents

## 3. Verification

- [x] 3.1 Grep `src/` for `blue` and `$blue` — zero matches
- [x] 3.2 Run `pnpm lint` — zero warnings
- [x] 3.3 Run `pnpm build` — succeeds; visually check dev server renders cream background, black header/footer, gold accents
