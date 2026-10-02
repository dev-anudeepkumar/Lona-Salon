// A small static file server for hosts that run a Node process rather than
// serving files directly (Render, Railway, Replit, Heroku, and similar).
// Netlify does not need this: it serves lona-salon-spa/ directly per
// netlify.toml. This file exists for every other kind of host.

const path = require("path");
const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;
const SITE_DIR = path.join(__dirname, "lona-salon-spa");

app.use(express.static(SITE_DIR));

// any unmatched path falls back to the single page, since this is a
// one-page site with in-page anchors (#about, #services, ...), not a
// multi-route app. Plain middleware (no path pattern) rather than
// app.get("*", ...), since Express 5's router rejects a bare "*".
app.use((req, res) => {
  res.sendFile(path.join(SITE_DIR, "index.html"));
});

app.listen(PORT, () => {
  console.log(`Lona Salon & Spa serving lona-salon-spa/ on port ${PORT}`);
});
