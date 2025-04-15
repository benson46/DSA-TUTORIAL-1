function removeDuplicates(nums) {
    let i = 0;
    for (let j = 1; j < nums.length; j++) {
        if (nums[j] !== nums[i]) nums[++i] = nums[j];
    }
    return i + 1; // unique count
    }
    removeDuplicates([0,0,1,1,2]) //→ 3 (nums = [0,1,2,...])
