---
title: How to speed up your WordPress site by 200% in less than 5 minutes and save bandwidth
author: Dean
layout: post
url: /2012/12/how-to-speed-up-your-wordpress-site-by-200-in-less-than-5-minutes-and-save-bandwidth/
dsq_thread_id:
  - 998573294
categories:
  - Wordpress
date: 2012-12-29
---
I've been meaning to tweak my WordPress install for a while now. I've been using the [WP Super Cache plugin][1] for about half a year, but I've been unimpressed by the performance. Anyone who has spent time optimising a site will already know the basic following checklist (plenty of things left out):

*   Minify and join CSS & Javascript files
*   Load JS asynchronously at the bottom of the page where possible
*   Load static pages if you can
*   Let the user cache everything if possible.

<!--more-->

The WP Super Cache plugin basically did all these things. What I didn't like is that as I'm using  shared hosting for this simple blog, it cached pages to disk which isn't as quick as caching to memcache or something more efficient. I also didn't like how I had to go through a script to check to see if my minified and joined files were already cached and then make another read to disk. WP Super Cache does a great job at taking a bare bones WordPress and speeding it up on shared hosting but I wondered what else I could do.

Those of you lucky folks on VPS's and your own boxes aren't bound by these limitations, and have access to memcache, APC or something like Varnish, so you can *probably* stop reading now.

My solution was to use the fantastic, and **free** service provided by [Cloudflare][2]. Essentially, what Cloudflare does is cache your whole site, optimise your static assets automatically and then delivers it efficiently using their Content Delivery Network (CDN). They also provided different levels of protection from hacking, so you are less likely to be attacked by an SQL injection or XSS attack on your WordPress install when security issues arise. I've not had any practical experience using this feature though.

The huge advantage of Cloudflare is that it serves your website for you, not your hosting provider. Everything is still hosted on your servers, but as Clouldflare caches it, they can deliver the page and assets for you, meaning you don't use as much bandwidth. Furthermore, as they have servers distributed all over the world they can deliver your content to your users in a more efficient way than you can by detecting where the user came from and delivering it from the closest location possible to them.

So to summarise:

*   Cloudflare delivers your pages and static content (most of the time) saving you bandwidth.
*   Cloudflare can keep your site online if your hosting goes down because it has cached versions of the pages and static assets.
*   Cloudflare can deliver content quicker to your users from a server close to them, meaning they get your page delivered to them faster.
*   Cloudflare can automatically minify and join your CSS/Javascript files
*   Cloudflare can load your JS files asynchronously if you don't do this already.

Setting up your site to use Cloudflare is incredibly simple but make sure you disable any caching or minifying plugins before you begin. Because the Cloudflare setup process is so simple I'm not going to write a long tutorial with screenshots as they've made it so easy. All you'll need to do is sign up, add your domain, check that it imported your DNS settings correctly (99% of you won't need to change any of these values) then choose the Cloudflare features you want to enable. Finally, change your DNS to point at Cloudflare. You can do all of this within five minutes.

The way I measured my performance increase was using [Pingdom's website performance tool][3]. Sadly it only measures performance from three locations but even from those three locations I saw an increase in average page load from 2.5s to 1.2s. I should point out that the initial page load test before Cloudflare was installed, was using WP Super Cache and WP Minify to cache the pages and minify and combine the static assets.

Finally, this is by no means an empirical test, but I believe that Cloudflare is a no brainer for anyone wanting to be able to deliver their WordPress site to a global audience in the quickest time possible.

Please let me know your results in the comments.

 [1]: http://wordpress.org/extend/plugins/wp-super-cache/
 [2]: http://www.cloudflare.com
 [3]: http://tools.pingdom.com/fpt