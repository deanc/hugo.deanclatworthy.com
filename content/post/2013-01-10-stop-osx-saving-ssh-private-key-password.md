---
title: Stop OSX saving SSH private key password
author: Dean
layout: post
url: /2013/01/stop-osx-saving-ssh-private-key-password/
dsq_thread_id:
  - 1017930993
categories:
  - OSX
  - SSH
date: 2013-01-10
---
When logging in to a server via SSH using a private key with a password, OSX saves your password. The next time you try to login it will not prompt you for your password. To disable this behaviour simply run this command:

```sh
launchctl unload -w /System/Library/LaunchAgents/org.openbsd.ssh-agent.plist
```

Hat tip to [mr_dbr on reddit][1] for this.

 [1]: http://www.reddit.com/r/apple/comments/9fnnc/ask_rapple_how_do_i_disable_sshagent/c0cmh99