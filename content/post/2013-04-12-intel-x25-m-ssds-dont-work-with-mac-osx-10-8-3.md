---
title: Intel X25-M SSD's don't work with Mac OSX 10.8.3
author: Dean
layout: post
url: /2013/04/intel-x25-m-ssds-dont-work-with-mac-osx-10-8-3/
dsq_thread_id:
  - 1205126337
categories:
  - Uncategorized
date: 2013-04-12
---
I'm writing this informative post to try and help anyone who had the same problem as me. I upgraded to OSX 10.8.3, and after it restarted the machine the Apple logo and spinner was on screen for about a minute followed by a stop/forbidden/no entry symbol that looks like this:<!--more-->

[<img class="alignnone size-full wp-image-335" alt="osx-noentry" src="/img/uploads/2013/04/osx-noentry.jpg" />][1]

&nbsp;

I couldn't boot into safe mode (by holding shift on boot). I could enter the internet recovery mode, but a drive repair and permissions fix did nothing. I tried using the internet recovery mode to reinstall OSX (without losing data) and that didn't work.

Next I reinstalled OSX from a bootable USB recovery drive. This installed 10.8.2 again which worked perfectly. I immediately upgraded to 10.8.3 and the no entry sign was back. This told me there was some issue with my hardware and 10.8.3. A quick google around found that Intel X25-M drives don't work on 10.8.3 unless you upgrade to the most recent firmware. The good news is this is super easy.

Download the [Intel SSD toolbox][2] on a windows machine. Shut down the machine and insert the drive from your mac. Boot up again and run the toolbox and update the firmware. It takes less than 20 seconds and then put the drive back in your mac and it should boot into 10.8.3 without issue.

Don't do what I did and wipe your data, as there is no need!

Hopefully this article will be of help to a few people out there! Let me know in the comments if it was.

 [1]: //deanclatworthy.com/wp-content/uploads/2013/04/osx-noentry.jpg
 [2]: http://www.intel.com/go/ssdtoolbox