# PWA & Manifest

## Manifest
`public/manifest.json`:
```json
{
  "name": "TaxPortal",
  "short_name": "TaxPortal",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#ffffff",
  "theme_color": "#0f766e",
  "icons": [
    {
      "src": "/favicon.svg",
      "sizes": "any",
      "type": "image/svg+xml"
    }
  ]
}
```

## Favicon
- SVG favicon at `public/favicon.svg`
- Referenced in Layout.astro: `<link rel="icon" type="image/svg+xml" href="/favicon.svg" />`

## Meta Tags
- `theme-color` in manifest matches site theme
- Apple touch icon can be added via `<link rel="apple-touch-icon" href="/favicon.svg">`

## Installability
- Requires HTTPS in production
- Manifest must be served with `application/manifest+json` MIME type
- PWA works on mobile browsers with "Add to Home Screen"
