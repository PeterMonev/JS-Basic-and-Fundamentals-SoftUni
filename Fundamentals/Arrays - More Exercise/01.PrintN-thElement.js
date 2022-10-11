function printNthElement(array){
   
    let newArr = [];
    let rotation = array.pop();

    for(let i = 0; i < array.length; i++){
         
        if(i % rotation === 0){
            newArr.push(array[i]);
        }
    }
   console.log(newArr.join(' '));

}
printNthElement(['5', '20', '31', '4', '20', '2']);
printNthElement(['dsa', 'asd', 'test', 'test', '2'])
