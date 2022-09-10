function sumOfTwoNumbers(input){
    let firstInterval = Number(input[0]);
    let secondInterval = Number(input[1]);
    let magicNumber = Number(input[2]);
    let combinationCounter = 0;
    let combination = 0;
    let isFound = false

    for(let i = firstInterval; i <= secondInterval; i++){

        for(let y = firstInterval;y <= secondInterval; y++){
            combination = y + i
            combinationCounter++;
            if(combination === magicNumber){
                console.log(`Combination N:${combinationCounter} (${i} + ${y} = ${magicNumber})`)
                isFound = true;
                break;
           } 
             
             
          
        }
        if(isFound){
            break;
        }
         
    }

if(!isFound){
    console.log(`${combinationCounter} combinations - neither equals ${magicNumber}`)
       }


}
//sumOfTwoNumbers(["1","10","5"]);
//sumOfTwoNumbers(["88","888","1000"])
sumOfTwoNumbers(["23","24","20"])