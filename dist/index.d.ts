declare const _default: (d?: Document) => {
    operation: {
        toNode: (element: string | Element | HTMLElement, clone?: boolean) => Node;
        append: (...append: (string | Element | HTMLElement)[]) => (element: HTMLElement, clone?: boolean) => HTMLElement;
        prepend: (...append: (string | Element | HTMLElement)[]) => (element: HTMLElement, clone?: boolean) => HTMLElement;
        before: (append: HTMLElement, ref: HTMLElement) => (element: HTMLElement, clone?: boolean) => HTMLElement;
        after: (append: HTMLElement, ref: HTMLElement) => (element: HTMLElement, clone?: boolean) => HTMLElement;
        replace: (replace: string | Element | HTMLElement, old: Element | HTMLElement) => (element: HTMLElement, clone?: boolean) => HTMLElement;
    };
    driver: (nodeLike: import("./driver").NodeLike) => (...filters: import("./driver").FilterOrElement[]) => import("./driver").NodeLike;
    create: {
        [key: string]: (...filters: any[]) => HTMLElement;
    };
    bite: (parent?: HTMLElement | Document) => {
        id: (id: string) => (...filters: import("./driver").FilterOrElement[]) => import("./driver").NodeLike;
        find: (queryString: string) => (...filters: import("./driver").FilterOrElement[]) => import("./driver").NodeLike;
        name: (name: string) => (...filters: import("./driver").FilterOrElement[]) => import("./driver").NodeLike;
        tag: (name: string) => (...filters: import("./driver").FilterOrElement[]) => import("./driver").NodeLike;
        drive: (...filters: import("./driver").FilterOrElement[]) => import("./driver").NodeLike;
    };
    css: {
        add: (...addClass: string[]) => (element: HTMLElement) => HTMLElement;
        remove: (...removeClass: string[]) => (element: HTMLElement) => HTMLElement;
        toggle: (...removeClass: string[]) => (element: HTMLElement) => HTMLElement;
        replace: (oldClass: string, newClass: string) => (element: HTMLElement) => HTMLElement;
        exToggle: (toggleClass: string, exList: string[]) => (element: HTMLElement) => HTMLElement;
        class$: (class$: string) => (element: HTMLElement) => HTMLElement;
    };
    event: {
        add: {
            [key: string]: (listener: (e: Event) => void, options?: {} | undefined) => HTMLElement;
        };
        remove: {
            [key: string]: (listener: (e: Event) => void, options?: {} | undefined) => HTMLElement;
        };
        once: {
            [key: string]: (listener: (e: Event) => void, options?: {} | undefined) => HTMLElement;
        };
    };
    property: {
        [key: string]: (value: string) => HTMLElement;
    };
};
export default _default;
//# sourceMappingURL=index.d.ts.map