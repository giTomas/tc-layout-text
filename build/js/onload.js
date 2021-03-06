'use strict';

var Onload = function () {
  "use strict";

  var interval = setInterval(function () {
    if (document.readyState === 'complete') {
      clearInterval(interval);
      // console.log(document.readyState);
      TweenLite.to('#js-page-load', 1, { opacity: 0, display: 'none', ease: Power4.easeOut });
    }
  }, 100);

  return {
    interval: interval
  };
}();

// Onload.interval;