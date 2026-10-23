---
title: SharePilot changelog
seo_title: SharePilot changelog
description: "Release notes for SharePilot for Mac. See fixes, security improvements and new features included in each version, with download and update information."
eyebrow: SharePilot
date: 2026-10-23
lastmod: 2026-10-23
url: /software/sharepilot/changelog/
layout: single
---

All 1.x updates are included in a SharePilot 1 licence. Updates are installed
manually: quit SharePilot, download the new version and replace the app in
Applications. Your settings and trial/licence data are preserved. macOS may ask
for Keychain approval again after an update.

## 1.0.1 (build 16) — 2026-10-23

### Fixed

- Settings exports now have owner-only file permissions and remove inherited read-access grants, protecting server addresses, usernames and rules from other local users.
- Automatic disconnects now require failed server checks spanning at least 30 seconds. Network changes and replacement mounts reset old outage history.
- Busy-file reports and pending health checks are discarded when they belong to a previous mount or network.
- An in-progress disconnect stays tracked if the app locks and unlocks, preventing duplicate disconnects and premature settings changes.
- Connection rules are checked again after the server responds, before starting a mount.
- Open in Finder now runs consistently when macOS reports a mount through the mount table before its completion callback.
- Endpoint checks now distinguish WebDAV paths containing escaped slashes and trailing slashes, and correctly compare default ports with uppercase URL schemes.
- Release-package validation remains enforced when Python optimisation is enabled.

Existing SharePilot 1 licences cover this update. No licensing or checkout changes.

## 1.0.0 (build 15) — 2026-10-22

Initial commercial release, published as version **1.0** with tag `v1.0-build15`.

- Automatic network-share mounting with connection rules, retries, menu-bar controls and busy-volume diagnostics.
- A seven-day full-feature trial and one-time SharePilot 1 licences through Paddle.
- Universal app for Apple Silicon and Intel Macs running macOS 26 or later.

[Download SharePilot](/software/sharepilot/) · [All releases](https://github.com/deanc/SharePilot-releases/releases)
