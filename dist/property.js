"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const to_kebab_1 = __importDefault(require("./to-kebab"));
exports.default = new Proxy({}, {
    "get": (target, name) => {
        return (value) => (element) => {
            element.setAttribute(to_kebab_1.default(name), value);
            return element;
        };
    }
});
