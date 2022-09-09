function averageNumber(input){
    let number = Number(input[0]);
    let index = 1;
    let sum = 0;

    for(let i = 1; i <= number;i++){
        let sumNumber = Number(input[index++]);
        sum += sumNumber
    }
    let averageSum = sum / number
    console.log(averageSum.toFixed(2));
}
averageNumber([4,3,2,4,2])