class queue{
    constructor(){
        this.s1=[];
        this.s2=[];
    }

    enqueue(x){
        this.s1.push(x);
    }

    dequeue(){
        if(this.s2.length === 0){
            while(this.s1.length>0){
                this.s2.push(this.s1.pop())
            }
        }

        if(this.s2.length===0){
            return null
        }

        return this.s2.pop();
    }

    isEmpty(){
        return this.s1.length === 0 && this.s2.length===0
    }

    peek(){
        if(this.s2.length===0){
            while(this.s1.length>0){
                this.s2.push(this.s1.pop())
            }
        }
        return this.s2[this.s2.length-1]
    }


    print(){
        let result = [];

        for(let i = this.s2.length -   1 ; i>= 0; i--){
            result.push(this.s2[i]);
        }

        for (let i = 0; i < this.s1.length; i++) {
            result.push(this.s1[i]);
          }
          console.log("Queue elements:", result.join(" "));
    }
}

const q = new queue();
q.enqueue(1);
q.enqueue(2);
q.enqueue(3);
// console.log(q.dequeue()); // 1
// console.log(q.peek());    // 2
// console.log(q.dequeue()); // 2
q.print()