import { FilterOrElement } from "./driver";
declare const _default: (driver?: (nodeLike: import("./driver").NodeLike) => (...filters: FilterOrElement[]) => import("./driver").NodeLike) => (parent?: HTMLElement | Document) => {
    id: (id: string) => (...filters: FilterOrElement[]) => import("./driver").NodeLike;
    find: (queryString: string) => (...filters: FilterOrElement[]) => import("./driver").NodeLike;
    name: (name: string) => (...filters: FilterOrElement[]) => import("./driver").NodeLike;
    tag: (name: string) => (...filters: FilterOrElement[]) => import("./driver").NodeLike;
    drive: (...filters: FilterOrElement[]) => import("./driver").NodeLike;
};
export default _default;
//# sourceMappingURL=bite.d.ts.map