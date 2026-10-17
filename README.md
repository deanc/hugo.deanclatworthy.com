# hugo.deanclatworthy.com

![Deploy Hugo site to Pages](https://github.com/deanc/hugo.deanclatworthy.com/actions/workflows/pages.yml/badge.svg) ![Last commit](https://img.shields.io/github/last-commit/deanc/hugo.deanclatworthy.com) ![Website](https://img.shields.io/website?url=https%3A%2F%2Fdeanclatworthy.com)

Source for deanclatworthy.com, built with Hugo and deployed via GitHub Pages using GitHub Actions.

## Requirements

- Hugo (extended). CI uses `0.155.1`.
- Node.js 20+ (for CSS purge during build).

## Local development

```bash
hugo server --config config.yml -D
```

If you see a PostCSS error, install the CSS tooling first:

```bash
npm install
hugo server --config config.yml -D
```

Or:

```bash
make dev
```

## Build

```bash
npm install
hugo --minify --config config_prod.yml
```

Or:

```bash
make build
```

## Clean

```bash
make clean
```

## New post

```bash
make post TITLE="My Post Title"
```

This uses `$EDITOR` if set, otherwise `micro`. It prefixes the filename with the current date (e.g., `2026-02-09-my-post-title.md`). If `glow` is installed, it will render a terminal preview after editing.

## Deploy

Deployment is handled by GitHub Actions on every push to `master`.
The workflow builds the site and deploys to GitHub Pages.

## Custom domain

The custom domain is configured as `deanclatworthy.com` via `static/CNAME` and the GitHub Pages settings.

## Software pages

The catalogue is at `/software/`, with SharePilot at
`/software/sharepilot/`. Product cards are generated from regular pages with
`layout: product`, ordered by `product_order`. Section pages remain disabled.

Both pages are currently published as unlisted previews. Their front matter
sets `noindex: true`, `sitemap.disable: true`, and `build.list: never`, keeping
them out of search indexing, the sitemap, RSS, and regular page collections.
The catalogue's `products` list explicitly includes SharePilot so the unlisted
catalogue still works by direct URL. These pages are publicly accessible.

The Software links in the header and footer and the homepage software feature
are preserved inside Hugo template comments. To restore public discovery,
uncomment those blocks, remove the three front matter exclusions from both
pages, and restore the software entries in `static/llms.txt` below. Hugo
comments keep the links out of rendered HTML until then.

```markdown
## Independent software

- [Software](https://deanclatworthy.com/software/): Independent apps designed and built by Dean.
- [SharePilot](https://deanclatworthy.com/software/sharepilot/): Native app for macOS 26 or later, reconnecting network shares with connection rules. Optional Apple Shortcuts event integration requires macOS 27 or later. Being prepared for release.
```

SharePilot's price, trial length and release links are in
`content/software/sharepilot.md`. The current price (`€XX`), download and
checkout are preview placeholders. Before launch, set `price`, change
`price_is_placeholder` to `false`, fill `download_url` with the signed public
build and `purchase_url` with the checkout, and update the availability FAQ,
`status`, and `static/llms.txt`. The real URLs replace the preview dialogs
automatically. Product-specific launch enquiries prefill the existing contact
form's subject; nothing is submitted automatically.

The trial is presented as seven days with no account or credit card required.
Licence device coverage and update entitlements are marked as pending in the
FAQ until launch terms are decided; replace those answers before publishing.
The support link prefills the same contact form with a SharePilot support subject.

Screenshot masters and the extracted app icon are in
`image-sources/img/software/sharepilot/`; public JPEG fallbacks live at the
same paths under `static/`. Replace the development captures with release
screenshots and update their captions and dimensions before publishing.
