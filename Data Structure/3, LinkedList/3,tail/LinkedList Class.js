
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  prepend(value) {
    const node = new Node(value);
    node.next = this.head;
    this.head = node;
    this.size++;
  }

  append(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
    } else {
      let curr = this.head;

      while (curr.next) {
        curr = curr.next;
      }
      curr.next = node;
    }
    this.size++;
  }

  insert(value, index) {
    if (index < 0 || index > this.size) {
      console.log("invalid index");
    }

    if (index === 0) {
      this.prepend(value);
      return;
    } else if (index === this.size) {
      this.append(value);
      return;
    } else {
      let node = new Node(value);
      let prev = this.head;
      let count = 0;

      while (count < index - 1) {
        prev = prev.next;
        count++;
      }
      node.next = prev.next;
      prev.next = node;
      this.size++;
    }
  }

  remove(index) {
    if (index < 0 || index >= this.size) {
      console.log("Invalid index");
      return;
    }

    if (index === 0) {
      this.head = this.head.next;
    } else {
      let prev = this.head;
      let count = 0;

      while (count < index - 1) {
        prev = prev.next;
        count++;
      }

      prev.next = prev.next.next;
      this.size--;
    }
  }

  removeValue(value) {
    if (!this.head) return;

    if (this.head.value === value) {
      this.head = this.head.next;
      this.size--;
      return;
    }
    let curr = this.head.next;
    let prev = this.head;

    while (curr) {
      if (curr.value === value) {
        prev.next = curr.next;
        this.size--;
        return;
      }
      prev = curr;
      curr = curr.next;
    }
  }

  reverse() {
    let curr = this.head;
    let prev = null;

    while (curr) {
      let next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }
    this.head = prev;
  }

  print() {
    if (!this.size) {
      console.log("list empty");
      return;
    }

    let result = [];
    let curr = this.head;
    while (curr) {
      result.push(curr.value);
      curr = curr.next;
    }

    console.log(result.join(" -> ") + " -> null");
  }
}

const list = new LinkedList();

list.prepend(10);
list.print();

list.prepend(29);
list.print();

list.prepend(38);
list.print();

list.append(45);
list.print();

list.append(23);
list.print();

list.append(213);
list.print();

// list.append(2311)
// list.print()

// list.append(2)
// list.print()

list.insert(7, 4);
list.print();

list.remove(2);
list.print();

// list.removeValue(2222)
// list.print()

// list.search(7)

list.reverse();
list.print();