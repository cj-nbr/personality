# Translation System

## Core Files
- `src/i18n.ts` — server-side i18n module (loadLocales, setLang, getLang, getDict, detectLanguage, t)
- `src/i18n/client.ts` — client-side i18n (applyToDocument, translateDynamicContent, onChange, detectLanguage, setLang)
- `src/i18n/translations/` — one JSON file per language code

## Usage

### Static Text
Wrap text nodes with `data-i18n`:
```astro
<span data-i18n="home.taxportal_home">TaxPortal</span>
```

### Dynamic Text with Variables
```astro
<p data-i18n="home.comprehensive_tax_info" data-i18n-vars={JSON.stringify({ count: countries.length })}>
  Comprehensive tax information for {countries.length} countries
</p>
```

### Placeholders
```astro
<input data-i18n-placeholder="common.search_placeholder" placeholder="Search..." />
```

### Titles
```astro
<button data-i18n-title="common.select_language" title="Select language">EN</button>
```

## Language Detection Order
1. `localStorage.getItem('lang')` — user preference
2. `navigator.languages[0] || navigator.language` — browser language
3. Fallback to `'en'`

## Events
- `lang-change` — dispatched from Header when user selects a language; re-applies translations
- `i18n-updated` — dispatched after `lang-change` handler completes translations
- `country-search` — custom event from countries page search; used by language selector to filter languages

## Dynamic Content Translation
`translateDynamicContent()` walks all text nodes and replaces:
- Country names via `countryNames` map
- Category names via `categoryNames` map
- Continent names via `continentNames` map
- Currency codes via `currencyNames` map
- Tax authority names via `taxAuthorityNames` map

## RTL Support
Arabic sets `dir="rtl"` on `<html>` via `setLang()`.
