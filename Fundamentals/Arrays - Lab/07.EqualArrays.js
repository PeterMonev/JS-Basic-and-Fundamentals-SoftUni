function equalArrays(arr1,arr2){
     
    let sumOfarr = 0;
    let isIdentical = true;
    let index = 0;

 
    for (let i = 0 ; i < arr1.length ; i++){

       for(let j = i ; j < arr2.length ; j++){
          
        if(arr1[i] === arr2[j]){
           sumOfarr += Number(arr1[i]);
           break;
        } else {
            index = i;
            isIdentical = false;
        }
       }
       
       if(isIdentical === false){
           break;
       }
    }


    if(isIdentical === true){
        console.log(`Arrays are identical. Sum: ${sumOfarr}`)
    } else {
        console.log(`Arrays are not identical. Found difference at ${index} index`)
    }



}
equalArrays(['10','20','30'],['10','20','30']);
equalArrays(['1','2','3','4','5'], ['1','2','4','4','5']);
equalArrays(['1'], ['10'])