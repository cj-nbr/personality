# TaxPortal Development Skills

This folder contains skills, patterns, and instructions used while building and maintaining the TaxPortal international tax information website.

## Skills

### 1. Astro Static Site Architecture
- File: `astro-static-site.md`
- Static routing with dynamic segments (`[slug]`, `[country]`, `[category]`, `[calculator]`, `[guide]`, `[faq]`)
- Layout composition with `Layout.astro` and `CountryLayout.astro`
- Client-side reactivity using inline `<script is:inline>` for global behavior
- Module scripts for per-page interactions

### 2. Internationalization (i18n)
- File: `i18n-system.md`
- Client-side translation with JSON dictionaries loaded at runtime
- `data-i18n`, `data-i18n-vars`, `data-i18n-placeholder`, `data-i18n-title` attributes
- Dynamic content translation for country names, categories, currencies, continents
- Language detection: localStorage → browser language → fallback to English
- `setLang()`, `getLang()`, `getDict()`, `loadLocales()`, `detectLanguage()`
- `lang-change` and `i18n-updated` custom events
- RTL support for Arabic (`dir="rtl"`)

### 3. Translation Folder Structure
- File: `translation-folder.md`
- Centralized translations in `src/i18n/translations/`
- One JSON file per language code (`en.json`, `hi.json`, `es.json`, `fr.json`, `de.json`, `zh.json`, `zh-TW.json`, `ja.json`, `ar.json`, `pt.json`, `ru.json`)
- Keys namespaced by section: `home.*`, `country.*`, `category.*`, `calculator.*`, `guide.*`, `faq.*`, `about.*`, `privacy.*`, `pages.*`, `breadcrumb.*`, `search.*`, `not_found.*`
- Placeholder variables: `{count}`, `{country}`, `{category}`, `{title}`, `{date}`

### 4. Dark Mode
- File: `dark-mode.md`
- Tailwind `dark:` variant classes throughout
- CSS variables: `--color-primary`, `--color-on-primary`, `--color-canvas`, `--color-ink`, `--color-body`, `--color-muted`, `--color-hairline`
- Body classes: `dark:bg-primary dark:text-on-primary`
- Theme persistence in `localStorage` (`theme` key)
- `prefers-color-scheme: dark` media query for initial state
- `color-scheme="light dark"` attribute on `<html>`

### 5. Language Selector UX
- File: `language-selector.md`
- Dropdown menu triggered by `#lang-btn`
- Close on outside click using `document.addEventListener('click', ...)`
- **Critical:** Menu must use `mousedown` + `click` `stopPropagation()` to prevent closing when interacting with inputs inside
- Language search inside the menu filters available languages
- Country search integration: searching a country name filters language options to that country's primary language

### 6. SEO & Structured Data
- File: `seo.md`
- `@astrojs/sitemap` integration for auto-generated sitemaps
- `public/robots.txt` referencing sitemap-index.xml
- JSON-LD structured data:
  - `Organization` + `WebSite` in `Layout.astro`
  - `BreadcrumbList` in `CountryLayout.astro`
  - `FAQPage` in FAQ pages
- `hreflang` tags for all supported languages
- `canonical` URLs
- Open Graph (`og:title`, `og:description`, `og:image`) and Twitter Card meta tags
- `translate="no"` on brand names

### 7. Accessibility
- File: `accessibility.md`
- Skip link: `<a href="#main-content" class="skip-link">Skip to main content</a>`
- `aria-label` on icon-only buttons (theme toggle, language selector, mobile menu)
- `aria-expanded` for dropdown/menu state
- `role="menu"` on language dropdown
- `aria-hidden="true"` on decorative flag emojis and SVG icons
- Focus-visible outlines via CSS `:focus-visible`
- `touch-action: manipulation` on interactive elements
- Clickable form labels

### 8. PWA & Manifest
- File: `pwa.md`
- `public/manifest.json` for installability
- `favicon.svg` referenced in `<link rel="icon">`
- `<link rel="manifest" href="/manifest.json">`

### 9. Build & Type Safety
- File: `build.md`
- `npm run build` → 119 static pages
- `npm run typecheck` → `tsc --noEmit` via Astro sync
- Type-safe `LanguageCode` union: `"en" | "hi" | "es" | "fr" | "de" | "zh" | "zh-TW" | "ja" | "ar" | "pt" | "ru"`
- `LocaleBundle` mapped type for locale dictionaries

### 10. Debugging Translation Issues
- File: `translation-debugging.md`
- When few words translate, check:
  1. Is `data-i18n` present on the element?
  2. Does the key exist in the active language JSON file?
  3. Did `loadLocales()` receive the correct dictionary?
  4. Is `setLang()` being called after language selection?
  5. Is the page reloading/persisting language via `localStorage`?
- Check `dist/_astro/Layout.astro_*lang*.js` for bundled translation strings
- Verify `dictCache` being populated by inspecting `getDict()` return value

## Task Instructions

### Adding a New Language
1. Create `src/i18n/translations/{code}.json` by copying `en.json` and translating all values
2. Update `LanguageCode` type in `src/i18n.ts` and `src/i18n/client.ts`
3. Add `{code}` to all validation arrays: `isValidLang()`, `getBrowserLanguage()`, `loadLocales()`, `detectLanguage()`
4. Import and register in `src/layouts/Layout.astro` (both server and client modules)
5. Add `{labelMap[code]}` in `Header.astro` language button label map
6. Add button in `Header.astro` language selector menu
7. Add `<link rel="alternate" hreflang="{code}" ...>` in `Layout.astro` head
8. Add `data-i18n="language.{name}"` key to ALL translation files
9. Run `npm run build` and verify

### Fixing Translation Coverage
1. Identify untranslated text on the page
2. Add `data-i18n="section.key_name"` with English fallback text
3. Add the new key/value to ALL 11 translation JSON files
4. For dynamic content (country names, categories, currencies), add to `translateDynamicContent()` maps in `client.ts`

### Fixing Dark Mode Visibility
1. Ensure text elements have `dark:text-*` classes
2. Ensure background elements have `dark:bg-*` classes
3. Check contrast: `text-ink` on `dark:bg-primary`, `text-on-primary` on `dark:bg-primary`, `text-muted` for secondary text
4. Avoid `text-primary` without dark variant on dark backgrounds

### Fixing Language Selector Click Issues
1. Ensure `#lang-menu` has `mousedown` and `click` `stopPropagation()`
2. Ensure document click handler checks `!langMenu.contains(e.target) && e.target !== langBtn`
3. Ensure `langSearch` input receives focus before menu closes

### Adding Country-to-Language Mapping
1. Add mapping in `src/i18n/client.ts` `countryToLanguage` object
2. Dispatch `country-search` custom event from country search input
3. Listen for `country-search` in `Header.astro` and filter language buttons
