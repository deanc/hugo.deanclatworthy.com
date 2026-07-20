## GitHub authentication on macOS

- The GitHub CLI token is stored in macOS Keychain and may be inaccessible inside the Codex sandbox.
- If `gh auth status` reports an invalid or missing token, retry it with escalated permissions before requesting authentication.
- Git remotes use SSH. Commit and push operations should use Git directly and do not require `gh` authentication.
