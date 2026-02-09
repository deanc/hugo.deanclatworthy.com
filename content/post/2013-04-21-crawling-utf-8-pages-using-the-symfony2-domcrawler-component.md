---
title: Crawling UTF-8 pages using the Symfony2 DomCrawler component
author: Dean
layout: post
url: /2013/04/crawling-utf-8-pages-using-the-symfony2-domcrawler-component/
dsq_thread_id:
  - 1226497612
categories:
  - Symfony2
date: 2013-04-21
---
Just a small gotcha for anyone using Symfony2's `DomCrawler` component. The standard behaviour of the class (from the current docs) is:

```php
$crawler = new Crawler($html);

foreach ($crawler as $domElement) {
    print $domElement->nodeName;
}
```

However, this will assume the document is ISO-8859-1. If you want to crawl a UTF-8 page correctly do it like so:

```php
$crawler = new Crawler;
$crawler->addHTMLContent(file_get_contents('http://www.columbia.edu/~fdc/utf8/'), 'UTF-8');

foreach ($crawler as $domElement) {
    print $domElement->nodeName;
}
```

The second parameter to `addHTMLContent` is `UTF-8` by default, but I've added it to illustrate that you could use other character sets too.