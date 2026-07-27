# Image sources

This directory contains lossless source images used to generate web derivatives.
Files here are build inputs and are not published directly.

Keep each master as a PNG with the same path and basename as its public fallback
image in `static/`. For example:

```text
image-sources/things-i-love-coffee.png
static/things-i-love-coffee.jpg
```

Hugo prefers the lossless master when it creates responsive AVIF and WebP
variants. The file under `static/` remains the stable JPEG fallback and the
source used by social previews.

Do not resize or apply lossy compression to files in this directory. When an
image changes, update its master first and then rebuild the site. Regenerate the
public fallback from the master when necessary.

The official Volkswagen newsroom supplies the portfolio client logo as a JPEG.
The original is preserved at `image-sources/work/logos/volkswagen.jpg`, with
a transparent PNG fallback plus WebP and AVIF derivatives published under
`static/img/work/logos/`.

The KONE and Plan International client marks are preserved as official SVG
sources. The Ad Council mark is preserved as the official PNG supplied by its
site. Their responsive PNG, WebP and AVIF derivatives use a restrained
monochrome treatment and are published alongside the Volkswagen assets under
`static/img/work/logos/`.

The Iittala and compact Tallink Silja marks are preserved as SVG sources from
their official sites. Valio, Takeda and Metsä Group supplied lossless PNG
sources, while Rovio supplied its lossless PNG through its official press kit.
The Fazer SVG is a vector reproduction attributed to Fazer on Wikimedia
Commons; its public site does not expose a stable downloadable original.
Responsive monochrome PNG, WebP and AVIF derivatives for these client marks are
published under `static/img/work/logos/`.
