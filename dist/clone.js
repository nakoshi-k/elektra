"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const clone = (target) => {
    return (element) => {
        const clone = target.cloneNode(true);
        element.appendChild(clone);
        return element;
    };
};
exports.default = clone;
