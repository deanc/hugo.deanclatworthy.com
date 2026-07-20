## GitHub authentication on macOS

- The GitHub CLI token is stored in macOS Keychain and may be inaccessible inside the Codex sandbox.
- If `gh auth status` reports an invalid or missing token, retry it with escalated permissions before requesting authentication.
- Git remotes use SSH. Commit and push operations should use Git directly and do not require `gh` authentication.

## Agent-readable site metadata

- Keep `static/llms.txt` concise and factual. Review it whenever public-facing identity, role, expertise, contact or profile URLs, flagship work, navigation, or canonical page structure changes.
- Preserve `enableGitInfo` and the explicit-then-Git `frontmatter.lastmod` configuration in both Hugo config files. Explicit dates keep core pages intentional; Git history supplies the fallback for other content.
- When materially changing a core standalone page, update its explicit `lastmod` value. Do not change the original `date` value, which represents first publication.
- When adding or removing an important canonical page, decide whether it belongs in `static/llms.txt`; do not turn the file into a complete sitemap.
