import operaion from "./operation";
export type NodeLike = HTMLElement|HTMLCollection|NodeList|Document

export type Filter = (element : HTMLElement) => HTMLElement|HTMLElement|string

export interface Driver{
    (element : NodeLike) : (...filter : Filter[]) => NodeLike
}

export interface DriverInit{
    (...filters:Filter[]) : (noddelike:NodeLike) => NodeLike
}

const drive = (element : HTMLElement , append = operaion(document).append ) => 
    (...filters : Filter[]) => 
    filters.reduce( (element,filter : any ) => {
        
        if(typeof filter !=="function" ){
            if(Array.isArray(filter)){
                return append(...filter)(element)
            }
            return append(filter)(element)
        }

        return filter(element)
    }, element);

export default ( append? : any ) => (nl: NodeLike) =>
    (...filters : Filter[]) => {
        if(!filters) return nl;

        [].slice.call( ( (<HTMLElement>nl)["tagName"] === void 0) ? nl : [nl] ).forEach(element => {
            drive(element,append)(...filters)
        });
        return <NodeLike>nl
    }
