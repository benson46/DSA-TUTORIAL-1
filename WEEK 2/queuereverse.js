
function reverseQueue(queue) {
    let stack = [];
  
    // Step 1: Dequeue all elements from queue and push into stack
    while (queue.length > 0) {
      stack.push(queue.shift());
    }
  
    // Step 2: Pop from stack and enqueue back into queue
    while (stack.length > 0) {
      queue.push(stack.pop());
    }
  
    return queue;
  }
  
  // ✅ Example
  let queue = [10, 20, 30, 40, 50];
  console.log("Original queue:", [...queue]);
  reverseQueue(queue);
  console.log("Reversed queue:", queue);
  