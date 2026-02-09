---
title: How to run Internet Explorer on a Mac (IE6, IE7, IE8, IE9, IE10, IE11)
author: Dean
layout: post
url: /2012/12/how-to-run-internet-explorer-on-a-mac-ie6-ie7-ie8-ie9/
dsq_thread_id:
  - 978799337
categories:
  - Uncategorized
date: 2012-12-17
---
Just a quick tip for anyone doing web development on macs, it's quite easy to get internet explorer running now with a brilliant tool created by Greg Thornton over at github. This essential automates the creation of the free Microsoft testing virtual machines for IE and builds them in to virtualbox. Make sure you install virtualbox first and then follow the instructions over at github:
<https://github.com/xdissent/ievms>

Essentially though, it's a simple as typing this command in the terminal:

```sh
curl -s https://raw.githubusercontent.com/xdissent/ievms/master/ievms.sh | bash
```

This will install IE6-IE11. Make sure you give it some time as it has to download over 10GB of data.