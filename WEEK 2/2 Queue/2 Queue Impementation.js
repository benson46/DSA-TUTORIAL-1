class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(element) {
    this.items.push(element);
  }

  dequeue() {
    if (this.isEmpty()) return "Queue is empty";
    return this.items.shift();
  }

  peek() {
    if (this.isEmpty()) return "Queue is empty";
    return this.items[0];
  }

  front() {
    if (this.isEmpty()) return "Queue is empty";
    return this.items[0]
  }

  isEmpty() {
    return this.items.length === 0;
  }

  size() {
    return this.items.length;
  }

  print(){
    console.log(this.items.join(" <= "))
  }
}


const q = new Queue();
q.enqueue(10);
q.enqueue(20);
q.enqueue(30);
q.print();        // Output: 10 <- 20 <- 30
console.log(q.dequeue()); // Output: 10
q.print();        // Output: 20 <- 30