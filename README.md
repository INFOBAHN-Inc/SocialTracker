# SocialTracker

Facebook, Twitter のウィジェットイベントを Analytics で計測する。


## 初期化

```shell
sudo npm install -g grunt-cli
sudo brew install closure-compiler
npm install
```

必要であれば、Gruntfile.js 内の closurePath を修正。

```js
closurePath: '/usr/local/opt/closure-compiler/libexec/',
```

defines.json を修正

```js
[
    "SITE_DOMAIN=\\'example.com\\'",
    "TRACKING_ID=\\'UA-XXXXXXX-1\\'",
    "APP_ID=\\'XXXXXXXXXXX\\'"
]
```

ビルド

```shell
grunt
```


## 要件

- [Universal Analytics](https://developers.google.com/analytics/devguides/collection/analyticsjs/)
- [Node.js](http://nodejs.org/)
    - [Grunt](http://gruntjs.com/)
- [Closure Compiler Application](https://developers.google.com/closure/compiler/docs/gettingstarted_app?hl=ja)


## 参考資料

- [Social Interactions - Web Tracking (analytics.js)](https://developers.google.com/analytics/devguides/collection/analyticsjs/social-interactions)
- [JavaScript Interfaces for Twitter for Websites](https://dev.twitter.com/docs/intents/events)
- [FB.Event.subscribe](https://developers.facebook.com/docs/reference/javascript/FB.Event.subscribe/)
