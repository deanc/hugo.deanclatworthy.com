---
title: Useful GIT commands
author: Dean
layout: post
url: /2011/01/useful-git-commands/
image:
  - //deanclatworthy.com/img/uploads/2011/07/git.jpg
dsq_thread_id:
  - 794932361
categories:
  - GIT
date: 2011-01-24
---
I'll use this post as a personal reference for useful GIT commands as I find them. Hopefully they'll help you also.

## Scenario #1

You have accidentally made a few commits to a branch and you wish to undo them so they are identical to the origin. You'll probably see something like this when you run `git status`

```
# On branch devel
# Your branch is ahead of origin/devel by 2 commits.
```

**Solution:**

```sh
git reset --hard origin/
```

This resets your current branch to an identical state of the current HEAD of the origin <branch>

## Scenario #2

You have created a branch B from branch A and made a few commits. Assuming you write useful commit messages it's useful for other developers to see the changes you've made and the features you've added since you branched. To do this type the following command:

```sh
git log $(git merge-base A B)..B
```


## Scenario #3

List all branches, ordered by last-commit date (with last-commit date visible):

        for k in `git branch|perl -pe s/^..//`;do echo -e `git show &#8211;pretty=format:&#8221;%Cgreen%ci %Cblue%cr%Creset&#8221; $k|head -n 1`\\t$k;done|sort -r