## GitHub authentication on macOS

- The GitHub CLI token is stored in macOS Keychain and may be inaccessible inside the Codex sandbox.
- If `gh auth status` reports an invalid or missing token, retry it with escalated permissions before requesting authentication.
- Git remotes use SSH. Commit and push operations should use Git directly and do not require `gh` authentication.

## Agent-readable site metadata

- Keep `static/llms.txt` concise and factual. Review it whenever public-facing identity, role, expertise, contact or profile URLs, flagship work, navigation, or canonical page structure changes.
- Preserve `enableGitInfo` and the explicit-then-Git `frontmatter.lastmod` configuration in both Hugo config files. Explicit dates keep core pages intentional; Git history supplies the fallback for other content.
- When materially changing a core standalone page, update its explicit `lastmod` value. Do not change the original `date` value, which represents first publication.
- When adding or removing an important canonical page, decide whether it belongs in `static/llms.txt`; do not turn the file into a complete sitemap.

## Image sources and derivatives

- Keep the best available lossless source for new images under `image-sources/`. These files are build inputs and must not be published directly.
- Use the same path and basename for the lossless PNG master and its public fallback in `static/`, changing only the extension where appropriate.
- Generate responsive AVIF and WebP variants from the lossless master. Keep the public JPEG fallback for compatibility, stable URLs and social previews.
- Do not create a fake master by converting an existing lossy JPEG or WebP to PNG. If no lossless source exists, keep the best original available and document that limitation.

## Tone of voice

- Read and follow [`TONE_OF_VOICE.md`](TONE_OF_VOICE.md) when drafting or editing Dean's public-facing copy, including posts, standalone pages, portfolio entries, summaries, calls to action, and social copy derived from the site.
- Treat it as style guidance, not permission to invent facts, experiences, opinions, outcomes, or certainty. Preserve the source material's meaning and follow the more specific SEO requirements below for published posts.

## Active theme and SEO invariants

- `suomi` is the primary active theme. Treat `dean` as a legacy fallback; make layout, styling, metadata, and SEO changes only in `themes/suomi` unless explicitly requested otherwise.
- Taxonomy, term, and section pages are intentionally disabled.
- Keep the custom sitemap limited to the homepage and canonical regular pages. The 404 page must remain `noindex` and absent from the sitemap.
- After theme, content, or configuration changes, run `hugo --minify --config config_prod.yml` and `git diff --check`.

## SEO requirements for posts

When creating or materially editing a published post:

- Provide a unique, human-written `description` in front matter. Aim for 120–160 characters without adding filler, and never exceed 160 characters after rendering.
- Keep the rendered `<title>` around 60 characters or fewer, including the ` | Dean Clatworthy` suffix. If the visible article title is too long, add a concise `seo_title`; do not shorten the on-page heading solely for SEO.
- Do not reuse another page's `title`, `seo_title`, or `description`.
- Preserve an existing canonical URL whenever practical. If a URL must change, update internal links and add an appropriate Hugo alias or redirect.
- When `image` is present, also provide descriptive `image_alt`, `image_width`, and `image_height`. Use a root-relative image path.
- The theme supplies the article `<h1>`. Begin headings inside post content at `##` and maintain a logical hierarchy.
- Use descriptive link text. Keep internal links root-relative and verify that linked pages, images, and fragments exist. Prefer direct working external URLs over broken, obsolete, or redirecting URLs.
- Do not add canonical, Open Graph, Twitter, schema, or robots markup inside post content; the `suomi` theme generates it.
- Drafts must remain excluded from production output and the sitemap.
- Before considering post work complete, run the production build and check for duplicate titles or descriptions, broken internal references, missing image metadata, and malformed structured data.
