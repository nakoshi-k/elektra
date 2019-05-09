"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (d = document) => {
    const toNode = (element, clone = false) => {
        if (element !== Object(element)) {
            return d.createTextNode(`${element}`);
        }
        if (clone) {
            return element.cloneNode(true);
        }
        return element;
    };
    const append = (...append) => (element, clone = false) => {
        element.appendChild(append.reduce((flg, a) => {
            flg.appendChild(toNode(a, clone));
            return flg;
        }, d.createDocumentFragment()));
        return element;
    };
    const prepend = (...append) => (element, clone = false) => {
        element.insertBefore(append.reduce((flg, a) => {
            flg.appendChild(toNode(a, clone));
            return flg;
        }, d.createDocumentFragment()), element.firstChild);
        return element;
    };
    const before = (append, ref) => (element, clone = false) => {
        element.insertBefore(toNode(append, clone), ref);
        return element;
    };
    const after = (append, ref) => (element, clone = false) => {
        element.insertBefore(toNode(append, clone), ref.previousSibling);
        return element;
    };
    const replace = (replace, old) => (element, clone = false) => {
        element.replaceChild(toNode(replace, clone), old);
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
