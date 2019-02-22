"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.add = (type, listener, options) => (element) => {
    element.addEventListener(type, listener, options);
    return element;
};
exports.remove = (type, listener, options) => (element) => {
    element.removeEventListener(type, listener, options);
    return element;
};
exports.once = (type, listener, options) => (element) => {
    exports.add(type, listener, Object.assign(options, { once: true }));
    return element;
};
const eventProxy = (type, baseOptions = {}) => new Proxy({}, {
    "get": (target, eventType) => {
        return (listener, options = {}) => (element) => {
            if (type === "add") {
                element.addEventListener(eventType.replace(/\$$/, ""), listener, Object.assign(options, baseOptions));
                return element;
            }
            element.removeEventListener(eventType.replace(/\$$/, ""), listener, Object.assign(options, baseOptions));
            return element;
        };
    }
});
exports.default = {
    add: eventProxy("add"),
    remove: eventProxy("remove"),
    once: eventProxy("add", { once: true })
};
