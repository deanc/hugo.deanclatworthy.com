---
title: 'How to avoid relying on github: mirror your repository'
author: Dean
layout: post
url: /2013/01/how-to-avoid-relying-on-github-mirror-your-repository/
dsq_thread_id:
  - 1024732006
categories:
  - Github
  - Bitbucket
date: 2013-01-14
---
One of the things that [recent github outages][1] have highlighted is that although git is designed to be decentralized version control system, many people are not treating it that way. Rather than having multiple remotes, people push to the same place and generally rely too much on github. I've seen people build their whole infrastructure around github, including deploy scripts for their sites and install scripts for new developers. Furthermore, dependency managers such as [Composer][2] & [Cocoapods][3] (not intending to single anyone out) rely on github to pull in dependencies. If github goes down, you can't fix your dependencies or pull in new ones. In an ideal world these dependency managers should have built in support for mirrors, but I'm not aware of any such feature at the time of writing.

<!--more-->

**What I'm going to illustrate is how easy it is to set up your git remotes so you push to two places**. If github goes down, it doesn't matter, assuming everyone on your team follows this guide the code will also be on bitbucket, or wherever else you choose. But this tutorial will mirror to github & bitbucket. Let's begin.

1.  Firstly, I'm going to assume you have a remote set up already for github named &#8220;origin&#8221;. Rename it to &#8220;github:

```sh
git remote rename origin github
```

2.  Create a new repository on bitbucket and name it the same as the one on github.
3.  Add it as a remote using the instructions provided. But make sure you call it &#8220;bitbucket&#8221; and not &#8220;origin&#8221;. Something like so:

```sh
git remote add bitbucket ssh://git@bitbucket.org/username/somerepo.git
git push -u bitbucket --all
```

4.  Next type:

```sh
git config -e
```
    
This will open up a text editor and allow you to edit your git configuration.</li>

5. We need to add the urls for every remote so far (github and bitbucket) into a new remote called &#8220;origin&#8221;. It should look something like this:

```ini
[remote "origin"]
        url = git@github.com:username/somerepo.git
        url = ssh://git@bitbucket.org/username/somerepo.git
```
    
6. Next time you run `git push origin ` it will push to both

And that's it. It's as simple as that.
    
Recent of versions of git allow you to add multiple places per remote like this using git commands, but I prefer to see exactly what is going on in the configuration.
    
**Update #1: **reddit user MatmaRex [makes a very valid point][4] to be careful renaming remotes if you have any remote branches. I've updated the instructions to reflect this.

 [1]: https://github.com/blog/1364-downtime-last-saturday
 [2]: http://getcomposer.org/
 [3]: http://cocoapods.org/
 [4]: http://www.reddit.com/r/programming/comments/16jk97/how_to_avoid_relying_on_github_mirror_your/c7wnycx