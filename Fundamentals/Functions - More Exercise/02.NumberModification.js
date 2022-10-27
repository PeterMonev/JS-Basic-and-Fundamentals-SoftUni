function numberModification(number){
     
    let result = 0;
    let numAsString = number.toString();
    let sumOfDigits = 0;
    let penalty = 9;
    let numAsArray = numAsString.split('').map(Number);

    while(result < 5){
    
      sumOfDigits = numAsArray.reduce((a,b)=> a + b ,0);
      result = sumOfDigits / numAsArray.length
          
      if(result <= 5){
        numAsArray.push(penalty);
      } else {
        break;
      }
    }


 console.log(numAsArray.join(''));
}
numberModification(101)