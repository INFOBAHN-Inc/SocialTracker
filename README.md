# SocialTracker

Facebook, Twitter のウィジェットイベントを Analytics で計測する。


## 初期化

```shell
sudo npm install -g grunt-cli
sudo brew install closure-compiler
npm install
```

## サイト設定

src/defines.js を修正

```js
var ANALYTICS_OPTIONS =  {'cookieDomain': 'none'};
// var ANALYTICS_OPTIONS =  'exmaple.com';

/** @define {string} */
var TRACKING_ID = 'UA-XXXXXXXX-1';

/** @define {string} */
var APP_ID = 'APP_ID';
```

## ビルド

### Grunt でビルド

必要であれば、Gruntfile.js 内の closurePath を修正。

```js
closurePath: '/usr/local/opt/closure-compiler/libexec/',
```

```shell
grunt
```

### Closure Compiler でビルド

```shell
java -jar compiler.jar --output_wrapper '(function() {%output%})();' --js src/defines.js --js src/analytics.js --js src/facebook.js --js src/plusone.js --js src/twitter.js --js_output_file tracking.js
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
