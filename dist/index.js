"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const operation_1 = __importDefault(require("./operation"));
const driver_1 = __importDefault(require("./driver"));
const create_1 = __importDefault(require("./create"));
const bite_1 = __importDefault(require("./bite"));
const css_1 = __importDefault(require("./css"));
const event_1 = __importDefault(require("./event"));
const property_1 = __importDefault(require("./property"));
exports.default = (d = document) => {
    const operation = operation_1.default(d);
    const driver = driver_1.default(operation.append);
    const create = create_1.default(d, driver);
    const bite = bite_1.default(driver);
    const p = event_1.default.add.submit(e => { });
    driver(create.div())(p);
    return {
        operation,
        driver,
        create,
        bite,
        css: css_1.default,
        event: event_1.default,
        property: property_1.default
    };
};
