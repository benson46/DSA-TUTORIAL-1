class DNode {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    // Append to end
    append(value) {
        const node = new DNode(value);
        if (!this.head) {
            this.head = this.tail = node;
        } else {
            this.tail.next = node;
            node.prev = this.tail;
            this.tail = node;
        }
        this.size++;
    }

    // Prepend to start
    prepend(value) {
        const node = new DNode(value);
        if (!this.head) {
            this.head = this.tail = node;
        } else {
            node.next = this.head;
            this.head.prev = node;
            this.head = node;
        }
        this.size++;
    }

    // Form linked list from array
    formArray(arr) {
        arr.forEach(value => this.append(value));
    }

    // Remove by index
    remove(index) {
        if (index < 0 || index >= this.size) return;

        if (index === 0) {
            if (this.head === this.tail) {
                this.head = this.tail = null;
            } else {
                this.head = this.head.next;
                this.head.prev = null;
            }
        } else if (index === this.size - 1) {
            this.tail = this.tail.prev;
            this.tail.next = null;
        } else {
            let curr = this.head;
            let count = 0;
            while (count < index) {
                curr = curr.next;
                count++;
            }
            curr.prev.next = curr.next;
            curr.next.prev = curr.prev;
        }
        this.size--;
    }

    // Remove by value
    deleteByValue(value) {
        if (!this.head) return;

        let curr = this.head;
        while (curr) {
            if (curr.value === value) {
                if (curr === this.head && curr === this.tail) {
                    this.head = this.tail = null;
                } else if (curr === this.head) {
                    this.head = this.head.next;
                    this.head.prev = null;
                } else if (curr === this.tail) {
                    this.tail = this.tail.prev;
                    this.tail.next = null;
                } else {
                    curr.prev.next = curr.next;
                    curr.next.prev = curr.prev;
                }
                this.size--;
                return;
            }
            curr = curr.next;
        }
    }

    // Reverse the list
    reverse() {
        let curr = this.head;
        let temp = null;

        while (curr) {
            temp = curr.prev;
            curr.prev = curr.next;
            curr.next = temp;
            curr = curr.prev;
        }

        if (temp) this.head = temp.prev;
    }

    // Remove middle node
    removeMiddle() {
        if (!this.head || this.size === 0) return;
        const middle = Math.floor(this.size / 2);
        this.remove(middle);
    }

    // Show middle node value
    middle() {
        let curr = this.head;
        let count = 0;
        const mid = Math.floor(this.size / 2);
        while (count < mid) {
            curr = curr.next;
            count++;
        }
        console.log("Middle Node Value:", curr?.value);
    }

    // Insert at specific index
    insertAt(value, index) {
        if (index < 0 || index > this.size) return;

        if (index === 0) return this.prepend(value);
        if (index === this.size) return this.append(value);

        const node = new DNode(value);
        let curr = this.head;
        let count = 0;
        while (count < index) {
            curr = curr.next;
            count++;
        }

        node.prev = curr.prev;
        node.next = curr;
        curr.prev.next = node;
        curr.prev = node;

        this.size++;
    }

    // Insert before value
    insertBefore(value, newValue) {
        let curr = this.head;
        while (curr) {
            if (curr.value === value) {
                const node = new DNode(newValue);
                node.next = curr;
                node.prev = curr.prev;

                if (curr.prev) {
                    curr.prev.next = node;
                } else {
                    this.head = node;
                }

                curr.prev = node;
                this.size++;
                return;
            }
            curr = curr.next;
        }
    }

    // Insert after value
    insertAfter(value, newValue) {
        let curr = this.head;
        while (curr) {
            if (curr.value === value) {
                const node = new DNode(newValue);
                node.prev = curr;
                node.next = curr.next;

                if (curr.next) {
                    curr.next.prev = node;
                } else {
                    this.tail = node;
                }

                curr.next = node;
                this.size++;
                return;
            }
            curr = curr.next;
        }
    }

    // Print forward
    printForward() {
        let output = '';
        let curr = this.head;
        while (curr) {
            output += curr.value + ' ⇄ ';
            curr = curr.next;
        }
        console.log('Forward:', output + 'null');
    }

    // Print backward
    printBackward() {
        let output = '';
        let curr = this.tail;
        while (curr) {
            output += curr.value + ' ⇄ ';
            curr = curr.prev;
        }
        console.log('Backward:', output + 'null');
    }

     //  Convert linked list to array
     toArray() {
        const result = [];
        let curr = this.head;
        while (curr) {
            result.push(curr.value);
            curr = curr.next;
        }
        return result;
    }
}

// Example usage:
const dlist = new DoublyLinkedList();
dlist.append(10);
dlist.prepend(5);
dlist.append(15);
dlist.insertAfter(10, 12);
dlist.insertBefore(15, 13);
dlist.formArray([20, 30, 40]);
dlist.deleteByValue(30);
dlist.insertAt(99, 2);
dlist.middle();
dlist.removeMiddle();
dlist.reverse();
dlist.printForward();
dlist.printBackward();
console.log("Array version:", dlist.toArray()); 
