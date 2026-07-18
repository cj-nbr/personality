# Development Commands

## Scripts
```bash
npm run dev      # Start dev server at localhost:4321
npm run build    # Production build to /dist
npm run preview  # Preview production build
npm run astro    # Run Astro CLI commands
```

## Git Workflow
```bash
git status                    # Check working tree
git add <file>                # Stage specific file
git add -A                    # Stage all changes
git commit -m "message"       # Commit with message
git push                      # Push to remote
git checkout -- <file>        # Discard changes
```

## Build Process
1. `astro build` generates static HTML/CSS/JS
2. Prerenders all dynamic routes
3. Outputs to `/dist` directory
4. CSS bundled into `_astro/global.*.css`
5. JS chunks optimized by Vite

## Testing Workflow
1. Start dev server: `npm run dev`
2. Open browser to `http://localhost:4321`
3. Use Playwright for E2E testing
4. Capture screenshots for visual verification
5. Check console for errors

## Deployment
- **Platform**: Cloudflare Pages
- **Trigger**: Push to `main` branch
- **GitHub Action**: Auto-deploy workflow
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
