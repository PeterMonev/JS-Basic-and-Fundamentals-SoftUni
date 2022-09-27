function intergerAndFloat(firstNum,secondNum,trirdNumb){
    let sum = firstNum + secondNum + trirdNumb

    sum % 1 ===0 ? sum += ' - Integer': sum += ' - Float';
    console.log(sum);

}
intergerAndFloat(9, 100, 1.1);
intergerAndFloat(100, 200, 303);