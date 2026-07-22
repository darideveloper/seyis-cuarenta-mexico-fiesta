## 1. Update Google Fonts Import

- [x] 1.1 Replace Google Fonts `<link>` in `index.html` from `Urbanist + Roboto Condensed` to `Nunito + Domine` with correct weights
- [x] 1.2 Verify the URL loads correctly (no 404s, fonts are served)

## 2. Update CSS Declarations

- [x] 2.1 Replace `Urbanist` with `Nunito` in `src/index.sass` body `font-family`
- [x] 2.2 Replace `Roboto Condensed` with `Domine` in `src/index.sass` heading selectors `font-family`, and change fallback from `sans-serif` to `serif`

## 3. Convert Titles to Title Case

- [x] 3.1 Convert hero section titles (`hero.jsx`): h1, h2 text to Title Case
- [x] 3.2 Convert section headings (`services.jsx`, `footer.jsx`) to Title Case
- [x] 3.3 Convert service card names (`service-cards.jsx`) to Title Case
- [x] 3.4 Convert nav links (`menu.js`) to Title Case

## 4. Verify Font Swap

- [x] 4.1 Run `pnpm build` to confirm no build errors
- [x] 4.2 Run `pnpm lint` to confirm zero warnings
- [x] 4.3 Visually verify heading and body text render with new fonts

## 5. Verify Title Case

- [x] 5.1 Run `pnpm build` to confirm no build errors
- [x] 5.2 Run `pnpm lint` to confirm zero warnings
- [x] 5.3 Visually verify all titles render in Title Case
