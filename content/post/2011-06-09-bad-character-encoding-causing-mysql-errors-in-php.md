---
title: Bad character encoding causing MySQL errors in PHP
author: Dean
layout: post
url: /2011/06/bad-character-encoding-causing-mysql-errors-in-php/
image:
  - //deanclatworthy.com/img/uploads/2011/07/matrix.jpg
dsq_thread_id:
  - 794929573
categories:
  - PHP
tags:
  - php mysql error utf8
date: 2011-06-09
---
Today at work I encountered a peculiar problem when working with some translations. I developed a system whereby we can send out translations to our translators and they'll fill in the blanks and send it back to use which is then imported. Part of this project involved coding a parser for a custom file format to send out to our translators. The benefit of this is it allowed me to validate incoming translation files, as well as easily export them according to the spec I'd defined.
<!--more-->

We received an Italian translation file and I proceeded to import it until my colleague noticed a few translations were missing. Baffled, I looked into this further and debugged until I spotted some MySQL errors in the logs. The query looked fine, but gave MySQL error number 1366. After a bit of googling I came across users who had received a similar error and had put it down to character encoding issues. It turns out that the translation file had been saved as ISO 8859-1 (Latin-1) rather than UTF-8. It turned out that MySQL was actually refusing to execute the query because the target string I was inserting into a UTF-8 column wasn't valid.

Rather than go through the complicated process of trying to cast different character sets coming in from various translators I came up with a simple solution which was to open the translation file and check it's contents are strict UTF-8. This is pretty simple to do:

```php
if(!mb_detect_encoding($str, 'UTF-8', true)) {
    throw new TranslationException('File is invalid UTF-8');
}
```

As a quick side note, omit the last parameter if you don't want to be 100% strict.