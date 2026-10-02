# Lona Salon & Spa

A cinematic scroll-driven website for Lona Salon & Spa, Banjara Hills, Hyderabad.
Plain HTML, CSS and vanilla JavaScript — one folder, no build step.

## Structure

- **`lona-salon-spa/`** — the deployable site. `index.html` plus `assets/`. This is the folder that gets zipped and deployed, and the only folder a static host (Netlify, etc.) needs to know about.
- **`review/`** — working materials, not part of the live site:
  - `design-package.md` — the full design package: brand premise, palette, type, copy, section-by-section outline, and the history of decisions made along the way (including rejected hero video attempts).
  - `LONA-source-content.docx` — the owner's original content document.
  - `brand-source/` — the original logo files (Illustrator, PDF, full-resolution PNGs) the trimmed web-ready logos were cut from.
  - `raw/` — raw Higgsfield generations (hero video takes, supporting stills) before web processing. Never shipped as-is.
- **`server.js`**, **`package.json`** — a small Express static-file server for hosts that run a Node process to serve a site (Render, Railway, Replit, Heroku, and similar), rather than serving files directly. Netlify does not use these; see Deploying below.

## Status

- Full page built and self-tested: hero, about, how a visit starts, the interactive pause moment, services, shop, calendar, answers, contact, footer.
- Type: Cinzel for headings, Minion Pro Medium for running text (falls back to Crimson Pro for visitors without Adobe fonts installed).
- Hero scroll video: shot, generated, and shipped (see `review/design-package.md` for the full story, including two rejected attempts and the reasoning behind the one that shipped).
- Calendar: half-hour time slots (10:00 AM–7:30 PM placeholder range, pending the owner's real hours).
- Proof section not yet built — waiting on real customer reviews.
- Hours and prices answered honestly pending real figures from the owner.
- Live on Netlify.

## Local preview

```
npx http-server lona-salon-spa -p 8123 -c-1
```

Then open `http://localhost:8123` in a real browser (not an embedded preview pane — this page is scroll-video driven and needs a real browser to render correctly).

## Deploying

**Netlify** (current live host): connected to this repo, builds from `main`. `netlify.toml` at the repo root tells it to publish `lona-salon-spa/` directly — no build step, no server, nothing in `package.json`/`server.js` is used.

**A Node-process host** (Render, Railway, Replit, Heroku, or similar): these run `npm start`, which runs `server.js` — a small Express app that serves `lona-salon-spa/` as static files and falls back to `index.html` for any unmatched path (this is a one-page site with in-page anchors, not a multi-route app). It binds to `process.env.PORT`, which every one of these platforms sets automatically, so no platform-specific configuration should be needed beyond pointing the host at this repo.

```
npm install
npm start
```
