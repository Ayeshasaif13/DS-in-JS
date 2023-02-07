
class Node {
   
    constructor(value){
        this.value = value
        this.next = null
    }
}


class Stack {
    
    constructor(){
        this.first = null
        this.last = null
        this.size = 0
    }
   
    push(val){
        var newNode = new Node(val)
        if(!this.first){
            this.first = newNode
            this.last = newNode
        } else {
            var temp = this.first
            this.first = newNode
            this.first.next = temp
        }
        return ++this.size
    }
   
    pop(){
        if(!this.first) return null
        var temp = this.first
        if(this.first === this.last){
            this.last = null
        }
        this.first = this.first.next
        this.size--
        return temp.value
    }
}

const stck = new Stack

stck.push("value1")
stck.push("value2")
stck.push("value3")

console.log(stck.first) 
       
console.log(stck.last) 
console.log(stck.size) 

stck.push("value4")
console.log(stck.pop()) 