## Context

The hero section (`src/sections/hero.jsx`) renders the page's primary heading as an `h1` with the text "Lori's Birthday Celebration". The event is being rebranded around a 60th birthday with a Mexico theme, and the title should read "Lori's Sesenta Mexico Fiesta". No other content, styles, or sections are affected.

## Goals / Non-Goals

**Goals:**
- Replace the hero `h1` text with the new title

**Non-Goals:**
- No changes to the hero `h2`, styles, layout, images, or page `<title>`
- No changes to other sections or branding

## Decisions

- **Direct text replacement in JSX**: The `h1` is a hardcoded string in `src/sections/hero.jsx`. Update it in place with JSX entity encoding (`Lori&apos;s`), matching the existing file convention. No i18n, config, or state is warranted for a static heading.
- **Single-file change**: Only `src/sections/hero.jsx` requires editing; no build config, styles, or API changes.

## Risks / Trade-offs

- [Heading text mismatch with other branding] → Out of scope by user decision; only the `h1` changes per requirement.
