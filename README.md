# AgentHubPortal

A prototype Agent Application Management Portal. It provides:

- Application-level dashboard with top metrics and filters
- Application detail views with pillar metrics and execution history
- Trace visualization with clickable nodes and metadata
- Evaluation workspace to create datasets, run evals, and view results
- Exportable CSV reports for applications and evaluations

## Live Preview (GitHub Pages)

This repository includes a GitHub Actions workflow that publishes the static site to GitHub Pages on every push to `main`. After the first push:

1. Go to your repository Settings → Pages.
2. Under “Build and deployment”, select “GitHub Actions”.
3. The workflow will deploy and provide a Pages URL.

The site is static; the entry point is `index.html` at the repository root.

## Local Development

- Open `index.html` directly in a browser, or serve the folder with any static server.
- The portal uses plain HTML/CSS/JS with CDN libraries; no build step required.

## Structure

- `index.html` — Home dashboard and application list
- `application.html` — Per-application dashboard
- `trace.html` — Execution trace visualization
- `evaluation.html` — Evaluation system (datasets, runs, results)
- `main.js` — Shared data and UI logic
- `.github/workflows/deploy.yml` — GitHub Pages deployment workflow

## Reports

- Export applications CSV from the home dashboard “Export Report” button.
- Download evaluation results CSV from the Evaluation → Results tab.