---
title: Browse safely, and avoid drive-by attacks in Google Chrome
author: Dean
layout: post
url: /2013/02/browse-safely-and-avoid-drive-by-attacks-in-google-chrome/
dsq_thread_id:
  - 1105991903
categories:
  - Uncategorized
date: 2013-02-26
---
With the [increased][1] [number][2] of [drive-by][3] [attacks][4] happening lately, I decided to investigate how these attacks work and what can be done to prevent them.<!--more-->

The way in which drive-by attacks work is simple. A hacker breaks into a website and edits the source code of the page to deliver [malware][5] to the user. Usually this works by the hacker creating their own web page and then loading that through an iframe on the site they broke into. This results in a subtle, but very effect method of attacking user's machines as the iframe is normally hidden so the user doesn't even see it.

The reason this is called a drive-by attack is because you are extremely unlikely to have noticed it happened. The most effective hackers will use a [0-day attack][6] which often means that the malware is not present in anti-virus databases, so the only method of detection from an anti-virus is to rely on heuristic methods which detect unusual activity on your system. Experience has shown that this is extremely difficult to do and often these drive-by attacks go unseen.

The exploits used in most of these attacks target browser plug-ins as they are installed on almost every browser of every system. Popular plugins such as Flash and Java are installed on most new machines by default, and if they aren't updated by the user then they become a common attack vector for hackers.

So that leads me to my question: what can we do about it?

More recent builds of Google Chrome come with a fantastic feature which enables you to disable plugins by default, and only allow them to play if you explicitly click them. Let's look into how to turn that on. In the top right corner of your browser click the menu icon and go to settings (If you're on Windows you can click Ctrl+, or Mac Command+,).

[<img class="alignnone size-full wp-image-320" alt="Screen Shot 2013-02-26 at 1.11.02 PM" src="/img/uploads/2013/02/Screen-Shot-2013-02-26-at-1.11.02-PM.png" />][7]

Next, at the bottom of the page click &#8220;Show advanced settings&#8221;.

Under the &#8220;Privacy&#8221; section click the &#8220;Content Settings&#8221; button and scroll down to the &#8220;Plugins&#8221; section. We want to change this setting to &#8220;Click to Play&#8221;:

[<img class="alignnone size-full wp-image-321" alt="Screen Shot 2013-02-26 at 1.13.09 PM" src="/img/uploads/2013/02/Screen-Shot-2013-02-26-at-1.13.09-PM.png" />][8]

Finally, click the &#8220;Manage exceptions&#8230;&#8221; button so that we can whitelist some sites that are most likely safe to run plugins on. I have added youtube like so:

[<img class="alignnone size-full wp-image-322" alt="Screen Shot 2013-02-26 at 1.14.25 PM" src="/img/uploads/2013/02/Screen-Shot-2013-02-26-at-1.14.25-PM.png" />][9]

Remember, when you add a site to this whitelist all plugins will run on it, so only add to this list if a site relies on a plugin to operate or it becomes really inconvenient having to click every time.

And that's it! Enjoy browsing the web more safely and please give feedback in the comments or [follow me on twitter][10].

 [1]: http://www.theregister.co.uk/2013/02/22/nbc_hack/
 [2]: http://threatpost.com/en_us/blogs/mysqlcom-site-hacked-was-serving-malware-092611
 [3]: http://nakedsecurity.sophos.com/2012/12/03/dockster-mac-malware-dalai-lama/
 [4]: http://www.messagingnews.com/eyeonmessaging/stephanie-jordan/several-large-frequently-visited-sites-still-serving-malware
 [5]: http://en.wikipedia.org/wiki/Malware
 [6]: http://en.wikipedia.org/wiki/Zero-day_attack
 [7]: //deanclatworthy.com/wp-content/uploads/2013/02/Screen-Shot-2013-02-26-at-1.11.02-PM.png
 [8]: //deanclatworthy.com/wp-content/uploads/2013/02/Screen-Shot-2013-02-26-at-1.13.09-PM.png
 [9]: //deanclatworthy.com/wp-content/uploads/2013/02/Screen-Shot-2013-02-26-at-1.14.25-PM.png
 [10]: https://twitter.com/deanclatworthy