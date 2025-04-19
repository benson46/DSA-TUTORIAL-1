function select(arr){

    for(let i = 0; i<arr.length;i++){
        let min = i;

        for(let j = i+1; j<arr.length;j++){
            if(arr[j] < arr[min]) min = j
        }

        if(min !== i){
           [ arr[i],arr[min]] = [arr[min],arr[i]]
        }
    }

    return arr;
}

console.log(select([13,231,242,23,212,2422,54,231,3143,2]))