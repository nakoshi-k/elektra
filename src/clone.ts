
const clone = (target :HTMLElement) => {
    return (element: HTMLElement) => {
        const clone = target.cloneNode(true);
        element.appendChild(clone);
        return element;
    }
}

export default clone