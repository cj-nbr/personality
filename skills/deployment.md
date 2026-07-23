# Deployment & CI/CD Skills

## Cloudflare Pages Deployment
- **Platform**: Cloudflare Pages
- **Trigger**: Push to `main` branch via GitHub Actions
- **Workflow file**: `.github/workflows/deploy.yml`
- **Build command**: `npm run build`
- **Output directory**: `dist`
- **Deploy command**: `npx wrangler pages deploy dist --project-name=personality --branch=main --commit-dirty=true`

## Performance Optimization
- **Dependency caching**: Always add `actions/cache@v4` to CI workflow
  ```yaml
  - name: Cache node modules
    uses: actions/cache@v4
    with:
      path: node_modules
      key: ${{ runner.os }}-node-${{ hashFiles('package-lock.json') }}
      restore-keys: |
        ${{ runner.os }}-node-
  ```
- **Effect**: Skips `npm ci` when dependencies haven't changed, reducing deploy time from ~2-3 minutes to ~30-40 seconds

## Build Output Path
- **Issue**: Cloudflare Pages expects `dist/index.html` as the entry point
- **Rule**: Ensure the main page is named `index.astro` in `src/pages/`
- **Wrong**: `src/pages/home.astro` → builds to `dist/home/index.html` (404 on live site)
- **Correct**: `src/pages/index.astro` → builds to `dist/index.html`

## Pre-Deploy Checklist
1. Check `.github/workflows/*.yml` exists and has caching configured
2. Verify build outputs correct root path (`dist/index.html`)
3. Verify `.gitignore` covers `dist/`, `node_modules/`, `.astro/`
4. Run `npm run build` locally and inspect output
5. Stage only source files, not build artifacts
