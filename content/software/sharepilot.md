---
title: SharePilot
seo_title: SharePilot — Auto-mount network drives
og_title: SharePilot — Automatically mount network drives on Mac
description: "Automatically mount network drives on your Mac and reconnect after sleep or network changes. Set connection rules and try SharePilot free for 7 days."
date: 2026-10-16
lastmod: 2026-10-22
url: /software/sharepilot/
layout: product
product_order: 1
platform: macOS 26 or later
status: Available now
tagline: Keep your network drives connected.
summary: "Automatically mount network drives on your Mac and reconnect your NAS and shared folders after sleep or network changes. Choose when each drive connects, then get back to work."
image: /img/software/sharepilot/overview.jpg
image_alt: "SharePilot’s native Mac dashboard showing a disconnected example network share and its connection status."
image_width: 2000
image_height: 1616
og_image: /img/software/sharepilot/share.jpg
og_image_alt: "SharePilot for Mac. Keep your network drives connected. Blue app icon on a pale background."
og_image_type: image/jpeg
og_image_width: 1200
og_image_height: 630
icon: /img/software/sharepilot/icon.jpg
cta_label: Contact support
cta_url: /contact.html?subject=SharePilot%20support#my-form
trial_days: 7
trial_no_card: true
price: "US$24.99"
price_is_placeholder: false
license_summary: "One Mac per licence. Includes all version 1 updates. Future major upgrades optional."
privacy_url: /software/sharepilot/privacy/
terms_url: /software/sharepilot/terms/
refund_url: /software/sharepilot/refunds/
preview_release: false
download_url: "https://github.com/deanc/SharePilot-releases/releases/download/v1.0-build15/SharePilot-macOS.zip"
download_label: Download SharePilot
download_note: "Version 1.0 (build 15). Not Developer ID signed or notarised; macOS may block first launch. Read the [installation notes](https://github.com/deanc/SharePilot-releases/releases/tag/v1.0-build15) before installing."
purchase_url: "https://sharepilot-licensing.dclat.workers.dev/buy"
purchase_label: Buy SharePilot 1
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
    answer: "After seven days from first launch, all SharePilot controls and background automations lock unless you activate a licence. Existing volumes remain mounted in macOS and can be managed in Finder. Updating or reinstalling preserves the original trial start."
  - question: How many Macs does a licence cover?
    answer: "One Mac at a time. Deactivate your licence in SharePilot’s licence settings before activating it on another Mac."
  - question: Which updates are included?
    answer: "Your one-time purchase includes SharePilot 1 and all 1.x updates. A future 2.x release needs a separate licence, bought outright or through a paid upgrade if offered. You can keep using version 1 on compatible macOS versions. Updates are installed manually."
  - question: Who handles payments and licence keys?
    answer: "Paddle handles checkout, payment receipts and refunds as merchant of record. Your licence key appears after checkout; save or download it for activation. Paddle emails your payment receipt separately. If you lose your key, [contact support](/contact.html?subject=SharePilot%20licence%20support#my-form) with your Paddle receipt reference."
  - question: Can I upgrade from the trial preview?
    answer: "Yes. Quit the preview, download the current version and replace the app in Applications. Your settings and original trial start are preserved. You can then activate a purchased licence. macOS may ask you to approve Keychain access again after the update."
  - question: Can I get a refund?
    answer: "Use the seven-day trial to check SharePilot before buying. Purchases are normally final; I consider discretionary refunds only in exceptional circumstances. Your statutory rights and Paddle’s terms still apply. Read the [refund policy](/software/sharepilot/refunds/) for details."
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
  - question: How do I buy and activate a licence?
    answer: "[Buy SharePilot 1](https://sharepilot-licensing.dclat.workers.dev/buy) through Paddle, then save the licence key shown after checkout. Open SharePilot’s licence settings and paste the key to activate this Mac. The one-time base price is US$24.99; your currency and applicable taxes are shown at checkout."
---
