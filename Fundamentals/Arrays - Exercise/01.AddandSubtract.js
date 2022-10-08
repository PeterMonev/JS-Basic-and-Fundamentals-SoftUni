function addAndSubtract(arr){
    let sumEven = 0;
    let sumOdd = 0;
    let sumOldArr = 0;
    let newArr = [];

    for(i=0;i<arr.length; i++){
        sumOldArr += arr[i];
        if(arr[i] % 2 === 0){
            sumEven += arr[i] + i;
            newArr.push(arr[i]+ i);
        } else {
           sumOdd += arr[i] - i;
           newArr.push(arr[i] - i);
        }
    }
    //console.log([newArr.join(',')]);
    console.log(newArr)
    console.log(sumOldArr);
    console.log(sumOdd + sumEven);

}
addAndSubtract([5, 15, 23, 56, 35]);