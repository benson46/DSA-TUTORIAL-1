function bubble(arr){

    for(let i = 0; i<arr.length-1;i++){
        for(let j = 0; j<arr.length-i-1;j++){
            if(arr[j]>arr[j+1]){
                [arr[j],arr[j+1]] = [arr[j+1], arr[j]];
            }
        }
    }

    return arr;
}

console.log(bubble([1,44,21,11,24,252,5,313,2]))