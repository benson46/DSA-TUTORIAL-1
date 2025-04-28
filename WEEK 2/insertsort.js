function insertionSort(arr) {
    for(let i = 0 ; i<arr.length; i++){
        let curr = arr[i];
        let j = i-1

        while(j>=0 && arr[j]>curr){
            arr[j+1] = arr[j];
            j--;
        }

        arr[j+1] = curr;
    }

    return arr;
}

const arr = [10, 29, 14, 37, 14];
const sorted = insertionSort(arr);
console.log(sorted)