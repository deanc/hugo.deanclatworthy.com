---
title: Dynamic/Random Javascript values in Selenium IDE
seo_title: "Random Values in Selenium IDE"
description: "How to generate dynamic JavaScript values in Selenium IDE tests, including unique timestamp-based email addresses for registration forms."
author: Dean
layout: post
url: /2011/01/dynamicrandom-javascript-values-in-selenium-ide/
image:
  - /img/uploads/2011/07/selenium.jpg
image_alt: "Selenium IDE open with an OpenStreetMap base URL"
image_width: 672
image_height: 150
dsq_thread_id:
  - 794530157
categories:
  - Selenium IDE
tags:
  - javascript
  - selenium
  - testing
date: 2011-01-25
---
One of the common questions I see from new users to Selenium is how to insert random values into a form. Well it turns out this is quite easy. Simply change your value to some javascript surrounded by some special syntax:  
<!--more-->

```
javascript{[code goes here]}
```

So let's do this using a more practical example. You have a form where you can't enter the same data twice for example a registration form would require a unique email address. So, record your test as normal, entering real data then once you're finished go back and edit the `type` command for the email address field and set the value to:

```
javascript{new Date().getTime() + "@example.com"}
```

Now you have random data you can pass into your test to ensure it passes any unique validation tests every time.
