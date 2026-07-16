## Context

The project is being rebranded from "Will & Ryan's Mexico Celebration — Airport Transfers" to "Lori's Birthday Celebration". The app is a React 18 + Vite 4 + Tailwind CSS 3 landing page with a transport booking form. All functionality (form submission, API calls, validation, service cards) stays identical — only presentation text, metadata, and configuration references change.

Current state: 17 files contain old branding. The rebrand is purely cosmetic/configurational with no behavioral changes.

## Goals / Non-Goals

**Goals:**
- Update all user-visible branding text to reflect "Lori's Birthday Celebration"
- Update build/deploy config to use new base path `/loris-birthday-celebration/`
- Update API endpoint path from `/will-ryan` to `/loris`
- Update package metadata and documentation
- Keep all functional code, form logic, API integration, and transport workflows untouched

**Non-Goals:**
- No new features or capabilities
- No changes to form fields, validation, or submission logic
- No changes to API response handling
- No asset/image replacement (logos, hero image, favicon kept as-is)
- No dependency changes

## Decisions

| Decision | Choice | Rationale |
|---|---|---|
| **Scope of text changes** | Keep functional text (form labels, buttons, service cards, success messages); change only event-specific branding | User explicitly requested "keep same text when possible" and "keep transport function" |
| **Footer About Us** | Rewrite for birthday event | Current text is Cancun Concierge business marketing copy, not functional text |
| **Footer contact/social** | Keep as-is | Organizer's contact info remains valid |
| **Menu "About us" link** | Keep as-is | Still points to organizer's site |
| **Copyright year** | 2023 → 2026 | User requested update to current year |
| **Asset handling** | No replacement | No new logos/assets available yet |
| **Base path** | `/will-ryan-airport-transfers/` → `/loris-birthday-celebration/` | Matches repo name and new event |
| **API path** | `/will-ryan` → `/loris` | New backend endpoint per user |

## Risks / Trade-offs

| Risk | Mitigation |
|---|---|
| **Missed branding reference** | Comprehensive grep across all files for patterns: `will`, `ryan`, `wyan`, `mexico`, `cancun concierge`, `will-ryan`, `rivieramaya` |
| **Broken API call if `/loris` endpoint differs** | Only the URL path changes; verify endpoint structure is identical to `/will-ryan` before deployment |
| **Deployment broken by base path change** | Update GitHub Pages deploy config to match new base path; verify with `npm run build` and `npm run preview` |
| **GitHub badge/URL references stale** | Fully rewrite README.md with new repo URLs, badges, screenshot path |
