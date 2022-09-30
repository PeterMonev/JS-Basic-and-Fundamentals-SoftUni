function sumDigits(num){
    let numberAsStrung = num.toString();
    let result = 0;

    // for (const char of numberAsStrung){
    //       result += Number(char);
    // }
   // console.log(result);

   for(let i = 0 ; i < numberAsStrung.length;i++){
       result += Number(numberAsStrung[i]);
       
   }
   console.log(result);

}
sumDigits(245678)