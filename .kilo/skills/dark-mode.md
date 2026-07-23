# Dark Mode Implementation

## CSS Variables
Defined in `src/styles/global.css`:
- `--color-primary` — brand color (teal/slate)
- `--color-on-primary` — text on primary background
- `--color-canvas` — page background
- `--color-ink` — primary text
- `--color-body` — secondary text
- `--color-muted` — tertiary/secondary text
- `--color-hairline` — border color

## Tailwind Classes
- Background: `bg-canvas dark:bg-primary`
- Text: `text-ink dark:text-on-primary`, `text-body dark:text-muted`
- Borders: `border-hairline dark:border-white/10`
- Inputs: `bg-canvas dark:bg-primary dark:text-on-primary`

## Body Classes
```astro
<body class="min-h-screen bg-canvas text-ink antialiased dark:bg-primary dark:text-on-primary">
```

## Theme Toggle Logic
1. Check `localStorage.getItem('theme')`
2. If null, use `prefers-color-scheme: dark`
3. Toggle `dark` class on `<html>`
4. Save to localStorage

## Common Pitfalls
- Calculator result cards: `text-primary` on `dark:bg-primary` becomes invisible — use `dark:text-on-primary`
- Section headings without `dark:` variant remain black on dark background
- Country cards need explicit `dark:border-white/15 dark:bg-primary`
- Update metadata cards need `dark:text-muted` on descriptions
