export type EventType = "abort" | "beforeinput" | "blur" | "click"
|"compositionstart" |"compositionupdate" |"compositionend" |"dblclick"
|"error" |"focus" |"focusin" |"focusout" |"input"
|"keydown" |"keypress" |"keyup" |"load" |"mousedown" |"mouseenter"
|"mouseleave" |"mousemove" |"mouseout" |"mouseover" |"mouseup"
|"resize" |"scroll" |"select" |"unload" |"wheel"|"submit"

export interface listenerOption{
    capture?:boolean,
    once?:boolean,
    passive?:boolean
}

export const add = (type : EventType,listener:EventListener,options? : listenerOption) => 
    (element : HTMLElement) => {
        element.addEventListener(type,listener,options)
        return element
    }

export const remove = (type : EventType,listener:EventListener,options? : listenerOption) => 
    (element : HTMLElement) => {
        element.removeEventListener(type,listener,options)
        return element
    }

export const once = (type : EventType,listener:EventListener,options? : listenerOption) => 
    (element : HTMLElement) => {
        add(type,listener,Object.assign(options,{once:true}))
        return element
    }

const eventProxy = (type : "add" | "remove" , baseOptions = {} ) => <{[key:string] : (listener : (e : Event) => void , options? : {}) => HTMLElement}>new Proxy({},{
    "get" : (target,eventType :EventType) => {
        return ( listener : (e : Event) => void , options : {[key:string] : string} = {}) => (element : HTMLElement) => {
            if(type === "add"){
                element.addEventListener(eventType.replace(/\$$/,""),listener,Object.assign(options,baseOptions))
                return element
            }
            element.removeEventListener(eventType.replace(/\$$/,""),listener,Object.assign(options,baseOptions))
            return element
        }
    }
})

export default {
    add : eventProxy("add"),
    remove : eventProxy("remove"),
    once : eventProxy("add",{once:true})
}

