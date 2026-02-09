---
layout: post
title: "Using a self signed certificate with Cloudflare's Full SSL on nginx"
description: ""
category: 
tags: []
url: /2014/10/18/using-a-self-signed-certificate-with-cloudflares-full-ssl-on-nginx/
date: 2014-10-18
---


### Overview

Cloudflare recently launched [the biggest deployment of SSL in the history of the internet](https://blog.cloudflare.com/introducing-universal-ssl/),
and better yet they made it free. For users, it's as simple as flicking a switch, but there a few steps you should take
to make it more secure.

Cloudflare offers two levels of SSL on their free package:

* Flexible SSL - When a visitor visits your site the connection between them goes first through the Cloudflare network
which in turn downloads or delivers the cached version of the page. Unfortunately the downside of this is that Cloudflare's
request to your server is sent in cleartext. Think of this this way: if Bob visits Jane's site, his connection is secure
but if Cloudflare doesn't have a fresh copy of the page the request is forwarded by Cloudflare to your server, in clear text.
* Full SSL - The visitor's connection to your site is secure, and you also have an SSL certificate on your server so Cloudflare
can make secure requests to download/cache your content.

Whilst Flexible SSL is great for most cases, ideally you should be using Full SSL. This post will walk you through on how
to set that up.

### Instructions

#### Part 1

* First of all log in to your Cloudflare account and enable Flexible SSL.
* Set up a page rule for `\*yourdomain.com\*` and tick "Always use https" and save the rule. This will make Cloudflare redirect
all requests to http pages to https pages. Hooray!
* Make sure your application is using schema-less URI's. When referencing a URL on your own domain always use `//yourdomain.com`
and not `http://yourdomain.com`
* Now go check your site and you should have a working SSL set up. If so continue to part two.

#### Part 2

* We will now generate a self-signed certificate to install on your site. This
[guide](http://msol.io/blog/tech/2013/10/06/create-a-self-signed-ecc-certificate/) is great so generate your files
using the information there.
* Next step is to configure nginx correctly.