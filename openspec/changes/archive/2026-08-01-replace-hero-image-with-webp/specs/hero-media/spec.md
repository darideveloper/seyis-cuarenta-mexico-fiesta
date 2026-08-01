## MODIFIED Requirements

### Requirement: Hero image asset management

The system SHALL store the hero image at `public/imgs/hero.webp` for development builds.
The system SHALL copy the hero image to `dist/imgs/hero.webp` during production builds.
The system SHALL reference the hero image via `./imgs/hero.webp` in the hero component.

#### Scenario: Image renders in development
- **WHEN** the dev server is running (`npm run dev`)
- **THEN** the hero `<img>` tag loads the image from `./imgs/hero.webp`

#### Scenario: Image copies to production build
- **WHEN** `npm run build` completes
- **THEN** the file `dist/imgs/hero.webp` exists
