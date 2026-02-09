---
layout: post
title: "How to use native Symfony Validator translations in a Silex application"
description: ""
category:
url: /2015/10/09/using-symfony-translations-with-silex/
tags: []
date: 2015-10-09
---

One of the problems I've encountered using the Symfony `Translation` component in Silex
is that when using a <a target="_blank" href="https://en.wikipedia.org/wiki/IETF_language_tag">fully qualified locale</a> 
(e.g. `en_GB` vs `en`) it doesn't use the translations that come shipped with the `Validation` component.

<!--more-->

This is because they are named `validators.en.xlf` and not `validators.en_GB.xlf`.

The way around this is to simply load them into the correct domain when initialising the `TranslationServiceProvider`

```php
$app['locale'] = 'en_GB';
$app['translator'] = $app->share($app->extend('translator', function($translator, $app) {
    
    // load SF validation messages
    $translator->addLoader('xlf', new Symfony\Component\Translation\Loader\XliffFileLoader());
    $translator->addResource('xlf', __DIR__.'/../vendor/symfony/validator/Resources/translations/validators.fi.xlf', 'fi_FI', 'validators');
    $translator->addResource('xlf', __DIR__.'/../vendor/symfony/validator/Resources/translations/validators.en.xlf', 'en_GB', 'validators');

    // now load your own
    $translator->addLoader('yaml', new Symfony\Component\Translation\Loader\YamlFileLoader());
    $translator->addResource('yaml', __DIR__.'/../translations/messages.en_GB.yml', 'en_GB', 'messages');
    $translator->addResource('yaml', __DIR__.'/../translations/messages.fi_FI.yml', 'fi_FI', 'messages');

    return $translator;
}));
```
        
The path to the translations may vary depending on which version of Symfony you are using.