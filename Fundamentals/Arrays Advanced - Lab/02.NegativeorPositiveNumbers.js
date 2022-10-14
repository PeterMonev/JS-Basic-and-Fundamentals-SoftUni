function negativeOrPositiveNumbers(array){
        
    let result = [];

    for (let i = 0; i < array.length; i++){
        array[i] = Number(array[i]);
        if(array[i] < 0){
            result.unshift(array[i]);
        } else {
            result.push(array[i]);
        }
        
    }
    console.log(result.join('\n'));
    
   // for (let char of result){
   //console.log(char);
   // };
}
negativeOrPositiveNumbers(['7', '-2', '8', '9']);