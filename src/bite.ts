import $driver from "./driver";
import $operation , {} from "./operation"
import {FilterOrElement} from "./driver"
import fakeNodeList from "./fake-node-list"
export default  (driver = $driver($operation(document).append) ) => (parent : HTMLElement|Document = document) => {

    const id = (id:string) => (...filters:FilterOrElement[]) =>  driver( 
        (() => {
           if(parent === document){
                const element = (<Document>parent).getElementById(id.replace(/^\#/,""));
                if(element){
                    return fakeNodeList([element]);
                }
                return fakeNodeList([]);
           } 
           return document.querySelectorAll(`#${id.replace(/^\#/,"")}`)
        }
        )())(...filters)

    const find = (queryString:string) =>
        (...filters:FilterOrElement[]) => driver(parent.querySelectorAll(queryString))(...filters)
    
    const name = (name:string) => (...filters : FilterOrElement[]) => driver((() => { 
        if(parent === document) return document.getElementsByName(name)
        return parent.querySelectorAll(`[name="${name}"]`)}
    )())(...filters)


    const tag = (name:string) =>
        (...filters:FilterOrElement[]) => driver(parent.getElementsByTagName(name))(...filters)
    
    return {
        id,
        find,
        name,
        tag,
        drive : (...filters:FilterOrElement[]) => {
            return driver(parent)(...filters)
        }
    }
}
