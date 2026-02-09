---
layout: post
title: "Stream live BBC channels in HD using streamlink"
description: ""
category:
url: /2022/02/17/live-bbc-channels-in-720p-hd/
tags: [bbc,hd,720p,streamlink,macos]
date: 2022-02-17
---

Been trying to watch a live event on iPlayer in your browser only to have low quality streaming? It
seems that the BBC iPlayer browser client doesn't support above 480p. Fortunately there's a solution.



Install streamlink @ https://streamlink.github.io/install.html

Install VLC player @ https://videolan.org

Create an account on the BBC website and take note of your credentials. Create the following script
and name it `bbc1.sh`:

```sh
streamlink https://www.bbc.co.uk/iplayer/live/bbcone 720p \
    --bbciplayer-hd \ 
    --bbciplayer-username=user@example.com \
    --bbciplayer-password=yourpassword
```

Save it and `chmod +x bbc1.sh`. Usage: `./bbc1.sh`. This'll open VLC and stream BBC1 in HD.

To watch BBC2 just change `bbcone` to `bbctwo` (I suggest making a `bbc2.sh` script or parameterize the script yourself).

I haven't yet found a way to pipe the output of this over airplay to a receiever. If anyone has any suggestions I'd love to hear them as currently
I'm only able to mirror using my macbook's screen sharing to my tv (via airplay).
