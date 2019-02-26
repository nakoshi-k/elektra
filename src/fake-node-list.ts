type ForEachCallback = (element : Element,key:number,elements : Element[]) => void
export interface FakeNodeListInterface{
    [key:number] : Element
    item : (index:number) => Element | null,
    length : number
    namedItem : (name:string) => Element | null,
    [Symbol.iterator] : () => { next : () => {value : Element,done:boolean}},
    forEach : (eachFunction : ForEachCallback) => void
} 

class FakeNodeList implements FakeNodeListInterface{
    private current = 0;
    private items : Element[] = []
    constructor(items : Element[]){
        this.items = [...this.items,...items]
        items.forEach((item,index) => {
            this[index] = item
        })        
    }
    get length(){
        return this.items.length
    }    
    item = (index : number) =>
        this.items[index] || null
    
    namedItem = (name:string) => 
        this.items.find(item => item.id === name || item.getAttribute("name") === name) || null
    
    forEach = (eachFunction : ForEachCallback ) => 
        this.items.forEach( (item,index,items) => eachFunction(item,index,items));
    
    [Symbol.iterator] = ()=> {
        return {
            next : () => {
                const result = (this.items[this.current+1])
                ? {value : this.items[this.current] , done : false} 
                : {value : this.items[this.current] , done : true} 
                this.current++
                return result;
            }
        }
    }
    [key:number] :Element
 }

 export default (items : Element[]) => new FakeNodeList(items)
