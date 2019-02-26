

export default (d = document) => {

    const toNode = (element : HTMLElement|Element|string,clone = true) => {
        if( element !== Object(element)){
            return d.createTextNode(`${element}`)
        }
        if(clone){
            return (<Element|HTMLElement>element).cloneNode(true)
        }
        return <Element|HTMLElement>element
    }
    
    const append = (...append : (HTMLElement|Element|string)[]) => 
        (element : HTMLElement ,clone = true) => {
    
            element.appendChild( append.reduce((flg,a) => {
            flg.appendChild(toNode(a,clone))
            return flg
    
        },d.createDocumentFragment()))
        return element;
    }
    
    const prepend = (...append : (HTMLElement|Element|string)[]) =>
        (element : HTMLElement,clone = true) => {
        element.insertBefore( append.reduce((flg,a) => {
            flg.appendChild(toNode(a , clone))
            return flg
        },d.createDocumentFragment()) , element.firstChild)
        return element
    } 
    
    const before = (append : HTMLElement,ref:HTMLElement) =>
        (element : HTMLElement,clone = true) => {
            element.insertBefore(toNode(append,clone),ref)
            return element
        }
    
    const after = (append : HTMLElement,ref:HTMLElement) =>
        (element : HTMLElement , clone = true) => {
            element.insertBefore(toNode(append,clone),ref.previousSibling)
            return element
        }
    
    const replace = (replace: HTMLElement|Element|string,old : Element |HTMLElement) =>
        (element : HTMLElement,clone = true) => {
            element.replaceChild( toNode(replace,true) ,old )
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