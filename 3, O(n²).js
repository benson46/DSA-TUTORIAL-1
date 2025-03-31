// O(n²) = Quadratic Time
// Explanation: Runtime grows proportionally to the square of input size.
// Example: Checking all pairs in an array.

function findDuplicates(arr) {
    let duplicates = [];
    for (let i = 0; i < arr.length; i++) {  // O(n)
        for (let j = i + 1; j < arr.length; j++) {  // O(n)
            // O(n²) == quadratic time === nested loop == O(n²)
            // when a loop and its nested loop is looping in n this happens
            if (arr[i] === arr[j]) {
                duplicates.push(arr[i]);
            }
        }
    }
    return duplicates;
}

let arr = [1, 2, 3, 2, 1, 4, 5];
console.log(findDuplicates(arr)); // Output: [1, 2]
