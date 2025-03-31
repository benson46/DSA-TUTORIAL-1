// O(1) = constant time 
// Explanation: Runtime is independent of input size.
// Example: Accessing an array element by index.


let arr = [1,2,3,45,3]

function accessFirstElement(arr){
    return arr[0]
     // this is constant time O(1) , 
    // even if the size of arr was way to big it will take the same time to return arr[0] position
}

console.log(accessFirstElement(arr))