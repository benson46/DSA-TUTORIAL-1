function secondLargest(arr) {
    let max = -Infinity, second = -Infinity;
    for (let num of arr) {
        if (num > max) [second, max] = [max, num];
        else if (num > second && num < max) second = num;
    }
    return second;
    }
    secondLargest([10, 20, 4, 45, 99]) //→ 45