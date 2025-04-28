const reversWords = (s) =>{

    const stack = s.split(" ");
    let finals = "";

    while(stack.length){
        const current = stack.pop();

        if(current){
            finals += " " + current
        }
    }

    return finals.trim();
}


console.log(reversWords("The Sky        Is Blue"))