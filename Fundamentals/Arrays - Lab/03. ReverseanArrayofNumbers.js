function reverseanArray(n,arr){
       let result = [];
    for(let i = n - 1;i >= 0; i--){
        result.push(arr[i]);
    }
    console.log(result.join(' '));

}
reverseanArray(3, [10, 20, 30, 40, 50]);
reverseanArray(4, [-1, 20, 99, 5]);