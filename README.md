# hugo.deanclatworthy.com

![Deploy Hugo site to Pages](https://github.com/deanc/hugo.deanclatworthy.com/actions/workflows/pages.yml/badge.svg) ![Last commit](https://img.shields.io/github/last-commit/deanc/hugo.deanclatworthy.com) ![Website](https://img.shields.io/website?url=https%3A%2F%2Fdeanclatworthy.com)

Source for deanclatworthy.com, built with Hugo and deployed via GitHub Pages using GitHub Actions.

## Requirements

- Hugo (extended). CI uses `0.155.1`.

## Local development

```bash
hugo server --config config.yml -D
```

Or:

```bash
make dev
```

## Build

```bash
hugo --minify --config config_prod.yml -D
```

Or:

```bash
make build
```

## Clean

```bash
make clean
```

## Deploy

Deployment is handled by GitHub Actions on every push to `master`.
The workflow builds the site and deploys to GitHub Pages.

## Custom domain

The custom domain is configured as `deanclatworthy.com` via `static/CNAME` and the GitHub Pages settings.
