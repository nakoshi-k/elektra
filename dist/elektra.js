window["elektra"] =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"app": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	var jsonpArray = window["webpackJsonpelektra"] = window["webpackJsonpelektra"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/index.ts","vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
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
        tag,
        drive: (...filters) => {
            return driver(parent)(...filters);
        }
    };
};


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
            return {
                next: () => {
                    const result = (this.items[this.current + 1])
                        ? { value: this.items[this.current], done: false }
                        : { value: this.items[this.current], done: true };
                    this.current++;
                    return result;
                }
            };
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
__webpack_require__(/*! proxy-polyfill */ "./node_modules/proxy-polyfill/src/index.js");
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
        property: property_1.default
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
    const toNode = (element, clone = true) => {
        if (element !== Object(element)) {
            return d.createTextNode(`${element}`);
        }
        if (clone) {
            return element.cloneNode(true);
        }
        return element;
    };
    const append = (...append) => (element, clone = true) => {
        element.appendChild(append.reduce((flg, a) => {
            flg.appendChild(toNode(a, clone));
            return flg;
        }, d.createDocumentFragment()));
        return element;
    };
    const prepend = (...append) => (element, clone = true) => {
        element.insertBefore(append.reduce((flg, a) => {
            flg.appendChild(toNode(a, clone));
            return flg;
        }, d.createDocumentFragment()), element.firstChild);
        return element;
    };
    const before = (append, ref) => (element, clone = true) => {
        element.insertBefore(toNode(append, clone), ref);
        return element;
    };
    const after = (append, ref) => (element, clone = true) => {
        element.insertBefore(toNode(append, clone), ref.previousSibling);
        return element;
    };
    const replace = (replace, old) => (element, clone = true) => {
        element.replaceChild(toNode(replace, true), old);
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