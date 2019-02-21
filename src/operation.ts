

export default (d = document) => {

    const toNode = (append : HTMLElement|Element|string) => {
        if( append !== Object(append)){
            return d.createTextNode(`${append}`)
        }
        return <Element|HTMLElement>append
    }
    
    const append = (...append : (HTMLElement|Element|string)[]) => 
        (element : HTMLElement) => {
    
            element.appendChild( append.reduce((flg,a) => {
            flg.appendChild(toNode(a))
            return flg
    
        },d.createDocumentFragment()))
        return element;
    }
    

    const prepend = (...append : (HTMLElement|Element|string)[]) =>
        (element : HTMLElement) => {
        
        element.insertBefore( append.reduce((flg,a) => {
            flg.appendChild(toNode(a))
            return flg
        },d.createDocumentFragment()) , element.firstChild)
    
        return element
    } 
    
    const before = (append : HTMLElement,ref:HTMLElement) =>
        (element : HTMLElement) => {
            element.insertBefore(toNode(append),ref)
            return element
        }
    
    const after = (append : HTMLElement,ref:HTMLElement) =>
        (element : HTMLElement) => {
            element.insertBefore(toNode(append),ref.previousSibling)
            return element
        }
    
    const replace = (replace: HTMLElement|Element|string,old : Element |HTMLElement) =>
        (element : HTMLElement) => {
            element.replaceChild( toNode(replace) ,old )
            return element
        }


    return {
        toNode,
        append,
        prepend,
        before,
        after,
        replace
    }
}