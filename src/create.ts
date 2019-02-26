import driver$ , {FilterOrElement} from "./driver"
import operation$ from "./operation"
import toKebab from "./to-kebab"
type Create = {
    [key:string] : (...filters:any[]) => HTMLElement
}

export default (d = document , driver = driver$(operation$(d).append)) => (<Create>new Proxy({},{
    get : (target,name) => {
        return (...filters : FilterOrElement[]) => <HTMLElement>driver(d.createElement(toKebab(<string>name)))(...filters)
    }
}))

