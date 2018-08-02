/*jslint browser:true, white:true*/
/*global window*/
/* eventBoiler v0.2.2 by @ryanpcmcquen */
// https://github.com/ryanpcmcquen/eventBoiler
//
// Ryan P. C. McQuen | Everett, WA | ryanpcmcquen@member.fsf.org
//
// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation; either version 2 of the License, or
// (at your option) any later version, with the following exception:
// the text of the GPL license may be omitted.
//
// This program is distributed in the hope that it will be useful, but
// without any warranty; without even the implied warranty of
// merchantability or fitness for a particular purpose. Compiling,
// interpreting, executing or merely reading the text of the program
// may result in lapses of consciousness and/or very being, up to and
// including the end of all existence and the Universe as we know it.
// See the GNU General Public License for more details.
//
// You may have received a copy of the GNU General Public License along
// with this program (most likely, a file named COPYING).  If not, see
// <https://www.gnu.org/licenses/>.
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
