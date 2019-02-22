"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const driver_1 = __importDefault(require("./driver"));
const operation_1 = __importDefault(require("./operation"));
const to_kebab_1 = __importDefault(require("./to-kebab"));
exports.default = (d = document, driver = driver_1.default(operation_1.default(d).append)) => new Proxy({}, {
    get: (target, name) => {
        return (...filters) => driver(d.createElement(to_kebab_1.default(name)))(...filters);
    }
});
