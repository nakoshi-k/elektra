import { FakeNodeListInterface as FakeNodeList } from "./fake-node-list";
export declare type NodeLike = HTMLElement | HTMLCollection | NodeList | Document | FakeNodeList;
export declare type FilterOrElement = ((element: HTMLElement) => HTMLElement) | HTMLElement;
export interface Driver {
    (element: NodeLike): (...filter: FilterOrElement[]) => NodeLike;
}
export interface DriverInit {
    (...filters: FilterOrElement[]): (noddelike: NodeLike) => NodeLike;
}
declare const _default: (append?: any) => (nodeLike: NodeLike) => (...filters: FilterOrElement[]) => NodeLike;
export default _default;
//# sourceMappingURL=driver.d.ts.map