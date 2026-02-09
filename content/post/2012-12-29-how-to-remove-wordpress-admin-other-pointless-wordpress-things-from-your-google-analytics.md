---
title: 'How to remove WordPress admin & other pointless WordPress things from your Google Analytics'
author: Dean
layout: post
url: /2012/12/how-to-remove-wordpress-admin-other-pointless-wordpress-things-from-your-google-analytics/
dsq_thread_id:
  - 998780621
categories:
  - Wordpress
date: 2012-12-29
---
I have spent the last few hours taking a look at the Google Analytics for my blog and whilst doing so I realised that it's logging a lot of stuff that I don't need. This tutorial will allow you to exclude any traffic to your wordpress admin, or login script (that which you see before landing on the admin page) from your Google Analytics.

1.  Log into [Google Analytics][1]
2.  Click 'Admin' in the top right.
3.  Choose the account you wish to apply this filter to.
4.  Chose the correct property (domain) you wish to apply this filter for.
5.  Choose the relevent profile you have set up. Normally there is only one here unless you're doing anything custom.
6.  Click the 'Filters' tab and add a new filter. Set up like so:
<br><img class="alignnone size-full wp-image-274" alt="Exclude wp-admin from Google Analytics" src="/img/uploads/2012/12/Screen-Shot-2012-12-29-at-3.46.12-PM.png" /></a>
7.  Add another filter to exclude hits to the login script:
<br><img class="alignnone size-full wp-image-275" alt="Exclude wp-login.php from Google Analytics" src="/img/uploads/2012/12/Screen-Shot-2012-12-29-at-3.51.09-PM.png" /></a>

[1]: http://www.google.com/analytics