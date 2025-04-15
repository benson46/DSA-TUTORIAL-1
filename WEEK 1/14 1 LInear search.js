function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === target) {
        return i; // Target found, return index
      }
    }
    return -1; // Target not found
  }
  
  console.log(linearSearch([1, 2, 3, 4, 5], 3)); // Output: 2