function moveZerosToFront(arr) {
    let pos = arr.length - 1;

    for (let i = arr.length - 1; i >= 0; i--) {
        if (arr[i] !== 0) {
            arr[pos] = arr[i];
            pos--;
        }
    }

    while (pos >= 0) {
        arr[pos] = 0;
        pos--;
    }

    return arr;
}

let arr = [1, 2, 0, 2, 34, 52, 0, 2, 0];
console.log(moveZerosToFront(arr));
