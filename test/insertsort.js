function insert(arr){
    for(let i = 1; i<arr.length;i++){
        let curr = arr[i];
        let j = i-1;

        while(j>=0 && arr[j] > curr){
            arr[j+1] = arr[j];
            j--;
        }

        arr[j+1] = curr;
    }

    return arr;
}

console.log(insert([1,3241,13,435,643,13245,34541,131]))