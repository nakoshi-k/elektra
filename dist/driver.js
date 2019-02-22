"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const operation_1 = __importDefault(require("./operation"));
const fake_node_list_1 = __importDefault(require("./fake-node-list"));
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
        return (nodeLike["tagName"] === void 0)
            ? nodeLike
            : fake_node_list_1.default([nodeLike]);
    [].slice.call((nodeLike["tagName"] === void 0)
        ? nodeLike
        : fake_node_list_1.default([nodeLike])).forEach((element) => {
        drive(element, append)(...filters);
    });
    return nodeLike;
};
