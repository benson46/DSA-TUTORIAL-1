function missingNumber(nums) {
    let n = nums.length;
    let sum = ((n + 1) * (n + 2)) / 2; 
    return sum - nums.reduce((a, b) => a + b, 0); 
}

console.log(missingNumber([1, 2, 3, 5, 6, 7, 8, 9,10]));
