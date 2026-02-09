---
title: 'Silex Tip #1: How to quickly invalidate a form field in your controller'
author: Dean
layout: post
url: /2013/05/silex-tip-1-how-to-quickly-invalidate-a-form-field-in-your-controller/
dsq_thread_id:
  - 1278341913
categories:
  - Silex
  - PHP
date: 2013-05-10
---
You should be using [custom constraints][1] to validate your form fields, however there are some use-cases where you need to quickly invalidate in a controller. To do this it's quite easy:

```php
$form->get('username')->addError(new \Symfony\Component\Form\FormError("This email is already in use"));
```

 [1]: http://symfony.com/doc/master/cookbook/validation/custom_constraint.html