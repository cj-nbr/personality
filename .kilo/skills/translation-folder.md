# Translation Folder Structure

## Location
`src/i18n/translations/`

## Files
One JSON file per language code:
- `en.json`
- `hi.json`
- `es.json`
- `fr.json`
- `de.json`
- `zh.json`
- `zh-TW.json`
- `ja.json`
- `ar.json`
- `pt.json`
- `ru.json`

## Key Naming Convention
Keys are namespaced by section:
- `common.*` — shared UI elements (home, countries, about, search, loading, errors)
- `nav.*` — navigation labels
- `home.*` — homepage sections
- `countries.*` — countries listing page
- `country.*` — individual country page
- `category.*` — category listing page
- `calculator.*` — calculator pages
- `guide.*` — guide pages
- `faq.*` — FAQ pages
- `about.*` — about page
- `privacy.*` — privacy policy page
- `pages.*` — shared page-level labels (404, go home)
- `not_found.*` — 404 page
- `breadcrumb.*` — breadcrumb navigation
- `search.*` — search box/results
- `footer.*` — footer text
- `language.*` — language selector button labels

## Variables
- `{count}` — numeric count
- `{country}` — country name
- `{category}` — category name
- `{title}` — guide title
- `{date}` — date string

## Rules
- Keep keys identical across all language files
- Use English fallback text inside Astro elements wrapped with `data-i18n`
- For zh-TW, convert all zh.json values from Simplified to Traditional Chinese characters
- Do NOT add `data-i18n` to brand names (`TaxPortal`) or code tokens (`GST`, `TDS`, `SST`, `$`)
