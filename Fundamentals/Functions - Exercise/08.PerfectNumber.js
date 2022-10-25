function perfectNumber(number){
  
    let currSum = 0;

    for(let i = 1; i < number ; i++){

        if(number % i === 0){
            currSum += i;
        }
    }

    let result = (currSum === number) ? "We have a perfect number!" : "It's not so perfect.";
    console.log(result);
}
perfectNumber(6)