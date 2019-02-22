const add = (...addClass:string[]) => {
    return (element : HTMLElement) => {
        element.classList.add(...addClass)
        return element
    }
}

const remove = (...removeClass:string[]) => {
    return (element : HTMLElement) => {
        element.classList.remove(...removeClass)
        return element
    }
}

const toggle = (...removeClass:string[]) => {
    return (element : HTMLElement) => {
        element.classList.remove(...removeClass)
        return element
    }
}

const class$ = ( class$ : string) => {
    return add(...class$.split(" "))
}

const replace = (oldClass : string ,newClass : string) => {
    return (element : HTMLElement) => {
        element.classList.replace(oldClass,newClass)
        return element
    }
}

const exToggle = (toggleClass : string , exList : string[]) => {
    return (element:HTMLElement) => {
        element.classList.remove( ...exList.filter(c => c !== toggleClass) )
        element.classList.add(toggleClass)
        return element;
    }
}

export default {
    add ,
    remove ,
    toggle ,
    replace ,
    exToggle,
    class$
}
