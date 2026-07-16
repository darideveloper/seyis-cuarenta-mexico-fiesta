## Why

The project is being repurposed from "Will & Ryan's Mexico Celebration — Airport Transfers" to "Lori's Birthday Celebration". The app's functionality (airport transport booking for event attendees) stays the same, but all branding, titles, metadata, and config references must reflect the new event.

## What Changes

- **Hero heading**: `WILL & RYAN'S MEXICO CELEBRATION` → `LORI'S BIRTHDAY CELEBRATION`
- **Page title**: `<title>` tag in `index.html` updated to `Lori's Birthday Celebration`
- **Footer**: "About Us" paragraph rewritten for the birthday event; copyright year updated 2023 → 2026
- **Logo/image alt text**: Updated to neutral/"event" references
- **Build config**: Vite `base` path → `/loris-birthday-celebration/`
- **API config**: Backend URL path → `/loris`
- **Package metadata**: `package.json` / `package-lock.json` name fields updated
- **Documentation**: `README.md` and `AGENTS.md` rewritten for the new event
- **No functional changes**: Form labels, button text, service cards, validation, API logic, transport workflows remain identical

## Capabilities

### New Capabilities

- None — this is a rebranding change, no new capabilities

### Modified Capabilities

- None — no spec-level requirement changes, only presentation and configuration

## Impact

### Files Modified (text/content changes)

| File | Change |
|---|---|
| `index.html` | `<title>` tag (fix trailing slash) |
| `src/sections/hero.jsx` | H1 heading, image alt text |
| `src/sections/header.jsx` | Logo alt text |
| `src/sections/footer.jsx` | "About Us" paragraph, copyright year |
| `src/sections/load.jsx` | Spinner alt text |
| `vite.config.js` | `base` path |
| `package.json` | `name` field |
| `package-lock.json` | `name` field (2 occurrences) |
| `src/api/api.js` | API base URL path (active + commented lines) |
| `README.md` | Full rewrite |
| `AGENTS.md` | Project name, description, base path, API URL |

### Files Unchanged (assets)

- `public/imgs/page-logo-trans.png` — kept as-is (no replacement logo yet)
- `public/imgs/favicon.png` — kept as-is
- `public/imgs/hero.jpg` — kept as-is
- `public/imgs/spinner.gif` — kept as-is

### No new dependencies added
