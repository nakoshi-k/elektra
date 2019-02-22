window["elektra"] =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/bite.ts":
/*!*********************!*\
  !*** ./src/bite.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const driver_1 = __importDefault(__webpack_require__(/*! ./driver */ "./src/driver.ts"));
const operation_1 = __importDefault(__webpack_require__(/*! ./operation */ "./src/operation.ts"));
const fake_node_list_1 = __importDefault(__webpack_require__(/*! ./fake-node-list */ "./src/fake-node-list.ts"));
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


/***/ }),

/***/ "./src/clone.ts":
/*!**********************!*\
  !*** ./src/clone.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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


/***/ }),

/***/ "./src/create.ts":
/*!***********************!*\
  !*** ./src/create.ts ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const driver_1 = __importDefault(__webpack_require__(/*! ./driver */ "./src/driver.ts"));
const operation_1 = __importDefault(__webpack_require__(/*! ./operation */ "./src/operation.ts"));
const to_kebab_1 = __importDefault(__webpack_require__(/*! ./to-kebab */ "./src/to-kebab.ts"));
exports.default = (d = document, driver = driver_1.default(operation_1.default(d).append)) => new Proxy({}, {
    get: (target, name) => {
        return (...filters) => driver(d.createElement(to_kebab_1.default(name)))(...filters);
    }
});


/***/ }),

/***/ "./src/css.ts":
/*!********************!*\
  !*** ./src/css.ts ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const add = (...addClass) => {
    return (element) => {
        element.classList.add(...addClass);
        return element;
    };
};
const remove = (...removeClass) => {
    return (element) => {
        element.classList.remove(...removeClass);
        return element;
    };
};
const toggle = (...removeClass) => {
    return (element) => {
        element.classList.remove(...removeClass);
        return element;
    };
};
const class$ = (class$) => {
    return add(...class$.split(" "));
};
const replace = (oldClass, newClass) => {
    return (element) => {
        element.classList.replace(oldClass, newClass);
        return element;
    };
};
const exToggle = (toggleClass, exList) => {
    return (element) => {
        element.classList.remove(...exList.filter(c => c !== toggleClass));
        element.classList.add(toggleClass);
        return element;
    };
};
exports.default = {
    add,
    remove,
    toggle,
    replace,
    exToggle,
    class$
};


/***/ }),

/***/ "./src/driver.ts":
/*!***********************!*\
  !*** ./src/driver.ts ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const operation_1 = __importDefault(__webpack_require__(/*! ./operation */ "./src/operation.ts"));
const fake_node_list_1 = __importDefault(__webpack_require__(/*! ./fake-node-list */ "./src/fake-node-list.ts"));
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


/***/ }),

/***/ "./src/event.ts":
/*!**********************!*\
  !*** ./src/event.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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


/***/ }),

/***/ "./src/fake-node-list.ts":
/*!*******************************!*\
  !*** ./src/fake-node-list.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class FakeNodeList {
    constructor(items) {
        this.current = 0;
        this.items = [];
        this.item = (index) => this.items[index] || null;
        this.namedItem = (name) => this.items.find(item => item.id === name || item.getAttribute("name") === name) || null;
        this.forEach = (eachFunction) => this.items.forEach((item, index, items) => eachFunction(item, index, items));
        this[Symbol.iterator] = () => {
            const result = (this.items[this.current + 1])
                ? { value: this.items[this.current], done: false }
                : { value: this.items[this.current], done: true };
            this.current++;
            return result;
        };
        this.items = [...this.items, ...items];
        items.forEach((item, index) => {
            this[index] = item;
        });
    }
    get length() {
        return this.items.length;
    }
}
exports.default = (items) => new FakeNodeList(items);


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const operation_1 = __importDefault(__webpack_require__(/*! ./operation */ "./src/operation.ts"));
const driver_1 = __importDefault(__webpack_require__(/*! ./driver */ "./src/driver.ts"));
const create_1 = __importDefault(__webpack_require__(/*! ./create */ "./src/create.ts"));
const bite_1 = __importDefault(__webpack_require__(/*! ./bite */ "./src/bite.ts"));
const css_1 = __importDefault(__webpack_require__(/*! ./css */ "./src/css.ts"));
const event_1 = __importDefault(__webpack_require__(/*! ./event */ "./src/event.ts"));
const property_1 = __importDefault(__webpack_require__(/*! ./property */ "./src/property.ts"));
const clone_1 = __importDefault(__webpack_require__(/*! ./clone */ "./src/clone.ts"));
exports.default = (d = document) => {
    const operation = operation_1.default(d);
    const driver = driver_1.default(operation.append);
    const create = create_1.default(d, driver);
    const bite = bite_1.default(driver);
    return {
        operation,
        driver,
        create,
        bite,
        css: css_1.default,
        event: event_1.default,
        property: property_1.default,
        clone: clone_1.default
    };
};


/***/ }),

/***/ "./src/operation.ts":
/*!**************************!*\
  !*** ./src/operation.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (d = document) => {
    const toNode = (append) => {
        if (append !== Object(append)) {
            return d.createTextNode(`${append}`);
        }
        return append;
    };
    const append = (...append) => (element) => {
        element.appendChild(append.reduce((flg, a) => {
            flg.appendChild(toNode(a));
            return flg;
        }, d.createDocumentFragment()));
        return element;
    };
    const prepend = (...append) => (element) => {
        element.insertBefore(append.reduce((flg, a) => {
            flg.appendChild(toNode(a));
            return flg;
        }, d.createDocumentFragment()), element.firstChild);
        return element;
    };
    const before = (append, ref) => (element) => {
        element.insertBefore(toNode(append), ref);
        return element;
    };
    const after = (append, ref) => (element) => {
        element.insertBefore(toNode(append), ref.previousSibling);
        return element;
    };
    const replace = (replace, old) => (element) => {
        element.replaceChild(toNode(replace), old);
        return element;
    };
    return {
        toNode,
        append,
        prepend,
        before,
        after,
        replace
    };
};


/***/ }),

/***/ "./src/property.ts":
/*!*************************!*\
  !*** ./src/property.ts ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const to_kebab_1 = __importDefault(__webpack_require__(/*! ./to-kebab */ "./src/to-kebab.ts"));
exports.default = new Proxy({}, {
    "get": (target, name) => {
        return (value) => (element) => {
            element.setAttribute(to_kebab_1.default(name), value);
            return element;
        };
    }
});


/***/ }),

/***/ "./src/to-kebab.ts":
/*!*************************!*\
  !*** ./src/to-kebab.ts ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const toKebab = (str) => {
    return str.replace(/([^_-])([A-Z])/g, "$1-$2")
        .replace(/_/gi, "-").toLowerCase();
};
exports.default = toKebab;


/***/ })

/******/ })["default"];