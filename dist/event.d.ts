export declare type EventType = "abort" | "beforeinput" | "blur" | "click" | "compositionstart" | "compositionupdate" | "compositionend" | "dblclick" | "error" | "focus" | "focusin" | "focusout" | "input" | "keydown" | "keypress" | "keyup" | "load" | "mousedown" | "mouseenter" | "mouseleave" | "mousemove" | "mouseout" | "mouseover" | "mouseup" | "resize" | "scroll" | "select" | "unload" | "wheel" | "submit";
export interface listenerOption {
    capture?: boolean;
    once?: boolean;
    passive?: boolean;
}
export declare const add: (type: EventType, listener: EventListener, options?: listenerOption | undefined) => (element: HTMLElement) => HTMLElement;
export declare const remove: (type: EventType, listener: EventListener, options?: listenerOption | undefined) => (element: HTMLElement) => HTMLElement;
export declare const once: (type: EventType, listener: EventListener, options?: listenerOption | undefined) => (element: HTMLElement) => HTMLElement;
declare const _default: {
    add: {
        [key: string]: (listener: (e: Event) => void, options?: {} | undefined) => HTMLElement;
    };
    remove: {
        [key: string]: (listener: (e: Event) => void, options?: {} | undefined) => HTMLElement;
    };
    once: {
        [key: string]: (listener: (e: Event) => void, options?: {} | undefined) => HTMLElement;
    };
};
export default _default;
//# sourceMappingURL=event.d.ts.map