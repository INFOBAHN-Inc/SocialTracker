# SocialTracker

Facebook, Twitter のウィジェットイベントを Analytics で計測する。

## 設定

src/defines.js を修正

```js
var ANALYTICS_OPTIONS =  {'cookieDomain': 'none'};
// var ANALYTICS_OPTIONS =  'exmaple.com';

/** @define {string} */
var TRACKING_ID = 'UA-XXXXXXXX-1';

/** @define {string} */
var APP_ID = 'APP_ID';
```

## Closure Compiler でビルド

```shell
java -jar compiler.jar --output_wrapper '(function(){%output%}());' --js src/defines.js --js src/analytics.js --js src/facebook.js --js src/plusone.js --js src/twitter.js --js_output_file tracking.js
```

## HTML 埋め込み

### 既存のSNSコードを削除

Analytics

```
<script type="text/javascript">
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-XXXXXXXX-1', 'example.com');
ga('send', 'pageview');
</script>
```

Twitter

```
<script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+"://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");</script>
```

Facebook

```
<script type="text/javascript">
(function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/ja_JP/all.js#xfbml=1&appId=XXXX";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));
</script>
```

※ `<div id="fb-root"></div>` は残す

### tracking.js の埋め込み

ビルドしたコードを `</body>` の上へ貼付ける

```
<script src="/path/to/tracking.js"></script>
```

## 要件

- [Universal Analytics](https://developers.google.com/analytics/devguides/collection/analyticsjs/)
- [Closure Compiler Application](https://developers.google.com/closure/compiler/docs/gettingstarted_app?hl=ja)


## 参考資料

- [Social Interactions - Web Tracking (analytics.js)](https://developers.google.com/analytics/devguides/collection/analyticsjs/social-interactions)
- [JavaScript Interfaces for Twitter for Websites](https://dev.twitter.com/docs/intents/events)
- [FB.Event.subscribe](https://developers.facebook.com/docs/reference/javascript/FB.Event.subscribe/)
