---
title: SharePilot
seo_title: SharePilot — Network drives, connected
description: "Keep your Mac’s network drives connected with SharePilot. Reconnect after sleep, set connection rules and manage your shares from the menu bar."
date: 2026-10-16
lastmod: 2026-10-17
url: /software/sharepilot/
layout: product
noindex: true
sitemap:
  disable: true
build:
  list: never
product_order: 1
platform: macOS 26 or later
status: Coming soon
tagline: Keep your network drives connected.
summary: "Automatically reconnect your NAS and shared folders when your Mac wakes or changes networks. Choose when each drive connects, then get back to work."
image: /img/software/sharepilot/overview.jpg
image_alt: "SharePilot’s native Mac dashboard showing a disconnected example network share and its connection status."
image_width: 2000
image_height: 1616
icon: /img/software/sharepilot/icon.jpg
cta_label: Get launch details
cta_url: /contact.html?subject=SharePilot%20launch#my-form
trial_days: 7
trial_no_card: true
price: "US$24.99"
price_is_placeholder: false
license_summary: "Includes all version 1 updates. Future major upgrades optional."
# Set these to the signed public download and checkout when the release is ready.
# The page then uses the download as its primary action and shows a purchase link.
download_url: ""
purchase_url: ""
purchase_label: ""
features:
  - title: Add your shares.
    text: "Add an SMB, NFS, WebDAV or AFP share from your NAS or file server. Set it up once, with credentials saved in Keychain."
    icon: reconnect
  - title: Choose when they connect.
    text: "Enable automatic connections, and add network, app or time rules when needed. SharePilot retries failed connections automatically."
    icon: rules
  - title: Keep working from Finder.
    text: "Open your connected folders in Finder as usual. Quick controls stay in the menu bar for connecting, disconnecting or pausing SharePilot."
    icon: menubar
details:
  - title: Your passwords belong in Keychain.
    text: "Credentials stay in your Mac’s login Keychain. Passwords are left out of exported settings, and SharePilot has no analytics or telemetry."
  - title: A sleeping NAS can wake up, too.
    text: "Send a Wake-on-LAN packet before a connection attempt. Your NAS and network need to support it; SharePilot takes care of sending the request."
  - title: Disconnect with care.
    text: "Choose when shares should disconnect automatically. Busy volumes are never forced to eject, and built-in diagnostics help identify apps using a share."
  - title: Works with Apple Shortcuts.
    text: "On macOS 27 or later, use SharePilot’s event notifications to trigger your own workflows in Apple Shortcuts. Open a project folder when a share connects, or show an alert if a connection fails."
faq:
  - question: What do I need to run SharePilot?
    answer: "A Mac running macOS 26 or later, and a network share you can access. SharePilot supports Intel and Apple Silicon Macs. It connects to your existing NAS or file server; it doesn’t provide storage."
  - question: Do I need a credit card for the trial?
    answer: "No. Download and open SharePilot to start a seven-day trial with all supported features. You don’t need to create an account, enter payment details or buy a licence to try it."
  - question: What happens when the trial ends?
    answer: "You’ll need to activate a purchased licence to make new connections, manually or automatically. Existing mounted shares stay available, and you can still open or disconnect them. Trial expiry never forces a drive to disconnect."
  - question: How many Macs does a licence cover?
    answer: "The number of Macs included with a licence will be confirmed before launch. You can deactivate a Mac from within SharePilot to free its licence slot."
  - question: Which updates are included?
    answer: "Your one-time purchase includes SharePilot 1 and all 1.x updates. Future major upgrades are optional and may be sold separately. SharePilot currently uses manual downloads rather than automatic updates."
  - question: How long will maintenance and security support last?
    answer: "The maintenance and security support period for SharePilot 1 will be confirmed before launch. A one-time purchase doesn’t include an indefinite support commitment or guaranteed compatibility with future macOS releases."
  - question: How do I get support?
    answer: "[Contact me directly](/contact.html?subject=SharePilot%20support#my-form). Include your macOS version and a brief description of what you were trying to do so I can help."
  - question: Which network shares does it support?
    id: connection-compatibility
    answer: "SMB, AFP, WebDAV and NFS through macOS. Authenticated WebDAV requires HTTPS; plain HTTP is supported for guest access only. Compatibility depends on your server and macOS version, particularly for NFS and older AFP servers."
  - question: Does it work with a VPN?
    answer: "You can use a connected VPN service as a connection rule. Some third-party VPN clients aren’t visible to macOS’s service API. Rules help control convenience and timing; they aren’t a security boundary."
  - question: Can SharePilot trigger Apple Shortcuts?
    answer: "Yes, on macOS 27 or later. Enable event publishing for a share, then create a Notification automation for SharePilot in Apple Shortcuts. Events cover mounting, mounted, unmounting, unmounted and connection failure. You choose the conditions and actions in Shortcuts, with the share name and mount path available as input. The integration is optional and is unavailable on macOS 26."
  - question: Can I move my settings to another Mac?
    answer: "Yes. Export and import share settings as JSON. Passwords aren’t included, and imported shares start with automatic connections off, so you can review them and add credentials before connecting."
  - question: Does SharePilot collect my data?
    answer: "There are no analytics or telemetry. Passwords are stored in Keychain. Commercial builds contact the licensing service for activation and periodic checks, sending your licence key and a random installation identifier. Your configured servers and network checks still make their normal connections."
  - question: Do connection rules need extra permissions?
    answer: "Wi-Fi name rules need Location permission on recent macOS versions. Focus rules need access to shared Focus status. SharePilot explains these requests in the app. Other rules can be used without granting either permission."
  - question: When can I buy it?
    answer: "SharePilot 1 is being prepared for release at US$24.99 as a one-time purchase, with a seven-day full-feature trial. Public downloads and checkout aren’t available yet. Get in touch for launch details or to ask whether it will suit your setup."
---
