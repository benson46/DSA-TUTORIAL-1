function binary (arr,t){
    return helper(arr,t,left=0,right=arr.length-1)
}

function helper(arr,t,left,right){
    if(left>right) return -1;
    let middle = Math.floor((left+right) /2)
    if(t === arr[middle]) return middle;
    if(t<middle) return helper(arr,t,left,middle-1)
    if(t>middle) return helper(arr,t,middle+1,right)
}



console.log(binary([2,4,6,8,10],8))