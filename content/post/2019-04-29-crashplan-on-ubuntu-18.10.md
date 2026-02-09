---
layout: post
title: "Running Crashplan on Ubuntu 18.10"
description: ""
category:
url: /2019/04/29/running-crashplan-on-ubuntu-18.10/
tags: [crashplan,ubuntu,electron,linux]
date: 2019-04-29
---

Crashplan for Small Business is not supported (as of the time of writing) on any
other Ubuntu version than 18.04 LTS. This appears to be related to an Electron/glibc
issue which has long been fixed. Unfortunately Crashplan seem unwilling to upgrade
their client.

<!--more-->

Fortunately there is a workaround. Add this PPA:

```sh
sudo add-apt-repository ppa:maarten-fonville/ppa
sudo apt-get update
```

You will almost certainly need to accept this PPA's keys:

```sh
sudo apt-key adv --keyserver keyserver.ubuntu.com --recv <whatever-the-id-is-in-the-error-message>
```

I have also seen a mention about patching `libnode.so` in the crash plan app itself
but I have not tried this.
