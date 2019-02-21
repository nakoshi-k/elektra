import _driver , {NodeLike} from "./driver";
import _operation from "./operation"
import {Filter} from "./driver"
export default  (driver = _driver(_operation(document).append) ) => (parent : HTMLElement|Document = document) => {

    const id = (id:string) => (...filters:Filter[]) =>  driver( 
        (() => {
            if(parent === document) return <HTMLElement>parent.getElementById(id.replace(/^\#/gi,""))
            return <HTMLElement>parent.querySelector(`#{id}`)
        }
        )())(...filters)

    const find = (queryString:string) =>
        (...filters:Filter[]) => driver(parent.querySelectorAll(queryString))(...filters)
    
    const name = (name:string) => (...filters : Filter[]) => driver((() => { 
        if(parent === document) return document.getElementsByName(name)
        return parent.querySelectorAll(`[name="${name}"]`)}
    )())(...filters)


    const tag = (name:string) =>
        (...filters:Filter[]) => driver(parent.getElementsByTagName(name))(...filters)
    

    return {
        id,
        find,
        name,
        tag
    }
}
