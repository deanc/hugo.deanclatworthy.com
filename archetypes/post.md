---
layout: post
title: "{{ replace (replaceRE `^\d{4}-\d{2}-\d{2}-` "" .File.ContentBaseName) "-" " " | title }}"
description: ""
category:
url: "/{{ dateFormat "2006/01/02" .Date }}/{{ replaceRE `^\d{4}-\d{2}-\d{2}-` "" .File.ContentBaseName }}/"
tags: []
date: {{ dateFormat "2006-01-02" .Date }}
draft: true
image: ""
image_alt: ""
image_width:
image_height:
---
