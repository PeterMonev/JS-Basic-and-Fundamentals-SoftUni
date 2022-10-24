function oddAndEvenSum(number) {
    let numAsString = number.toString();
    
    function totalOddSum(numAsString){
        let oddSum = 0;
        for(let i = 0; i < numAsString.length;i++){
            let currNum = Number(numAsString[i]);
            if(currNum % 2 != 0){
                oddSum += currNum;
            }
        }
      return oddSum;
    }

    function totalEvenSum(numAsString){
        let eveSum = 0;
        for(let i = 0; i < numAsString.length;i++){
            let currNum = Number(numAsString[i]);
            if(currNum % 2 === 0){
              eveSum += currNum;
            }
        }
      return eveSum;
    }
    console.log(`Odd sum = ${totalOddSum(numAsString)}, Even sum = ${totalEvenSum(numAsString)}`)
}
oddAndEvenSum(1000435);
