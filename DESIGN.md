# Design

## Design Voice
KubeArmor surfaces should feel exact, technical, and approachable. The aesthetic is a clean blue-first system with strong typographic hierarchy, crisp iconography, and section-level contrast to keep long pages scan-friendly.

## Color Strategy
- Strategy: Restrained with occasional committed accents for campaign sections.
- Base neutrals:
  - Page background: #f9fbff
  - Section tint: #f2f6fd
  - Border: #d8e3f4
  - Heading text: #0f0f0f
  - Supporting text: #3f4e64
- Brand colors:
  - Primary: #082c74
  - Primary light: #5297fe
  - Success accent: #1f9a57
  - Warning accent: #b77213
- Gradients are allowed for backgrounds and fills only, not text.

## Typography
- Primary family: Poppins (regular, medium, semibold, bold)
- Monospace family: Roboto Mono (labels, compact counters)
- Code family: Source Code Pro
- Hierarchy:
  - Display hero: 64px desktop / 34px mobile
  - Section title: 42px desktop / 30px tablet
  - Body copy: 14px to 18px
  - Kicker labels: 11px to 12px uppercase
- Body line length should stay near 65 to 75 characters for long-form paragraphs.

## Layout and Rhythm
- Max content shell around 1120px with uneven vertical spacing between sections.
- Prefer mixed grids (2-column and 3-column) over repeated identical card rows.
- Avoid nested card stacks unless content needs explicit grouping.
- Keep action-heavy blocks near the top, explanatory blocks in the middle, trust and FAQ sections near the end.

## Components
- Buttons: rounded rectangular controls with clear primary and ghost variants.
- Kicker labels: compact uppercase labels with icon support.
- Track posters: themed visual header + challenge list + compact summary.
- Reward tiers: icon-forward cards with explicit outcomes and terms.
- FAQ accordion: single-open interaction for quick scanning.

## Iconography
- Use inline SVG icons with consistent stroke weight and rounded line caps.
- Icons should convey track type, reward condition, and workflow stage.
- Avoid decorative icon repetition that does not add meaning.

## Motion
- Use short ease-out transitions (120ms to 220ms) for hover and focus behavior.
- Avoid animating layout-heavy properties.
- Respect reduced motion preferences for persistent or looping effects.

## Accessibility
- Keep focus indicators visible on interactive controls.
- Maintain readable contrast on tinted and gradient backgrounds.
- Ensure icon-only affordances have nearby text labels.
- Preserve keyboard operability for forms and accordion interactions.
