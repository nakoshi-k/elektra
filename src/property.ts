import toKebab from "./to-kebab"
export default <{[key:string] : (value : string) => HTMLElement}>new Proxy({},{
        "get" : (target,name) => {
            return (value : string) => (element : HTMLElement) => {
                element.setAttribute(toKebab(<string>name),value)
                return element
            }
        }
    })


