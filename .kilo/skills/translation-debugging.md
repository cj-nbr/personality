# Translation Debugging

## When Only 2-3 Words Translate

### Checklist
1. **Check for `data-i18n` attribute** — Is the element wrapped with `data-i18n="section.key"`?
2. **Check key existence** — Does the key exist in the active language JSON file (`src/i18n/translations/{lang}.json`)?
3. **Check locale loading** — Is the dictionary being loaded in `Layout.astro` and passed to `loadLocales()`?
4. **Check language application** — Is `setLang()` being called after user selects language?
5. **Check localStorage** — Is `lang` being persisted and read on page load?

### Inspection Commands
```bash
# Count data-i18n attributes in built HTML
node -e "const fs = require('fs'); const html = fs.readFileSync('dist/index.html', 'utf8'); const matches = html.match(/data-i18n/g); console.log(matches ? matches.length : 0);"

# Find missing translation keys
node -e "const fs = require('fs'); const html = fs.readFileSync('dist/index.html', 'utf8'); const keys = [...html.matchAll(/data-i18n=\"([^\"]+)\"/g)].map(m => m[1]); const dict = JSON.parse(fs.readFileSync('src/i18n/translations/en.json')); const missing = keys.filter(k => !dict[k]); console.log('Missing:', missing);"

# Verify bundled JS contains translations
grep -o '"home.taxportal_home":.*?' dist/_astro/Layout.astro_*lang*.js | head -1
```

### Common Mistakes
1. **Missing `data-i18n` on static text** — Add `data-i18n="section.key"` with English fallback
2. **Key exists but value is empty** — Ensure JSON value is not empty string
3. **Wrong language file loaded** — Check import paths in Layout.astro
4. **Language not reloading** — Ensure Header calls `setLang()` + `window.location.reload()`
5. **Dynamic text not translated** — Add to `translateDynamicContent()` maps in `client.ts`

### Adding Translation to New Pages
1. Add `data-i18n` to all static text nodes in the page
2. Create unique descriptive keys
3. Add key/value to ALL 11 translation JSON files
4. For dynamic content (country names, etc.), expand the maps in `client.ts`
