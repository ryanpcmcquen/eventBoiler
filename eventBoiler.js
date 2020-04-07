/*jslint browser:true, white:true*/
/*global window*/
/* eventBoiler v0.2.2 by @ryanpcmcquen */
// https://github.com/ryanpcmcquen/eventBoiler
//
// Ryan P. C. McQuen | Everett, WA

(function() {
  'use strict';
  // taken from odis: https://github.com/ryanpcmcquen/odis
  var odis = {
    /* odis v0.1.2 by ryanpcmcquen */
    throttle: function(func, delay) {
      // nod to Douglas Adams  ;^)
      delay = delay || 42;
      var waiting = false,
        funcTimeoutId;
      return function() {
        if (!waiting) {
          // very similar to debounce, but 'waiting'
          // allows execution while being called
          waiting = true;
          clearTimeout(funcTimeoutId);
          funcTimeoutId = setTimeout(function() {
            func.call();
            waiting = false;
          }, delay);
        }
      };
    }
  };
  var eventBoiler = function(selector, typeOfEvent, func, throttle) {
    throttle = throttle || true;
    if (throttle) {
      document.querySelector(selector).addEventListener(typeOfEvent, odis.throttle(func));
    } else {
      document.querySelector(selector).addEventListener(typeOfEvent, func);
    }
  };
  eventBoiler.all = function(selectors, typeOfEvent, func, throttle) {
    throttle = throttle || true;
    if (throttle) {
      Array.prototype.slice.call(document.querySelectorAll(selectors)).map(function(i) {
        i.addEventListener(typeOfEvent, odis.throttle(func));
      });
    } else {
      Array.prototype.slice.call(document.querySelectorAll(selectors)).map(function(i) {
        i.addEventListener(typeOfEvent, func);
      });
    }
  };
  // attach eventBoiler globally and shorten
  window.evBo = eventBoiler;
}());
