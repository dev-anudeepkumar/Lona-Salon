# Lona Salon & Spa

A cinematic scroll-driven website for Lona Salon & Spa, Banjara Hills, Hyderabad.
Plain HTML, CSS and vanilla JavaScript — one folder, no build step.

## Structure

- **`lona-salon-spa/`** — the deployable site. `index.html` plus `assets/`. This is the folder that gets zipped and deployed.
- **`review/`** — working materials, not part of the live site:
  - `design-package.md` — the full design package: brand premise, palette, type, copy, section-by-section outline.
  - `LONA-source-content.docx` — the owner's original content document.
  - `brand-source/` — the original logo files (Illustrator, PDF, full-resolution PNGs) the trimmed web-ready logos were cut from.

## Status

- Full page built and self-tested: hero, about, how a visit starts, the interactive pause moment, services, shop, calendar, answers, contact, footer.
- Type: Cinzel for headings, Minion Pro Medium for running text (falls back to Crimson Pro for visitors without Adobe fonts installed).
- Hero scroll video not yet generated — waiting on Higgsfield credits.
- Proof section not yet built — waiting on real customer reviews.
- Hours and prices answered honestly pending real figures from the owner.
- Not yet deployed.

## Local preview

```
npx http-server lona-salon-spa -p 8123 -c-1
```

Then open `http://localhost:8123` in a real browser (not an embedded preview pane — this page is scroll-video driven and needs a real browser to render correctly).
