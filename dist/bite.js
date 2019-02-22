"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const driver_1 = __importDefault(require("./driver"));
const operation_1 = __importDefault(require("./operation"));
const createFakeNodeList = (...children) => {
    let positon = 0;
    const fakeNodeList = {
        item: (index) => children[index] || null,
        namedItem: (name) => children.find(child => child.id === name || child.getAttribute("name") === name) || null,
        [Symbol.iterator]: () => {
            const result = (children[positon + 1])
                ? { value: children[positon], done: false }
                : { value: children[positon], done: true };
            positon++;
            return result;
        },
        forEach: (eachFunction) => {
            children.forEach(child => eachFunction(child));
        }
    };
    Object.defineProperty(fakeNodeList, "length", {
        get: () => children.length
    });
    return children.reduce((likeNodeList, child, index) => {
        likeNodeList[index] = child;
        return likeNodeList;
    }, fakeNodeList);
};
exports.default = (driver = driver_1.default(operation_1.default(document).append)) => (parent = document) => {
    const id = (id) => (...filters) => driver((() => {
        if (parent === document) {
            const element = parent.getElementById(id.replace(/^\#/, ""));
            if (element) {
                return createFakeNodeList(element);
            }
            return createFakeNodeList();
        }
        return document.querySelectorAll(`#{id.replace(/^\#/,")}`);
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
