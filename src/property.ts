const toKebab = (str : string) => {
    return str.replace(/([^_-])([A-Z])/g,"$1-$2")
    .replace(/_/gi,"-").toLowerCase()
}

export default <{[key:string] : (value : string) => HTMLElement}>new Proxy({},{
        "get" : (target,name) => {
            return (value : string) => (element : HTMLElement) => {
                element.setAttribute(toKebab(<string>name),value)
                return element
            }
        }
    })


