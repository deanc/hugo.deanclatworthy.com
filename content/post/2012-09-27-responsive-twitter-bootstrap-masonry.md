---
title: 'How to use responsive twitter bootstrap & masonry together'
author: Dean
layout: post
url: /2012/09/responsive-twitter-bootstrap-masonry/
dsq_thread_id:
  - 861128032
categories:
  - Uncategorized
date: 2012-09-27
---
Getting twitter bootstrap's responsive layout and masonry to play alongside each other is pretty simple. Assuming you are not using the fluid container (container-fluid) here's the code:

Javascript:

```js
$(document).ready(function () {

        $("#posts").masonry({
            itemSelector: '.post',
            isAnimated: true,
            columnWidth: function( containerWidth ) {

                // do nothing for browsers with no media query support
                // .container will always be 940px
                if($(".container").width() == 940) {
                    return 240;
                }

                var width = $(window).width();
                var col = 300;

                if(width < 1200 && width >= 980) {
                    col = 240;
                }
                else if(width < 980 && width >= 768) {
                    col = 186;
                }

                return col;
            }
        });
});
```

Demo (make sure you resize the frame in the bottom right):  
[http://jsfiddle.net/mWtmY/288/](http://jsfiddle.net/mWtmY/288/)