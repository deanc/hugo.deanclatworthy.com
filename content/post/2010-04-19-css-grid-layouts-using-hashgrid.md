---
title: CSS grid layouts using HashGrid
author: Dean
layout: post
url: /2010/04/css-grid-layouts-using-hashgrid/
image:
  - //deanclatworthy.com/img/uploads/2010/04/hasgrid-150x150.jpg
dsq_thread_id:
  - 794526251
categories: CSS
date: 2010-04-19
---
Just a heads up to anyone who's planning on designing their next project using a grid. The folks over at [Analog][1] have created a nifty little tool called [Hashgrid][2] to overlay a grid over your web page like so:

[<img src="//deanclatworthy.com/img/uploads/2010/04/hasgrid.jpg" alt="" title="hasgrid" width="600" height="385" class="alignnone size-full wp-image-60" />][3]

Installation is pretty simple but I ran into a couple of minor issues which hopefully can be remedied in a future version:

*   The negative margin in the example is half the width of your grid, and whilst that's probably obvious it may be worth adding a comment in the CSS on hashgrid.com just to make that clear
*   I had to add a high z-index to the #grid in the CSS to make sure it correctly overlayed my page. If your grid isn't showing this is probably why.

The hardest part is creating the grid image in photoshop. The quickest way I found to do this is with the selection tool and guides. Once you've created your guides it takes a few seconds to use the line tool to draw over your guides. If I get some time I might create a quick tool to generate dynamic grid images unless the hashgrid folks want to beat me to it ;-)

 [1]: http://analog.coop/
 [2]: http://www.hashgrid.com
 [3]: //deanclatworthy.com/img/uploads/2010/04/hasgrid.jpg