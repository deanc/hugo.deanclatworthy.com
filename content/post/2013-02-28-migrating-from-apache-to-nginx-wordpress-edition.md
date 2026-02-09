---
title: Migrating from apache to nginx (wordpress edition)
author: Dean
layout: post
url: /2013/02/migrating-from-apache-to-nginx-wordpress-edition/
dsq_thread_id:
  - 1110095107
categories:
  - Apache
  - nginx
  - Wordpress
date: 2013-02-28
---
Today I migrated my whole site from apache to nginx. The main reason for this being that nginx seems to handle load and use less memory on smaller boxes. It's also an opportunity for me to try something new.

I'll cut straight to the chase. There's some [great information][1] [already available][2]. At the time of this writing though, both sets of instructions didn't work for me. I'll come to why later.
<!--more-->

The first thing you want to do is install nginx and php5-fpm. Before you do this [add dotdeb to your sources list][3]. Don't forget to update your packages.

Now we can install nginx and php5-fpm:

```sh
sudo apt-get install nginx php5-fpm
```

In nginx, there's no such thing as virtual hosts. We call them server blocks, but they work similarly. Let's create one. Create a file at
`/etc/nginx/sites-available/` called `yourdomain.com` with these contents:

```apache
server {
        listen 80;
        server_name yourdomain.com;

        access_log /var/log/nginx/yourdomain.com.access_log;
        error_log /var/log/nginx/yourdomain.com.error_log;

        root /var/www/yourdomain.com/public_html;
        index index.php index.htm index.html;

        include /etc/nginx/global/wordpress.conf;
        include /etc/nginx/global/restrictions.conf;
}
```

This creates a server block, which listens on port 80, with webroot at /var/www/yourdomain.com/public_html. It then includes two configuration files which we'll come to now.

Now create a file at `/etc/nginx/global/wordpress.conf` with contents:

```apache
# WordPress single blog rules.
# Designed to be included in any server {} block.

# This order might seem weird - this is attempted to match last if rules below fail.
# http://wiki.nginx.org/HttpCoreModule
location / {
        try_files $uri $uri/ /index.php?$args;
}

# Add trailing slash to */wp-admin requests.
rewrite /wp-admin$ $scheme://$host$uri/ permanent;

# Directives to send expires headers and turn off 404 error logging.
location ~* ^.+\.(ogg|ogv|svg|svgz|eot|otf|woff|mp4|ttf|rss|atom|jpg|jpeg|gif|png|ico|zip|tgz|gz|rar|bz2|doc|xls|exe|ppt|tar|mid|midi|wav|bmp|rtf)$ {
        access_log off; log_not_found off; expires max;
}

# Uncomment one of the lines below for the appropriate caching plugin (if used).
#include global/wordpress-wp-super-cache.conf;
#include global/wordpress-w3-total-cache.conf;

# Pass all .php files onto a php-fpm/php-fcgi server.
location ~ \.php$ {
        # Zero-day exploit defense.
        # http://forum.nginx.org/read.php?2,88845,page=3
        # Won't work properly (404 error) if the file is not stored on this server, which is entirely possible with php-fpm/php-fcgi.
        # Comment the 'try_files' line out if you set up php-fpm/php-fcgi on another machine.  And then cross your fingers that you won't get hacked.
        try_files $uri =404;

        fastcgi_split_path_info ^(.+\.php)(/.+)$;
        #NOTE: You should have "cgi.fix_pathinfo = 0;" in php.ini

        include fastcgi_params;
        fastcgi_index index.php;
        fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
#       fastcgi_intercept_errors on;
        fastcgi_pass unix:/var/run/php5-fpm.sock;
}
```

This file is very important and one value particularly is of interest to us. The `fastcgi_pass` variable is critical if you want PHP to work. When PHP-FPM is running, it listens on a socket. Dependent on your distribution and package this value might be different. Every tutorial I tried suggested pointing this value to `127.0.0.1:9000` but this was not the case with my system. If you open `/etc/php5/fpm/pool.d/www.conf` there is a configuration value called `listen`. This is what you should set the `fastcgi_pass` variable to.

Finally, create a file at `/etc/nginx/global/restrictions.conf` to handle some security:

```apache
# Global restrictions configuration file.
# Designed to be included in any server {} block.&lt;/p>
location = /favicon.ico {
        log_not_found off;
        access_log off;
}

location = /robots.txt {
        allow all;
        log_not_found off;
        access_log off;
}

# Deny all attempts to access hidden files such as .htaccess, .htpasswd, .DS_Store (Mac).
# Keep logging the requests to parse later (or to pass to firewall utilities such as fail2ban)
location ~ /\. {
        deny all;
}

# Deny access to any files with a .php extension in the uploads directory
# Works in sub-directory installs and also in multisite network
# Keep logging the requests to parse later (or to pass to firewall utilities such as fail2ban)
location ~* /(?:uploads|files)/.*\.php$ {
        deny all;
}
```


Now all of our configuration is in place, we need to shut down apache, and start nginx and php5-fpm:

```sh
sudo /etc/init.d/apache2 stop
sudo /etc/init.d/php5-fpm restart
sudo /etc/init.d/nginx start
```

Your site should now be running nginx. Confirm this by visiting it and of course checking to see if the process is running:

```sh
ps aux | grep nginx
```

Enjoy!

 [1]: http://codex.wordpress.org/Nginx
 [2]: http://wiki.nginx.org/WordPress
 [3]: http://www.dotdeb.org/instructions/