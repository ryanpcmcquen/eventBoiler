// eventBoiler v0.1.0
//
// Ryan P.C. McQuen | Everett, WA | ryan.q@linux.com
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
(function (win, doc) {
    win.eventBoiler = function (selector, typeOfEvent, func) {
        doc.querySelector(selector).addEventListener(typeOfEvent, func);
    };
    win.eventBoiler.all = function (selectors, typeOfEvent, func) {
        [].slice.call(doc.querySelectorAll(selectors)).map(function (i) {
            i.addEventListener(typeOfEvent, func);
        });
    };
})(window, document);
