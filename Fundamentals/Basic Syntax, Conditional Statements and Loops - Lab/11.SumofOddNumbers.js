function sumOfOddNumber(n){
     let numberCounter = 0;
     let sum = 0;
     let number = 0;
   while(numberCounter !== n){
        number++
         if(number % 2 != 0){
            numberCounter++;
            console.log(number);
            sum += number
          }  
   }   
    console.log(`Sum: ${sum}`);
}
sumOfOddNumber(5)
