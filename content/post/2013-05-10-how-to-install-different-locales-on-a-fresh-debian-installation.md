---
title: How to install different locales on a fresh debian installation
author: Dean
layout: post
url: /2013/05/how-to-install-different-locales-on-a-fresh-debian-installation/
dsq_thread_id:
  - 1278341805
categories:
  - Linux
  - Debian
date: 2013-05-10
---
Simples:

```sh
sudo dpkg-reconfigure locale
```

This will load a GUI where you should select the new locales to install, then follow the onscreen instructions.