## ADDED Requirements

### Requirement: SVG ring spinner
The load overlay SHALL render an inline SVG spinner composed of a faint circular track and a rotating gold arc. The spinner SHALL use only brand theme color tokens for its strokes (no hardcoded hex values) and SHALL rotate using the Tailwind `animate-spin` utility.

#### Scenario: Spinner renders centered in overlay
- **WHEN** the load overlay renders
- **THEN** an inline SVG shows a gold arc rotating over a faint circular track, centered in the overlay at the same size as the previous spinner image (w-40)

#### Scenario: Spinner colors come from theme tokens
- **WHEN** the spinner SVG markup is inspected
- **THEN** its stroke colors use theme token utilities (e.g. `stroke-gold`) and contain no hex color literals

### Requirement: Raster spinner removed
The system SHALL NOT reference `spinner.gif` anywhere in `src/`, and the file SHALL be deleted from `public/imgs/`.

#### Scenario: No GIF reference or asset remains
- **WHEN** the source tree and `public/imgs/` are searched for `spinner.gif`
- **THEN** no references and no file exist

### Requirement: Overlay behavior preserved
The load overlay SHALL retain its black background and the existing LoadContext-driven fade-out (opacity and z-index class toggling on `.load`). Replacing the spinner SHALL NOT change this behavior.

#### Scenario: Overlay fades out after load
- **WHEN** the page finishes loading (~1 second after mount)
- **THEN** the overlay fades out exactly as before, with the spinner visible until then
