"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const driver_1 = __importDefault(require("./driver"));
const operation_1 = __importDefault(require("./operation"));
const fake_node_list_1 = __importDefault(require("./fake-node-list"));
exports.default = (driver = driver_1.default(operation_1.default(document).append)) => (parent = document) => {
    const id = (id) => (...filters) => driver((() => {
        if (parent === document) {
            const element = parent.getElementById(id.replace(/^\#/, ""));
            if (element) {
                return fake_node_list_1.default([element]);
            }
            return fake_node_list_1.default([]);
        }
        return document.querySelectorAll(`#${id.replace(/^\#/, "")}`);
    })())(...filters);
    const find = (queryString) => (...filters) => driver(parent.querySelectorAll(queryString))(...filters);
    const name = (name) => (...filters) => driver((() => {
        if (parent === document)
            return document.getElementsByName(name);
        return parent.querySelectorAll(`[name="${name}"]`);
    })())(...filters);
    const tag = (name) => (...filters) => driver(parent.getElementsByTagName(name))(...filters);
    return {
        id,
        find,
        name,
        tag
    };
};
