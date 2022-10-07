function sumEvenNumber(array){
     let number = 0;
     let sum = 0;
    for(let i = 0;i < array.length;i++){
         number = Number(array[i]);
         if(number % 2 === 0){
            sum += number
         }
    }
    console.log(sum);




}
sumEvenNumber(['1','2','3','4','5','6']);