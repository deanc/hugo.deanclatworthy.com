---
title: Theming/styling error messages in Symfony 2
author: Dean
layout: post
url: /2012/08/theming-error-messages-in-symfony-2/
dsq_thread_id:
  - 817247188
categories:
  - PHP
  - Symfony 2
date: 2012-08-24
---
I spent a large portion of my day today trying to customize the HTML produced by Symfony 2 for form errors. The documentation has a section on how to do this, but for the life of me, I could not make it work. Here is a working, re-usable solution, with a brief explanation of the mistake I made at the end.

In your SF2 bundle create a new file **<BundleName>/Resources/views/Form/field_errors.html.twig**:  

```twig
{% raw %}
{# YourBundleName/Resources/views/Form/field_errors.html.twig #}
{% block field_errors %}
{% spaceless %}
{% if errors|length > 0 %}
<ul class="error_list">
    {% for error in errors %}
    <li>{{ error.messageTemplate|trans(error.messageParameters, 'validators') }}</li>
    {% endfor %}
</ul>
{% endif %}
{% endspaceless %}
{% endblock field_errors %}
{% endraw %}
```

Then import this into your TWIG template like so:  

```twig
{% raw %}
{% form_theme form '<YourNamespace><BundleName>:Form:field_errors.html.twig' %}
{% endraw %}
```


One key point to note here is that you must concatenate your name space and bundle name. So **Namespace:BundleName** won't work but **NamespaceBundleName** will. This is the mistake I was making. It turns out that when you create a bundle it's given an alias and by default it's a concatenation of your namespace and bundlename, so when referencing it in TWIG it appears you need to use this alias.