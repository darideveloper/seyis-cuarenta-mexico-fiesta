## Context

Site uses Urbanist (body, weights 400/700) and Roboto Condensed (headings, weight 700) loaded via Google Fonts CSS in `index.html`. Typography is dual-sans-serif (modern/clean). The brand palette is blue (#4F6A9E), gold (#C8B568), black, white — a warm elegant scheme that would pair better with a serif heading and a rounded friendly body. Many headings and titles use inconsistent casing (sentence case, all-caps, or lowercase).

## Goals / Non-Goals

**Goals:**
- Replace Urbanist with Nunito (weights 400, 700) for all body text
- Replace Roboto Condensed with Domine (weight 700) for headings, `.title`, and `[class~="text"]`
- Convert all visible titles and headings to Title Case across the site
- Update affected files: `index.html`, `src/index.sass`, section JSX files, components, and `src/api/menu.js`
- Maintain visual hierarchy with equivalent weights

**Non-Goals:**
- No new font loading strategies (keep Google Fonts CSS link)
- No additional font weights beyond what's needed
- No changes to layout, spacing, or any other CSS
- No changes to form field labels, descriptive text, or dynamic content

## Decisions

| Decision | Choice | Rationale |
|---|---|---|
| Domine weight | 700 (Bold) | Matches current Roboto Condensed 700 weight for headings |
| Nunito weights | 400 (Regular), 700 (Bold) | Matches current Urbanist 400/700 for body + bold emphasis |
| Loading method | Google Fonts CSS `<link>` | Keep existing pattern, zero infrastructure change |
| Fallback stack | `sans-serif` for body, `serif` for headings | Same fallback strategy as current code |
| Title Case scope | Section headings, nav links, service cards, hero headline | Not form labels, descriptions, contact info, or dynamic text |
| Capitalization rule | Capitalize first letter of each major word | Consistent with Title Case convention |

## Risks / Trade-offs

- [Low] Domine at 700 on small screens may need more horizontal space than Roboto Condensed (which is condensed). Headings could wrap differently. Mitigation: no change to `font-size` values, just let text reflow naturally.
- [Low] Nunito rounded terminals give a different texture from Urbanist. This is intentional but may subtly affect perceived spacing. Mitigation: visually verify after swap.
- [Low] Google Fonts CSS URL change is a single-line edit — trivial to rollback.
- [Low] Title Case changes are purely textual — easy to revert per-item if any doesn't look right.
