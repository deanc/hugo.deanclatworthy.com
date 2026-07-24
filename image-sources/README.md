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
