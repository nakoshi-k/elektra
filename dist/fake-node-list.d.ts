declare type ForEachCallback = (element: Element, key: number, elements: Element[]) => void;
export interface FakeNodeListInterface {
    [key: number]: Element;
    item: (index: number) => Element | null;
    length: number;
    namedItem: (name: string) => Element | null;
    [Symbol.iterator]: () => {
        next: () => {
            value: Element;
            done: boolean;
        };
    };
    forEach: (eachFunction: ForEachCallback) => void;
}
declare class FakeNodeList implements FakeNodeListInterface {
    private current;
    private items;
    constructor(items: Element[]);
    readonly length: number;
    item: (index: number) => Element;
    namedItem: (name: string) => Element | null;
    forEach: (eachFunction: ForEachCallback) => void;
    [Symbol.iterator]: () => {
        next: () => {
            value: Element;
            done: boolean;
        };
    };
    [key: number]: Element;
}
declare const _default: (items: Element[]) => FakeNodeList;
export default _default;
//# sourceMappingURL=fake-node-list.d.ts.map