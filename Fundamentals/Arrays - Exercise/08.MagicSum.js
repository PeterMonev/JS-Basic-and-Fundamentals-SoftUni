function magicSum(array,total){
    let num1 = 0;
    let num2 = 0;
    let totalsum = 0;
   

    for(let i=0;i<array.length;i++){
          num1 = array[i]
        for(let j= i + 1;j<array.length;j++){
             num2 = array[j];
             totalsum = num1 + num2

             if(totalsum == total){
                 console.log(`${num1} ${num2}`)
                 
             }

        }
    }


}
magicSum([1, 7, 6, 2, 19, 23],8);