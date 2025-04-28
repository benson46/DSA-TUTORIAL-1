function valid(s){
    const stack = [];

    for(let i = 0; i<s.length; i++){
        const char = s[i];

        if(char === "(" || char === "[" || char === "{"){
            stack.push(char)
        }else if(char === ")" || char === "]" || char === "}"){
            if(stack.length ===0) return "empty stack"

            let top = stack.pop();

            if(
                (char === ")" && top !== "(") ||
                (char === "]" && top !== "[") ||
                (char === "}" && top !== "{")
            ) return false;
        }
    }

    return true;
}

const s1 = "([]{})"
console.log(valid(s1))

const s2 = "({[}]})"
console.log(valid(s2))

const s3 = "(]{})"
console.log(valid(s3))