/*jslint browser: true, plusplus: true, unparam:true*/
/*global twttr, ga, unescape, console*/
twttr = (function (d, s, id) {
    var t, js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) { return; }
    js = d.createElement(s);
    js.id = id;
    js.src = '//platform.twitter.com/widgets.js';
    fjs.parentNode.insertBefore(js, fjs);
    return window.twttr || (t = { _e: [], ready: function(f){ t._e.push(f) } });
}(document, 'script', 'twitter-wjs'));

/**
 * Twitter トラッキング用コード
 * 公式ウィジェット (//platform.twitter.com/widgets.js) 読み込み後に実行
 * @see https://dev.twitter.com/docs/intents/events
 */
(function () {
    'use strict';

    function extractParamFromUri(uri, paramName) {
        if (!uri) {
            return;
        }
        var regex   = new RegExp('[\\?&#]' + paramName + '=([^&#]*)'),
            params  = regex.exec(uri);

        if (params !== null) {
            return unescape(params[1]);
        }
        return;
    }

    function track(action, target) {
        ga('send', 'social', 'twitter', action, target);
    }

    twttr.ready(function (twttr) {
        twttr.events.bind('tweet', function (event) {
            var tweeted = extractParamFromUri(event.target.src, 'url');
            track('tweet', tweeted);
        });
        twttr.events.bind('follow', function (event) {
            var screen_name = extractParamFromUri(event.target.src, 'screen_name');
            track('follow', screen_name);
        });
    });
}());
