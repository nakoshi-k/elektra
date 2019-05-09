

export default (d = document) => {

    const toNode = (element : HTMLElement|Element|string,clone = false) => {
        if( element !== Object(element)){
            return d.createTextNode(`${element}`)
        }
        if(clone){
            return (<Element|HTMLElement>element).cloneNode(true)
        }
        return <Element|HTMLElement>element
    }
    
    const append = (...append : (HTMLElement|Element|string)[]) => 
        (element : HTMLElement ,clone = false) => {
    
            element.appendChild( append.reduce((flg,a) => {
            flg.appendChild(toNode(a,clone))
            return flg
    
        },d.createDocumentFragment()))
        return element;
    }
    
    const prepend = (...append : (HTMLElement|Element|string)[]) =>
        (element : HTMLElement,clone = false) => {
        element.insertBefore( append.reduce((flg,a) => {
            flg.appendChild(toNode(a , clone))
            return flg
        },d.createDocumentFragment()) , element.firstChild)
        return element
    } 
    
    const before = (append : HTMLElement,ref:HTMLElement) =>
        (element : HTMLElement,clone = false) => {
            element.insertBefore(toNode(append,clone),ref)
            return element
        }
    
    const after = (append : HTMLElement,ref:HTMLElement) =>
        (element : HTMLElement , clone = false) => {
            element.insertBefore(toNode(append,clone),ref.previousSibling)
            return element
        }
    
    const replace = (replace: HTMLElement|Element|string,old : Element |HTMLElement) =>
        (element : HTMLElement,clone = false) => {
            element.replaceChild( toNode(replace,clone) ,old )
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