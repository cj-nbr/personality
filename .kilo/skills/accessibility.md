# Accessibility

## Skip Link
```astro
<a href="#main-content" class="skip-link">Skip to main content</a>
```
```css
.skip-link {
  position: absolute;
  top: -40px;
  left: 0;
  background: var(--color-primary);
  color: var(--color-on-primary);
  padding: 8px;
  z-index: 100;
}
.skip-link:focus {
  top: 0;
}
```

## Landmark Regions
- `<header>` for site header
- `<nav aria-label="Main navigation">` for navigation
- `<main id="main-content">` for main content
- `<footer>` for footer

## ARIA Attributes
- `aria-label` on icon-only buttons
- `aria-expanded` on dropdown toggles
- `aria-haspopup="true"` on toggle buttons
- `role="menu"` on dropdown containers
- `aria-hidden="true"` on decorative elements (flag emojis, SVG icons)

## Focus Management
- `:focus-visible` CSS for keyboard focus indicators
- `touch-action: manipulation` on interactive elements
- Focused elements should have visible outlines

## Color Contrast
- Light mode: `text-ink` (#1f2937) on `bg-canvas` (#f9fafb) — passes WCAG AA
- Dark mode: `text-on-primary` (#f9fafb) on `bg-primary` (#0f172a) — passes WCAG AA
- Muted text: `text-muted` on both backgrounds — ensure sufficient contrast

## Interactive Elements
- All form inputs have associated labels (or `aria-label`)
- Buttons have accessible names
- Language selector search input has `aria-label="Search languages"`
