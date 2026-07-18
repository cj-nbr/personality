# SEO & Accessibility

## SEO Implementation
- **Meta Descriptions**: Unique per page
- **Title Tags**: Dynamic per question/type
- **Semantic HTML**: Proper heading hierarchy
- **Skip Links**: "Skip to content" for keyboard users
- **Structured Data**: Ready for JSON-LD addition

## Accessibility Features
- **Focus Management**: Visible focus rings
- **Keyboard Navigation**: Tab through options
- **Screen Readers**: Semantic labels and roles
- **Color Contrast**: WCAG compliant text/background
- **Motion Preference**: `prefers-reduced-motion` respected

## ARIA Attributes
- `role="progressbar"` on test progress
- `aria-valuenow`, `aria-valuemin`, `aria-valuemax`
- `aria-label` for interactive elements
- `sr-only` for screen reader only text

## Keyboard Navigation
- Radio inputs accessible via Tab
- Arrow keys for radio group navigation
- Enter/Space to select options
- Focus visible indicators

## Performance Considerations
- Static generation for fast loads
- Minimal JavaScript (only where needed)
- CSS bundled and minified
- No external dependencies beyond Tailwind
- LocalStorage for offline-capable progress
