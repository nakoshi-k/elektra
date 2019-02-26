declare const _default: (d?: Document) => {
    toNode: (element: string | Element | HTMLElement, clone?: boolean) => Node;
    append: (...append: (string | Element | HTMLElement)[]) => (element: HTMLElement, clone?: boolean) => HTMLElement;
    prepend: (...append: (string | Element | HTMLElement)[]) => (element: HTMLElement, clone?: boolean) => HTMLElement;
    before: (append: HTMLElement, ref: HTMLElement) => (element: HTMLElement, clone?: boolean) => HTMLElement;
    after: (append: HTMLElement, ref: HTMLElement) => (element: HTMLElement, clone?: boolean) => HTMLElement;
    replace: (replace: string | Element | HTMLElement, old: Element | HTMLElement) => (element: HTMLElement, clone?: boolean) => HTMLElement;
};
export default _default;
//# sourceMappingURL=operation.d.ts.map