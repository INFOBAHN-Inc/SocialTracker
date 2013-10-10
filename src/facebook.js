/*jslint browser: true, plusplus: true, unparam:true*/
/*global FB, socialInteractionsTracking*/

(function(d, s, id) {

    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/ja_JP/all.js#xfbml=1&appId=" + APP_ID;
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

/**
 * Facebookトラッキング用コード
 * @see http://developers.facebook.com/docs/reference/javascript/FB.Event.subscribe/
 */
(function () {
    'use strict';

    var tmpInitFunction = false;

    // 先に定義があった場合、一時的に退避させる
    if (window.fbAsyncInit) {
        tmpInitFunction = window.fbAsyncInit;
    }

    function track(action, target) {
        socialInteractionsTracking('facebook', action, target);

        if (USE_EVENT) {
            socialEventsTracking('facebook', action, target);
        }
    }

    window.fbAsyncInit = function () {

        if (typeof tmpInitFunction === 'function') {
            tmpInitFunction();
        }

        FB.Event.subscribe('edge.create', function (href, widget) {
            track('like create', href);
        });
        FB.Event.subscribe('edge.remove', function (href, widget) {
            track('like remove', href);
        });
        FB.Event.subscribe('comment.create', function (comment) {
            track('comment create', comment.href);
        });
        FB.Event.subscribe('comment.remove', function (comment) {
            track('comment remove', comment.href);
        });
    };
}());