import operaion from "./operation";
import fakeNodeList,{FakeNodeListInterface as FakeNodeList} from "./fake-node-list"

export type NodeLike = HTMLElement|HTMLCollection|NodeList|Document|FakeNodeList

export type FilterOrElement =  ((element : HTMLElement) => HTMLElement )| HTMLElement

export interface Driver{
    (element : NodeLike) : (...filter : FilterOrElement[]) => NodeLike
}

export interface DriverInit{
    (...filters:FilterOrElement[]) : (noddelike:NodeLike) => NodeLike
}

const drive = (element : HTMLElement , append = operaion(document).append ) => 
    (...filters : FilterOrElement[]) => 
    filters.reduce( (element,filter : any ) => {
        if(typeof filter !=="function" ){
            if(Array.isArray(filter)){
                return append(...filter)(<HTMLElement>element)
            }
            return append(filter)(<HTMLElement>element)
        }
        return filter(element)
    }, element);

export default ( append? : any ) => (nodeLike: NodeLike) =>
    (...filters : FilterOrElement[]) => {
        if(!filters) return ((<HTMLElement>nodeLike)["tagName"] === void 0)
            ? nodeLike
            : fakeNodeList([<Element>nodeLike]);

        [].slice.call( ( (<HTMLElement>nodeLike)["tagName"] === void 0) 
            ? nodeLike
            : fakeNodeList([<Element>nodeLike]) ).forEach( (element:HTMLElement) => {
            drive(element,append)(...filters)
        });
        return <NodeLike>nodeLike
    }

    