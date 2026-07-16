# Project: Lori's Birthday Celebration

Landing page for booking complimentary airport transportation for Lori's Birthday Celebration. React 18 + Vite 4 + Tailwind CSS 3 + Sass.

## Tech Stack

- **React 18** with JSX (no TypeScript)
- **Vite 4** build tool, base path `/loris-birthday-celebration/`
- **Tailwind CSS 3** with custom colors: `blue` (#4F6A9E), `black` (#1a1a1a), `white` (#ffffff), `gold` (#C8B568)
- **Sass** (indented `.sass` syntax, no braces/semicolons)
- **SweetAlert2** for form submission feedback
- **PropTypes** for runtime validation
- **ESLint** (no Prettier, no Husky)

## Commands

| Command | Action |
|---------|--------|
| `npm run dev` | Start dev server (Vite HMR) |
| `npm run build` | Production build to `./dist` |
| `npm run lint` | ESLint on `src/`, zero warnings |
| `npm run preview` | Preview production build |

## Code Conventions

- **2-space indentation**, no semicolons (ASI style)
- **kebab-case** filenames: `form-text.jsx`, `transport-types.jsx`
- **Default exports** for all components
- Components in `src/components/` (reusable), sections in `src/sections/` (page sections)
- **PropTypes** at bottom of each component file
- Import order: React → internal components → API modules → Context → third-party
- **Tailwind utility classes** inline in JSX via `className`
- API layer uses native `fetch()` (no axios), base URL: `http://localhost:8000/loris`
- No global state (per-component `useState`, one `LoadContext` for spinner)

## Project Structure

```
src/
├── api/          # Data fetching (api.js, hotels.js, transports.js)
├── components/   # Reusable UI (input, select, menu, logo, etc.)
├── context/      # load.jsx - Loading spinner context
├── sections/     # Page sections (hero, form, header, footer, services)
├── App.jsx       # Root component
├── main.jsx      # Entry point
└── index.sass    # Global styles + Tailwind directives
```

## CI/CD

GitHub Actions deploys `./dist` to GitHub Pages on push to `main`.
