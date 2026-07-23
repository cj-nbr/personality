# Build & Type Safety

## Commands
```bash
npm run build      # Build 119 static pages to dist/
npm run typecheck  # Run tsc --noEmit via astro sync
```

## Build Output
- Static HTML files in `dist/`
- JS bundles in `dist/_astro/`
- CSS bundles in `dist/_astro/`
- Sitemap in `dist/sitemap-index.xml`
- All page routes pre-rendered at build time

## Page Count Verification
Build output shows: `✓ 119 page(s) built in X.XXs`

## Type Safety
- `npm run typecheck` passes cleanly
- TypeScript types for translations: `TranslationDict`, `LocaleBundle`, `LanguageCode`
- Type-safe locale loading via mapped types

## Common Build Issues
1. **Duplicate keys in locale JSON** → TS1117 error: remove duplicates
2. **Mapped type syntax** → Use `Record<LanguageCode, TranslationDict>` not mapped types with `in`
3. **Missing import** → Ensure all locale files are imported in Layout.astro
4. **Invalid JSON** → Run `node -e "JSON.parse(fs.readFileSync(...))"` to validate

## Git Workflow
- Always commit after successful build + typecheck
- Never commit `dist/` — add to `.gitignore`
- Push after each logical change set
