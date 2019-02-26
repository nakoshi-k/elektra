import { FilterOrElement } from "./driver";
declare type Create = {
    [key: string]: (...filters: any[]) => HTMLElement;
};
declare const _default: (d?: Document, driver?: (nodeLike: import("./driver").NodeLike) => (...filters: FilterOrElement[]) => import("./driver").NodeLike) => Create;
export default _default;
//# sourceMappingURL=create.d.ts.map