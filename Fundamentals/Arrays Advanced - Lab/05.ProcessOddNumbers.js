function processOddNumber(array){
   
    console.log(
        array
        .filter((x,i) => i % 2 == 1)
        .map(x => x * 2)
        .reverse()
        .join(' '));
     
}
processOddNumber([10, 15, 20, 25])