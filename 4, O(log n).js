// O(log n) = Logarithmic Time
// Explanation: Runtime grows logarithmically with input size.
// Example: Binary search in a sorted array.

function binarySearch(arr,target){
    let start = 0 , end = arr.length-1;
    while (start<=end){
        const mid = Math.floor((start+end)/2);
        if(arr[mid] === target) return mid;
        if(arr[mid]<target) start = mid+1;
        // Keeps halving the search space that is logarithmic time
        else end = mid -1;
    }
    return -1;
}


let arr = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29];

// Searching for number 17
console.log(binarySearch(arr, 17)); // Output: 6 (Index of 17)