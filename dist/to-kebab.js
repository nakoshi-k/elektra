"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const toKebab = (str) => {
    return str.replace(/([^_-])([A-Z])/g, "$1-$2")
        .replace(/_/gi, "-").toLowerCase();
};
exports.default = toKebab;
