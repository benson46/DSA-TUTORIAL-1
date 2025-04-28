class Stack {
  constructor() {
    this.items = [];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  size() {
    return this.items.length;
  }
  push(element) {
    this.items.push(element);
  }

  pop() {
    if (this.isEmpty()) return "Stack is empty";
    return this.items.pop();
  }

  peek() {
    if (this.isEmpty()) return "Stack is empty";
    return this.items[this.size() - 1];
  }

  print() {
    if (this.isEmpty()) return "Stack is empty";
    console.log(this.items.join(" => "));
  }
}


const stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);
stack.print();           
console.log(stack.pop()); // Output: 30
stack.print();   