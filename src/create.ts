import driver$ , {Filter} from "./driver"
import operation$ from "./operation"
interface create {
    [key:string] : (...filters:any[]) => HTMLElement
}

export default (d = document , driver = driver$(operation$(d).append)) => <create>new Proxy({},{
    get : (target,name) => {
        return (...filters : Filter[]) => <HTMLElement>driver(d.createElement(<string>name))(...filters)
    }
})
