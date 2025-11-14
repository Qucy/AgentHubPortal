## Problem Diagnosis
- The browser error indicates GitHub Pages is serving raw source (`./src/main.jsx`) as a module script with MIME `text/jsx` instead of the Vite-built JavaScript bundle.
- This happens when the site is published directly from the repository’s root/branch rather than the build artifact. The built `dist/index.html` correctly references `assets/index-*.js` with `application/javascript` MIME.

## Target Outcome
- GitHub Pages serves the Vite build (`dist/`) with correct JS/CSS assets, no references to `src/*.jsx` at runtime.
- Navigation works via hash URLs (`#/...`) and SPA fallback (`404.html`) is active.
- No console errors related to MIME type or missing assets.

## Required Changes
1. Ensure Pages source is GitHub Actions:
   - In repository Settings → Pages → Build and deployment, set Source: "GitHub Actions".
2. Confirm CI workflow builds and deploys `dist/`:
   - `actions/setup-node@v4` with Node 20 and npm cache
   - `npm ci` (or `npm i` fallback)
   - `npm run build`
   - `cp dist/index.html dist/404.html` (SPA fallback)
   - `actions/upload-pages-artifact@v3` with `path: 'dist'`
   - `actions/deploy-pages@v4`
3. Keep Vite config suitable for GitHub Pages project sites:
   - `base: './'` in `vite.config.js`
   - Tailwind integrated via `@tailwindcss/vite` with `@import "tailwindcss"` in `src/style.css`
   - Entry imports CSS from `src/main.jsx`
4. Use `HashRouter` to avoid server-side routes on Pages (already implemented), so URLs are `#/route`.

## Implementation Steps
1. Verify and, if needed, update `.github/workflows/deploy.yml` to match the above (build → upload `dist` → deploy).
2. Confirm repository Pages source is set to GitHub Actions (not "Deploy from a branch").
3. Push a no-op change to `main` to trigger a fresh deployment.
4. Validate on `https://qucy.github.io/AgentHubPortal/`:
   - Network panel shows `assets/index-*.js` and `assets/index-*.css` from `dist/`.
   - No requests to `src/main.jsx`.
   - No MIME errors.
   - Hash-route navigation works across all pages.

## Fallback Option (if Pages must deploy from branch)
- Configure Vite `build.outDir: 'docs'` and set Pages Source to `/docs` in Settings, then build and commit built files (not ideal; Actions is preferred).
- Alternatively deploy to `gh-pages` branch via `peaceiris/actions-gh-pages` using the `dist` output.

## Acceptance Criteria
- Page loads without MIME type errors.
- URLs under `#/...` navigate correctly.
- Console has no Tailwind CDN warnings (compiled CSS in use).
- SPA fallback works (unknown routes load the app via `404.html`).

## Next Enhancements (optional)
- Add route-level code splitting for faster initial load.
- Add a CI job to run `npm run build` on PRs for early detection.
- Add environment vars via repository secrets for future API integrations.