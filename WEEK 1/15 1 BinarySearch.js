
function binarySearch(arr, target) {
    let left = 0, right = arr.length - 1;
  
    while (left <= right) {
      let mid = Math.floor((left + right) / 2);
      
      if (arr[mid] === target) {
        return mid; // Target found
      }
      if (arr[mid] < target) {
        left = mid + 1; // Search right half
      } else {
        right = mid - 1; // Search left half
      }
    }
  
    return -1; // Target not found
  }
  
  console.log(binarySearch([1, 2, 3, 4, 5], 4)); // Output: 3