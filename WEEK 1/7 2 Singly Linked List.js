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

    // Append value to the end
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

    // Prepend value to the start
    prepend(value) {
        const node = new Node(value);
        node.next = this.head;
        this.head = node;
        this.size++;
    }

    // Form linked list from an array
    formArray(arr) {
        arr.forEach(value => this.append(value));
    }

    // Remove node by index
    remove(index) {
        if (index < 0 || index >= this.size) return;

        if (index === 0) {
            this.head = this.head.next;
        } else {
            let curr = this.head;
            let count = 0;
            while (count < index - 1) {
                curr = curr.next;
                count++;
            }
            curr.next = curr.next.next;
        }
        this.size--;
    }

    // Remove node by value
    deleteByValue(value) {
        if (!this.head) return;

        if (this.head.value === value) {
            this.head = this.head.next;
            this.size--;
            return;
        }

        let curr = this.head;
        while (curr.next) {
            if (curr.next.value === value) {
                curr.next = curr.next.next;
                this.size--;
                return;
            }
            curr = curr.next;
        }
    }

    // Reverse the linked list
    reverse() {
        let prev = null;
        let curr = this.head;
        while (curr) {
            const next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }
        this.head = prev;
    }

    // Remove the middle node
    removeMiddle() {
        if (!this.head || this.size === 0) return;

        let middle = Math.floor(this.size / 2);
        if (middle === 0) {
            this.head = this.head.next;
        } else {
            let curr = this.head;
            let count = 0;
            while (count < middle - 1) {
                curr = curr.next;
                count++;
            }
            curr.next = curr.next.next;
        }
        this.size--;
    }

    // Show the middle node's value
    middle() {
        let count = 0;
        let curr = this.head;
        let middle = Math.floor(this.size / 2);

        while (count < middle) {
            curr = curr.next;
            count++;
        }

        console.log("Middle Node Value:", curr?.value);
    }

    // Insert a node at a specific index
    insertAt(value, index) {
        if (index < 0 || index > this.size) return;

        const node = new Node(value);
        if (index === 0) {
            this.prepend(value);
        } else {
            let curr = this.head;
            let count = 0;
            while (count < index - 1) {
                curr = curr.next;
                count++;
            }
            node.next = curr.next;
            curr.next = node;
            this.size++;
        }
    }

    // Insert newValue before a node with given value
    insertBefore(value, newValue) {
        const node = new Node(newValue);
        if (!this.head) return;

        if (this.head.value === value) {
            this.prepend(newValue);
            return;
        }

        let curr = this.head;
        while (curr.next) {
            if (curr.next.value === value) {
                node.next = curr.next;
                curr.next = node;
                this.size++;
                return;
            }
            curr = curr.next;
        }
    }

    // Insert newValue after a node with given value
    insertAfter(value, newValue) {
        const node = new Node(newValue);
        let curr = this.head;

        while (curr) {
            if (curr.value === value) {
                node.next = curr.next;
                curr.next = node;
                this.size++;
                return;
            }
            curr = curr.next;
        }
    }

    // Print the entire linked list
    print() {
        let output = '';
        let curr = this.head;
        while (curr) {
            output += curr.value + ' -> ';
            curr = curr.next;
        }
        console.log(output + 'null');
    }

    // Convert linked list to array
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
const list = new LinkedList();
list.append(1);
list.prepend(3);
list.append(22);
list.prepend(35);
list.insertBefore(22, 211);
list.formArray([1, 2, 2, 3, 4]);
list.insertAfter(2, 99);
list.insertAt(88, 2);
list.deleteByValue(3);
list.middle();
list.removeMiddle();
list.reverse();
list.print();
console.log("As Array:", list.toArray()); 