"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (d = document) => {
    const toNode = (append) => {
        if (append !== Object(append)) {
            return d.createTextNode(`${append}`);
        }
        return append;
    };
    const append = (...append) => (element) => {
        element.appendChild(append.reduce((flg, a) => {
            flg.appendChild(toNode(a));
            return flg;
        }, d.createDocumentFragment()));
        return element;
    };
    const prepend = (...append) => (element) => {
        element.insertBefore(append.reduce((flg, a) => {
            flg.appendChild(toNode(a));
            return flg;
        }, d.createDocumentFragment()), element.firstChild);
        return element;
    };
    const before = (append, ref) => (element) => {
        element.insertBefore(toNode(append), ref);
        return element;
    };
    const after = (append, ref) => (element) => {
        element.insertBefore(toNode(append), ref.previousSibling);
        return element;
    };
    const replace = (replace, old) => (element) => {
        element.replaceChild(toNode(replace), old);
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
