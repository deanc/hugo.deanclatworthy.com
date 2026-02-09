---
title: Getting a twitter user's latest posts using API v1.1 and Guzzle (PHP)
author: Dean
layout: post
url: /2013/07/getting-a-twitter-users-latest-posts-using-api-v1-1-and-guzzle-php/
dsq_thread_id:
  - 1501890360
categories:
  - PHP
  - Twitter
date: 2013-07-15
---
I'll keep this brief. Install [Guzzle][1] however you wish, but I recommend using composer:

```js
{
    "require": {
        "guzzle/guzzle": "~3.1.1"
    }
}
```

Then use the following code:

```php
$twitter_client = new \Guzzle\Http\Client('https://api.twitter.com/{version}', array(
    'version' => '1.1'
));
$twitter_client->addSubscriber(new \Guzzle\Plugin\Oauth\OauthPlugin(array(
    'consumer_key'  => TWITTER_CONSUMER_KEY,
    'consumer_secret' => TWITTER_CONSUMER_SECRET,
    'token'       => TWITTER_ACCESS_TOKEN,
    'token_secret'  => TWITTER_ACCESS_TOKEN_SECRET
)));

$request = $twitter_client->get('statuses/user_timeline.json');
$request->getQuery()->set('count', 5);
$request->getQuery()->set('screen_name', 'YOURUSERNAME');
$response = $request->send();

$tweets = json_decode($response->getBody());
```

Don't forget to put your constants somewhere.

[1]: http://guzzlephp.org/index.html