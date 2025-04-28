class Stack {
  constructor() {
    this.items = [];
  }

  push(value) {
    this.items.push(value);
  }

  pop() {
    return this.items.pop();
  }

  peek() {
    console.log(this.items[this.items.length - 1]);
  }

  isEmpty() {
    return this.items.length === 0;
  }
}

function reverse(str) {
  const s = new Stack();

    // Split the string into words (handling multiple spaces)
    const words = str.split(' ').filter(word => word.length > 0);

    let out = " ";

    for(const word of words){
        s.push(word);
    }

    while(!s.isEmpty()){
        out += s.pop() + " ";
    }

    return out.trim();
}

function parentheses(str) {
  const s2 = new Stack();

  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    if (char === "{" || char === "[" || char === "(") {
      s2.push(char);
    } else if (char === "}" || char === "]" || char === ")") {
      if (s2.isEmpty()) return false;

      let top = s2.pop();
      if (
        (char === "}" && top !== "{") ||
        (char === "]" && top !== "[") ||
        (char === ")" && top !== "(")
      ) {
        return false;
      }
    }
  }

  return s2.isEmpty();
}

console.log(reverse("hello world how are    your my "));
console.log(parentheses("{[()]}")); // true
console.log(parentheses("{[(])}")); // false
