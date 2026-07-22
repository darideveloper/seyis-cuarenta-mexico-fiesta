## Why

Replace current Google Fonts (Urbanist for body, Roboto Condensed for headings) with Nunito for body text and Domine for headings to achieve a warmer, more elegant typography that better matches the gold/blue color palette and the celebratory brand tone. Convert all visible titles and heading text to Title Case for consistent capitalization across the site.

## What Changes

- Swap Google Fonts import in `index.html` from Urbanist + Roboto Condensed to Nunito + Domine
- Update `font-family` declarations in `src/index.sass` body and heading selectors
- Adjust font weights if needed to match visual hierarchy
- Convert all titles, headings, section headers, nav links, and service card names to Title Case

## Capabilities

### New Capabilities

_(none — purely a design change, no new capabilities introduced)_

### Modified Capabilities

_(none — no spec-level behavior changes)_

## Impact

- **index.html**: Google Fonts `<link>` URL changes
- **src/index.sass**: `font-family` values in body and heading rules change
- **Multiple JSX files**: Hardcoded title/heading text changed to Title Case
- **src/api/menu.js**: Nav link text changed to Title Case
- **Visual**: Typography shifts from dual-sans (modern/clean) to serif+sans (elegant/friendly); headings consistently Title Cased
