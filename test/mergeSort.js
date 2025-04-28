function merge(arr){
    if(arr.length<= 1) return arr;

    let mid = Math.floor(arr.length/2);
    let left = merge(arr.slice(0,mid));
    let right = merge(arr.slice(mid));

    return mer(left,right)
}

function mer(left,right){
    let sorted = [];
    while(left.length&&right.length){
        if(left[0]< right[0]){
            sorted.push(left.shift())
        }else{
           sorted.push(right.shift())
        }
    }

    return [...sorted,...left,...right]
}


console.log(merge([1,3241,13,435,643,13245,34541,131]))