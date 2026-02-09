---
layout: post
title: "OSX Yosemite upgrade guide for PHP developers"
description: ""
category: 
tags: []
url: /2014/12/20/yosemite-upgrade-guide-for-php-developers/
date: 2014-12-20
---


## Yosemite upgrade guide v1.0

### Apache
Apache will break as it’s upgraded from v2.2 to v2.4. It will revert the `/etc/apache/httpd.conf` file. In this file you need to do a few things:

Search for `vhosts` and uncomment the line:

```apache       
Include /private/etc/apache2/extra/httpd-vhosts.conf
```

Also find the `<Directory />` block and make sure it reads as follows:

```apache
<Directory />
        AllowOverride All
        Require all granted
</Directory>
```

Then open up `/etc/apache2/extra/vhosts.conf` and find any instances that begin with `Allow from` or `Order allow,deny` or `Order deny,allow`.
Remove them and change to:

```
Require all granted
```

After all this make sure you restart apache: `sudo apachectl restart`

Finally, if you still have problems, try to start Apache in debug mode and see what errors you get:

```sh
sudo /usr/sbin/httpd -k start -e Debug -E /dev/stdout
```

## MySQL
It seems MySQL doesn’t start by default. First go to the Settings on your Mac and start the MySQL service. Check everything works.
Next, follow these instructions to [launch MySQL automatically](http://stackoverflow.com/a/26706416/775007).

## PHPStorm
PHPStorm is not yet compatible with Yosemite as it ships a new version of Java. Unfortunately you have to downgrade for now. [More info here](https://intellij-support.jetbrains.com/entries/27854363-IDE-doesn-t-start-after-updating-to-Mac-OS-Yosemite-or-Mavericks)
