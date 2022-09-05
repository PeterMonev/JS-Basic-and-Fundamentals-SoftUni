function minNumber(input){
    index = 0;
    let command = Number(input[index++]);
    let minNumber = Number.MAX_SAFE_INTEGER

    while(command !== "Stop"){
         let num = Number(command)
         if (minNumber > num){
             minNumber = num;
         }
         command = input[index++];
    
    }
    console.log(minNumber);


}