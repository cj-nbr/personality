# SEO & Structured Data

## Sitemap
- Integrated via `@astrojs/sitemap` in `astro.config.mjs`
- Generates `sitemap-index.xml` and `sitemap-0.xml` automatically
- `public/robots.txt` references the sitemap:
  ```
  User-agent: *
  Allow: /
  Sitemap: https://personality.com/sitemap-index.xml
  ```

## Meta Tags (Layout.astro)
- `<link rel="canonical" href={...}>`
- `<link rel="alternate" hreflang="xx" href={...}>` for each supported language
- `<link rel="alternate" hreflang="x-default" href={...}>`
- Open Graph: `og:title`, `og:description`, `og:image`, `og:type`
- Twitter Card: `twitter:card`, `twitter:title`, `twitter:description`

## JSON-LD Structured Data

### Layout.astro (all pages)
```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "TaxPortal",
  "url": "https://personality.com",
  "description": "..."
}
```
```json
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "TaxPortal",
  "url": "https://personality.com",
  "description": "..."
}
```

### CountryLayout.astro (country pages)
```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [...]
}
```

### FAQ Pages
```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": {
    "@type": "Question",
    "name": "...",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "..."
    }
  }
}
```

## Rules
- Keep URLs consistent across hreflang tags (same pathname, different lang query param if needed)
- Update sitemap when adding new routes
- `translate="no"` on brand names to prevent translation
