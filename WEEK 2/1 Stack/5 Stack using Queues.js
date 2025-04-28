// only look this after studying queue;

class StackUsingQueue{
    constructor(){
        this.q1 = [];
        this.q2 = [];
    }

    push(x){

        while(this.q1.length !== 0) this.q2.push(this.q1.shift());
       
        this.q1.push(x)

        while(this.q2.length !== 0) this.q1.push(this.q2.shift());
    }

    pop(){
        if(this.isEmpty()) return "stack is empty";
        return this.q1.shift();
    }

    peek(){
        if(this.isEmpty()) return "stack is empty";
        return this.q1[0]
    }

    isEmpty(){
        return this.q1.length === 0;
    }

    print(){
        if(this.isEmpty()) return "stack is empty";
        console.log(this.q1.join(" , "))
    }
}

const s = new Stack();

s.push(4)
s.push(7)
s.push(46)
s.push(9)
s.push(8)
s.push(10)
s.push(99)
s.push(100)
s.push(999);

s.pop();
console.log(s.peek())
s.print();