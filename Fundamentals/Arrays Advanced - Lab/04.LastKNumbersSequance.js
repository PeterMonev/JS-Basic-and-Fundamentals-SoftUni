function lastKNumbersSequance(n,k){
     let result = [1];

     for(let i = 0; i < n - 1; i++){
         let lastk = result.slice(-k);
        
         let sum = 0;
         for (let elements of lastk){
             sum += elements;
         }
         result.push(sum);

     }

console.log(result.join(' '));

}
lastKNumbersSequance(6,3);