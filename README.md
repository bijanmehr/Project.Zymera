# Zymera — project site

Static site (plain HTML/CSS, no build step) for the Zymera research project:
**covert micro→macro misbehavior and mission resilience in learned, connectivity-aware cooperative swarms.**

## Pages
- `index.html` — landing / overview + research question
- `related-work.html` — literature review & the gap (both flanks)
- `architecture.html` — the three-stack architecture
- `findings.html` — experimental findings + figures
- `emergence.html` — emergent behaviors, wanted and unwanted
- `about.html` — limitations, threats to validity, contribution, resources
- `assets/` — shared `style.css` and `figures/` (GIFs + plots)

## Publish on GitHub Pages
Two easy options:

1. **Dedicated repo, `/docs` source** — copy this `site/` folder into a repo, rename it to `docs/`, push to `main`, then in *Settings → Pages* set **Source = main / docs**.
2. **`site/` as the Pages root** — push this folder as the repo root (or a `gh-pages` branch) and point Pages at it.

`.nojekyll` is included so GitHub serves the files as-is (no Jekyll processing).

All links are relative, so the site works from any base path.
