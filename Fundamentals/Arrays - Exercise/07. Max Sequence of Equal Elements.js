function maxSequenceofEqualElements(array){
    let num = 0;
    let num1 = 0;
    let numConter = 1;
    let maxlength = 1;
    let sequenceArra = [];
    let num3= 0;

    for(let i = 0; i < array.length; i++){
       num = array[i];
       num1 = array[i+1]
        if(num == num1){
            numConter++;
            if(maxlength < numConter){
                maxlength = numConter;
                num3 = array[i] ;
         } 
        } else {
            numConter = 1;
        }
      
    }
    for(i=0; i<maxlength; i++){
    sequenceArra.push(num3);
    }
    console.log(sequenceArra.join(" "));

}
maxSequenceofEqualElements([2, 1, 1, 2, 3, 3, 2, 2, 2, 1])