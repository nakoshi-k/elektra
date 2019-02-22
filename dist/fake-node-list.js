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
