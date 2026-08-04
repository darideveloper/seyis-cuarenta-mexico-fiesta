## ADDED Requirements

### Requirement: Brand color tokens
The Tailwind theme SHALL expose exactly these brand colors: `cream` #F9F5ED, `black` #1a1a1a, `white` #ffffff, `gold` #C9A24B, `gold-light` #E8D5A4, `gold-dark` #8E6A23. The theme SHALL NOT expose a `blue` color token.

#### Scenario: Tokens available to classes
- **WHEN** a component uses `bg-cream`, `text-gold`, `border-gold-dark`, or `bg-gold-light`
- **THEN** the class resolves to the hex values defined above in the built CSS

#### Scenario: Blue token removed
- **WHEN** the source tree (`src/`) is searched for `blue` class usage or the `$blue` variable
- **THEN** no matches exist

### Requirement: Brand typography tokens
The Tailwind theme SHALL define font families: `display` = "Playfair Display" (serif), `sans` = "Montserrat" (sans-serif), `script` = "Great Vibes" (cursive). `index.html` SHALL load these three families from Google Fonts with preconnect hints and `display=swap`, and SHALL NOT load Domine or Nunito.

#### Scenario: Font links updated
- **WHEN** `index.html` is inspected
- **THEN** the Google Fonts stylesheet request includes Playfair Display, Montserrat, and Great Vibes, and does not include Domine or Nunito

#### Scenario: Font utility classes resolve
- **WHEN** a component uses `font-display`, `font-sans`, or `font-script`
- **THEN** the rendered element uses the corresponding family

### Requirement: Base page theme
The global stylesheet SHALL set the page background to cream and the base body font to Montserrat. Headings (h1-h6) SHALL use Playfair Display. The existing gold scrollbar styling SHALL be preserved.

#### Scenario: Page renders with ivory base
- **WHEN** the app loads
- **THEN** the document background is cream (#F9F5ED) and body text renders in Montserrat

#### Scenario: Headings use display serif
- **WHEN** any h1-h6 renders
- **THEN** it uses Playfair Display

### Requirement: Themed surfaces replace blue surfaces
Sections and controls that previously used blue SHALL use the black/gold theme: header, footer, and load overlay SHALL have black backgrounds with gold or cream foreground accents; form inputs and selects SHALL use gold borders; the form submit button SHALL use a black background with gold text and gold border, inverting to gold background with black text on hover.

#### Scenario: Header, footer, and load overlay themed
- **WHEN** the header, footer, and load overlay render
- **THEN** each has a black background and no blue classes

#### Scenario: Form controls themed
- **WHEN** the booking form renders
- **THEN** inputs and selects show gold borders, and the submit button shows black background with gold text

#### Scenario: Submit hover inversion
- **WHEN** the user hovers the submit button
- **THEN** the button shows gold background with black text
