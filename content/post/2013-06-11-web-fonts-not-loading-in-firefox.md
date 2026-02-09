---
title: Web fonts not loading in Firefox
author: Dean
layout: post
url: /2013/06/web-fonts-not-loading-in-firefox/
dsq_thread_id:
  - 1389199972
categories:
  - CSS
  - Firefox
  - Webfonts
date: 2013-06-11
---
I encountered a peculiar issue today regarding web fonts on firefox. On all browsers except Firefox the web fonts were loading correctly. I found multiple references suggesting that Firefox was picky with using quotes when referencing where the font file is hosted. However my findings were more interesting:

**Firefox does not support embedding webfont files from a different domain**

The good news is the fix is simple. Simply send the following header:

```apache
Access-Control-Allow-Origin *
```
