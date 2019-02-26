"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (d = document) => {
    const toNode = (element, clone = true) => {
        if (element !== Object(element)) {
            return d.createTextNode(`${element}`);
        }
        if (clone) {
            return element.cloneNode(true);
        }
        return element;
    };
    const append = (...append) => (element, clone = true) => {
        element.appendChild(append.reduce((flg, a) => {
            flg.appendChild(toNode(a, clone));
            return flg;
        }, d.createDocumentFragment()));
        return element;
    };
    const prepend = (...append) => (element, clone = true) => {
        element.insertBefore(append.reduce((flg, a) => {
            flg.appendChild(toNode(a, clone));
            return flg;
        }, d.createDocumentFragment()), element.firstChild);
        return element;
    };
    const before = (append, ref) => (element, clone = true) => {
        element.insertBefore(toNode(append, clone), ref);
        return element;
    };
    const after = (append, ref) => (element, clone = true) => {
        element.insertBefore(toNode(append, clone), ref.previousSibling);
        return element;
    };
    const replace = (replace, old) => (element, clone = true) => {
        element.replaceChild(toNode(replace, true), old);
        return element;
    };
    return {
        toNode,
        append,
        prepend,
        before,
        after,
        replace
    };
};
