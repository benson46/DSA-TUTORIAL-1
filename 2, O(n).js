// O(n) = Linear Time
// Explanation: Runtime grows linearly with input size.
// Example: Summing all elements in an array.


let arr = [1, 2, 3, 4, 5];

function sumArray(arr) {
  let sum = 0;
  for (let num of arr) {

    // O(n) linear time
    // The loop runs once for every element in the array.
    // If the array has 5 elements, the loop runs 5 times.
    // If it has 1,000 elements, the loop runs 1,000 times.
    sum += num;

  }
  return sum;
}
