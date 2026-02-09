---
title: Ensuring facebook canvas applications work in IE8 / IE9 / IE10
author: Dean
layout: post
url: /2013/05/ensuring-facebook-canvas-applications-work-in-ie9/
dsq_thread_id:
  - 1294049192
categories:
  - Microsoft
  - PHP
  - Silex
  - Facebook
  - Internet Explorer
date: 2013-05-17
---
Last week I deployed a new Facebook application into a production environment. Everything seemed to be working perfectly, but then I received a report that the application wasn't working correctly in IE8+. I narrowed down the problem, and then realised that sessions weren't working. It turns out IE8+ has a security policy that prevents iframes from setting cookies if the parent domain is different. Therefore because my PHP session cooking wouldn't set, the sessions obviously didn't work between pages.

The good news is the fix is simple. Add this header to your page:

        header('p3p: CP="NOI ADM DEV PSAi COM NAV OUR OTR STP IND DEM"');

If you want to read more about this check this page:

[http://en.wikipedia.org/wiki/P3P](http://en.wikipedia.org/wiki/P3P)

Bonus: if using silex add this middleware:

```php
$app->after(function (Request $request, Response $response) {
    $response->headers->set('p3p', 'CP="NOI ADM DEV PSAi COM NAV OUR OTR STP IND DEM"');
});
```