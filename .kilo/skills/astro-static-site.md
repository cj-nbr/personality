# Astro Static Site Architecture

## Overview
TaxPortal is built as a fully static Astro site generating 119 pages at build time.

## Key Patterns

### Dynamic Routes
- `src/pages/countries/[slug]/index.astro` — country detail pages
- `src/pages/countries/[country]/[category]/index.astro` — category listing pages
- `src/pages/countries/[country]/[category]/[calculator].astro` — individual calculators
- `src/pages/countries/[country]/[category]/[guide].astro` — tax guides
- `src/pages/countries/[country]/[category]/faqs/[faq].astro` — FAQ pages

### Layouts
- `src/layouts/Layout.astro` — root layout for all pages
  - Imports translation system
  - Loads all locale dictionaries
  - Detects initial language
  - Contains skip link, global structured data, theme init script
- `src/layouts/CountryLayout.astro` — wrapper for country/category pages
  - Accepts `title`, `description`, `breadcrumbs` props
  - Renders breadcrumbs via `Breadcrumbs.astro` component
  - Provides `slot="head"` for per-page structured data

### Client-Side Scripts
- Use `<script is:inline>` for scripts that must execute in global scope
- Use `<script type="module">` for ES module imports from `/src/`
- Common pattern: IIFE wrapper `(function() { ... })();`

### Data Flow
- Server-rendered data passed via Astro props
- Client-side translation via `data-i18n` attributes + `getDict()`
- Dynamic content (country names, categories) translated via `translateDynamicContent()` which walks text nodes
