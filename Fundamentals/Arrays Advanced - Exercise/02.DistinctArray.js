function distinctArray(array){
  
   /* for(let i = 0;i < array.length;i++){

        for(let j = i+1 ; j < array.length ; j++){
             if(array[i] === array[j]){
                array.splice(j, 1);
                j = j - 1;
             }
        }
    }
   console.log(array.join(' ')); */

   /* let newArray = [];
   for(let number of array){
       if(!newArray.includes(number)){
           newArray.push(number);
       }
   }
   console.log(newArray.join(' ')); */

   let newArray = [];
   array.map((currNum) => {
       if(!newArray.includes(currNum)){
           newArray.push(currNum);
       }
    } )
    console.log(newArray.join(' '));
}
//distinctArray([1, 2, 3, 4]);
distinctArray([7, 8, 9, 7, 2, 3, 4, 1, 2])