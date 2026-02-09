---
layout: post
title: "Migrating Jekyll to Hugo - my experience"
description: ""
category:
url: /2015/10/15/migrating-jekyll-to-hugo-my-experience/
tags: [hugo, jekyll]
date: 2015-10-15
snippet: wooooo
---

For those that haven't yet heard about it [Hugo](http://gohugo.io) is a lightning-fast, and powerful static generator
built using golang. For the last couple of years I've used [Jekyll](https://jekyllrb.com/) to build this site, but even
with this few pages & posts Jekyll takes between 5-10 seconds to generate my tiny site.

<!--more-->

For those of you currently running Jekyll before you decide to switch, make sure first of all that you configure it 
correctly first, specifically making sure you only 
[include/exclude relevent files from your build process](http://jekyllrb.com/docs/configuration/). If you have, and 
it's still too slow for your taste and you feel like trying something new then carry on reading below.

I'm not going to go through every little detail here on setting up hugo. The documentation is awesome so go
[set up hugo](https://gohugo.io/overview/quickstart/) first. I'll now outline the things that caught me off-guard
when trying to migrate my content and theme.

### Using *.html extensions for pages

Set up `uglyURLs: "true"` in your `config.yml`.

### Migrating your post URLs

Follow this checklist:
* Move all your posts under `content/post`
* Open up each file and make sure your front-matter contains the URL you want e.g. `url: /2012/01/how-to-rip-music-from-the-hype-machine/`

An alternative to this is to configure permalinks for posts via `config.yml`:

```yaml
permalinks:
	post: /:year/:month/:day/:slug/
```
          
The downside to this is that a) you must define a `date` key in your front-matter & b) the slug that is generated
may be a bit different from Jekyll. It is much safer to hardcode your URLs sadly.

### How to access the current date in templates

This is pretty straightforward:

```md
{{ .Date.Format "2006" }}
```
    
### How to create a global site menu

The documentation on menus is pretty good but here's some info on quickly setting it up. Define your homepage URL in 
`config.yml` if you want it to appear in the menu:

```yaml
menu:
	main:
		- Name: "Home"
		Weight: 1
		Identifier: "home"
		URL: "/"
```
            
If you want any additional URLs to appear in the menu, just define the menu in which it should appear in the front-matter
for the content e.g.

```yaml
menu:
	main:
	weight: 60
```

The weight is basically a display order.

### How to not go insane when generating meta title/description tags

Just use this:

```html
<title>
	{{ if isset .Params "og_title" }}
	{{ .Params.og_title }}
	{{ else if eq .URL "/" }}
	{{ .Site.Params.TitleSuffix }}
	{{ else if eq .Section "post" }}
	{{ .Title }}
	{{ else }}
	{{ .Title }} | {{ .Site.Params.TitleSuffix }}{{ end }}
</title>

{{ if isset .Params "og_title" }}
<meta property="og:title" content="{{ .Params.og_title }}" />
{{ else if eq .URL "/" }}
<meta property="og:title" content="{{ .Site.Params.TitleSuffix }}" />
{{ else if eq .Section "post" }}
<meta property="og:title" content="{{ .Title }}" />
{{ else }}
<meta property="og:title" content="{{ .Title }} | {{ .Site.Params.TitleSuffix }}" />
{{ end }}

{{ if eq .URL "/" }}
<meta name="description" content="{{ .Site.Params.Tagline }}" />
<meta property="og:description" content="{{ .Site.Params.Tagline }}" />
{{ else if eq .Section "post" }}
<meta name="description" content="{{ .Summary }}" />
<meta property="og:description" content="{{ .Summary }}" />
{{ else }}
<meta name="description" content="{{ .Description }}" />
<meta property="og:description" content="{{ .Description }}" />
{{ end }}
```