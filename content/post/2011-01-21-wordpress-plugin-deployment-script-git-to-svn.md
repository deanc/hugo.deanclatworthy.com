---
title: WordPress plugin deployment script (GIT to SVN)
author: Dean
layout: post
url: /2011/01/wordpress-plugin-deployment-script-git-to-svn/
image:
  - //deanclatworthy.com/img/uploads/2011/07/cmdline.jpg
dsq_thread_id:
  - 794530150
categories:
  - GIT
  - Wordpress
date: 2011-01-21
---
**Short Version:** This script will allow you to manage your wordpress plugins in git, and deploy them to wordpress.org SVN.

**Long Version:**

Recently at work I was required to build a wordpress plugin. After trawling through the documentation to figure out what I needed to do, it became apparent that to get my plugin listed in the WordPress plugins directory I would be required to host the code in their SVN repository. Along with most developers nowadays, I've switched to Git (for numerous reasons), so I was left with the dilemna of how to manage my plugin within git and host it on Github, but sync all changes to the SVN repository whenever a new version was ready. There's quite a lot of work involved when trying to do this so I wanted to automate the whole thing. The result is a bash script shown below which will:

1.  Check that the version numbers in your readme.txt match up with those in your PHP file.
2.  Commit the latest outstanding changes to your git repository if any are left
3.  Push the latest changes to github
4.  Export the contents at the HEAD of your 'master' branch in git to the trunk of your SVN repository.
5.  Commit the changes to SVN and therefore push them  back to wordpress.org
6.  Create an SVN tag for wordpress.org to use and commit it (this will be the same value as Stable Tag: <tagnumber> in your readme.txt)
7.  Update the version number for future reference.

Hopefully this should make life a little easier for those WordPress plugin developers who wish to manage their projects in GIT :)

[Download the script here][1]

Enjoy!

 [1]: https://github.com/deanc/wordpress-plugin-git-svn