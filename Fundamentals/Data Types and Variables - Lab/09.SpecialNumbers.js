function specialNumbers(number){
     
    let num = 0;
    let firstDigit=0;
    let middleDigit=0;
    let lasDigit=0;
    
   for(let i = 1 ; i <= number ; i++) {
    num = i.toString().split('')
  firstDigit = num[0]
    if(i > 9){
   middleDigit = num[1]
    }
if(i>99){
   lasDigit = num[2]
}
  
    let sumOfDigits = Number(lasDigit) + Number(firstDigit) + Number(middleDigit)

       if (sumOfDigits === 5|| sumOfDigits === 7 || sumOfDigits === 11) {
           console.log(`${i} -> True`);
       } else {
           console.log(`${i} -> False`);
       }
   }


}
specialNumbers(15)