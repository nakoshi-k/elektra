"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const operation_1 = __importDefault(require("./operation"));
const drive = (element, append = operation_1.default(document).append) => (...filters) => filters.reduce((element, filter) => {
    if (typeof filter !== "function") {
        if (Array.isArray(filter)) {
            return append(...filter)(element);
        }
        return append(filter)(element);
    }
    return filter(element);
}, element);
exports.default = (append) => (nodeLike) => (...filters) => {
    if (!filters)
        return nodeLike;
    [].slice.call((nodeLike["tagName"] === void 0) ? nodeLike : [nodeLike]).forEach((element) => {
        drive(element, append)(...filters);
    });
    return nodeLike;
};
