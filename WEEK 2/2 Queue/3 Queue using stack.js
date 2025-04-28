class Queue {
    constructor(){
        this.s1 = [];  // Stack for enqueueing
        this.s2 = [];  // Stack for dequeueing
    }

    enqueue(x){

            while (this.s1.length > 0) {
                this.s2.push(this.s1.pop());
            }
        
        // Push the new element into s1
        this.s1.push(x);
        
        while (this.s2.length > 0) {
            this.s1.push(this.s2.pop());
        }
    }

    dequeue(){
        if(this.s1.length === 0) return "Queue is empty";
        
        // Pop the first element from s1 (the front of the queue)
        return this.s1.pop();
    }

    front(){
        if(this.s1.length === 0) return "Queue is empty";
        
        // Peek the front of the queue (the last element of s1)
        return this.s1[this.s1.length - 1];
    }

    print() {
        if(this.s1.length === 0) return "Queue is empty";
        
        console.log(this.s1.join(" , "));
    }
}

const q = new Queue();
q.enqueue(10);     // Add to queue
q.enqueue(20);     // Add to queue
q.enqueue(30);     // Add to queue
q.print();         // Output: 10 , 20 , 30

q.dequeue();       // Removes 10 (front of the queue)
q.print();         // Output: 20 , 30

q.enqueue(40);     // Add to queue
q.print();         // Output: 20 , 30 , 40

console.log(q.front()); // Should output 20
