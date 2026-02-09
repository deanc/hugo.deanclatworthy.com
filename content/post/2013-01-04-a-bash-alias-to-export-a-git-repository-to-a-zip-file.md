---
title: A bash alias to export a git repository to a zip file
author: Dean
layout: post
url: /2013/01/a-bash-alias-to-export-a-git-repository-to-a-zip-file/
dsq_thread_id:
  - 1009098986
categories:
  - Git
  - Bash
date: 2013-01-04
---
I'll keep this short and sweet. This bash alias will allow you to export your git repo's master branch to a zip file.

To use it:

1.  Make sure that your work is committed.
2.  Make sure you are in the root directory of your project.

To make this script work run the following commands:

```sh
echo alias gitpack=\'git archive --format zip --output download_$(date +%d-%m-%Y-%H.%M).zip master\' >> ~/.bashrc
source ~/.bashrc
```

Now just type `gitpack` and you will get a zip file.