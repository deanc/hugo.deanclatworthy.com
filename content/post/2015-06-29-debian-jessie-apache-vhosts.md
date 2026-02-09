---
layout: post
title: "How to set up Apache vhosts correctly on Debian Jessie 8"
description: ""
category: 
tags: []
url: /2015/06/29/debian-jessie-apache-vhosts/
date: 2015-06-29
---


After spinning up a new server today at DigitalOcean and trying to set up a new vhost, I could not get
the default Apache page to go away and load my vhost's content.

<!--more-->

It turns out that in Debian Jessie vhost configuration files are required to end in `*.conf`. So, if you are 
naming your vhost configuration file `example.com` just rename it `example.com.conf` and it should load.

Another tip to see what's going on if a vhost doesn't load after a reboot, run this command to check it's
actually being loaded:

```sh
apachectl -S
```