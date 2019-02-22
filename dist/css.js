"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const add = (...addClass) => {
    return (element) => {
        element.classList.add(...addClass);
        return element;
    };
};
const remove = (...removeClass) => {
    return (element) => {
        element.classList.remove(...removeClass);
        return element;
    };
};
const toggle = (...removeClass) => {
    return (element) => {
        element.classList.remove(...removeClass);
        return element;
    };
};
const class$ = (class$) => {
    return add(...class$.split(" "));
};
const replace = (oldClass, newClass) => {
    return (element) => {
        element.classList.replace(oldClass, newClass);
        return element;
    };
};
const exToggle = (toggleClass, exList) => {
    return (element) => {
        element.classList.remove(...exList.filter(c => c !== toggleClass));
        element.classList.add(toggleClass);
        return element;
    };
};
exports.default = {
    add,
    remove,
    toggle,
    replace,
    exToggle,
    class$
};
