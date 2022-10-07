function evenAndOddSubtraction(arr){
    
    let number = 0;
    let even = 0;
    let odd = 0;

   for(let i = 0; i < arr.length;i++){
      number = Number(arr[i]);
      if(number % 2 === 0){
      even += number;
   } else {
       odd += number;
   }
 }
 console.log(even - odd);
}
evenAndOddSubtraction([1,2,3,4,5,6]);
evenAndOddSubtraction([3,5,7,9])
