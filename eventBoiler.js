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