# Suomi

`suomi` is a lightweight Finland-inspired Hugo theme for DeanClatworthy.com. It includes the homepage, about, portfolio, writing archive, article, skills and contact layouts, while remaining safe to preview alongside the existing `dean` theme.

Preview the complete site with Suomi first and Dean available as a fallback:

```sh
hugo server --theme suomi,dean
```

The normal site configuration is intentionally unchanged and continues to use `dean` by default.

## Footprint

- Minimal page-specific JavaScript: a 4.6 KB minified season, daylight and motion helper on the homepage and a 510-byte inline-video helper on the portfolio
- System fonts only
- Light and dark palettes that follow the operating-system preference until manually overridden; explicit choices persist across visits
- Native radio controls, forms, anchors and `<details>` disclosures
- Sixteen season and time-of-day AVIF scene images with WebP fallbacks; only the active image is loaded
- Native radio-button switching with automatic seasons based on Finland's calendar
- Dawn, day, dusk and night selection based on Helsinki sunrise and sunset calculations
- Season-specific inline SVG/CSS animation with `prefers-reduced-motion` support
- Continuous motion pauses while the scene is off-screen or the browser tab is hidden
- Click-to-load Vimeo embeds with local preview images, so third-party video resources load only after interaction
- Separate minified inner-page stylesheet so the homepage does not pay for article, portfolio or skills-page styles
