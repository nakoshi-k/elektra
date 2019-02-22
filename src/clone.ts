
const clone = (target :HTMLElement|null) => {
    return (element: HTMLElement) => {
        const clone = (<HTMLElement>target).cloneNode(true);
        element.appendChild(clone);
        return element;
    }
}

export default clone