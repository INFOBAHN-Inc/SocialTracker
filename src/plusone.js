/*jslint browser: true, plusplus: true, unparam:true*/
/*global socialInteractionsTracking*/

/**
 * @see https://developers.google.com/+/web/+1button/?hl=ja
 */
(function () {
    'use strict';

    function getElementsByClassName(targetClass) {
        var foundElements = [],
            allElements,
            i = 0,
            j = 0;

        if (document.getElementsByClassName) {
            return document.getElementsByClassName(targetClass);
        }

        if (document.all) {
            allElements = document.all;
        } else {
            allElements = document.getElementsByTagName("*");
        }

        for (i = 0; i < allElements.length; i++) {
            if (allElements[i].className === targetClass) {
                foundElements[j] = allElements[i];
                j++;
            }
        }

        return foundElements;
    }

    var el1 = document.getElementsByTagName('g:plusone'),
        el2 = getElementsByClassName('g-plusone');

    window.gapicallback = function (obj) {
        var action = '+1';

        if (obj.state === 'off') {
            action = '+1 remove';
        }

        if (USE_EVENT) {
            socialEventsTracking('Google', action, obj.href);
        }
    };

    function setCallback(elements, name) {
        var i;

        for (i = 0; i < elements.length; i++) {
            elements[i].setAttribute(name, 'gapicallback');
        }
    }

    setCallback(el1, 'callback');
    setCallback(el2, 'data-callback');
}());

window.___gcfg = {lang: 'ja'};

(function() {
  var po = document.createElement('script'); po.type = 'text/javascript'; po.async = true;
  po.src = 'https://apis.google.com/js/plusone.js';
  var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(po, s);
})();