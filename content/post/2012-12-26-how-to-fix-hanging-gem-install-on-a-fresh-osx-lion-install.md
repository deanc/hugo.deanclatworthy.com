---
title: 'How to fix hanging gem install on a fresh OSX Lion install'
author: Dean
layout: post
url: /2012/12/how-to-fix-hanging-gem-install-on-a-fresh-osx-lion-install/
dsq_thread_id:
  - 993267256
categories:
  - osx
  - ruby
  - ruby gems
date: 2012-12-26
---
I've now tried to use `gem install <package>` on two fresh installs of OSX Lion on a Macbook Pro 13" 2011 and Macbook Pro 15" 2012. Both have suffered from the same issue of the gem installer hanging.

This was my symptom.

        $ gem install cocoapods
        ERROR:  While executing gem ... (Gem::FilePermissionError)
        You don't have write permissions into the /Library/Ruby/Gems/1.8 directory.</pre>

The strange thing was, if this was solely an issue with permissions, then it should not take almost *three minutes* to give that error message. Something more sinister is obviously going on&#8230;

After some investigation I came across several topics on stackoverflow discussing gem install hanging, but all of them implied it was some connection issue and suggesting several solutions. None of them worked individually, but here is what worked for me:

1.  Open up Xcode and go to XCode > Preferences and switch to the Downloads tab. Once there, install the command line tools if you haven't already.<a href="http://www.deanclatworthy.com/2012/12/how-to-fix-hanging-gem-install-on-a-fresh-osx-lion-install/screen-shot-2012-12-26-at-1-18-35-pm/" rel="attachment wp-att-259"><img class="alignnone size-medium wp-image-259" alt="Screen Shot 2012-12-26 at 1.18.35 PM" src="//deanclatworthy.com/img/uploads/2012/12/Screen-Shot-2012-12-26-at-1.18.35-PM-300x219.png" width="300" height="219" /></a>
2.  Install RVM and the latest stable version of Ruby by typing this on command line: 

```sh
curl -L https://get.rvm.io | bash -s stable --ruby
```

3.  Now you should be able to install gems.

Enjoy the guide, and please, if you have any feedback on why gem install doesn't work out the box then share it in the comments.