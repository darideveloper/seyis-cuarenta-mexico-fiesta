## ADDED Requirements

### Requirement: Hero displays celebration title
The hero section `h1` SHALL display the text "Seyi's 4-0 Birthday Celebration", followed by the dates "September 17-20th, 2026" and the location "The Riviera Maya at Kanai Edition".

#### Scenario: Page renders hero title
- **WHEN** the page loads and the hero section renders
- **THEN** the `h1` element shows "Seyi's 4-0 Birthday Celebration", "September 17-20th, 2026", and "The Riviera Maya at Kanai Edition"

#### Scenario: Hero styling preserved
- **WHEN** the hero title renders
- **THEN** the `h1` retains its existing classes and styling (text-gold, responsive text sizes)
