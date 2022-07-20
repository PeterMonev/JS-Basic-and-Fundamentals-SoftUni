function shopping(input){
    let videocardCost = 250

    const budgetPesho = Number(input[0])
    const videocardPieces = Number(input[1])
    const procesorsPieces = Number(input[2])
    const ramMemPieces = Number(input[3])

    let videmideo = videocardCost * videocardPieces
    let procesorsCost = videmideo * 0.35
    let ramCost = videmideo * 0.1

    let allCost = videmideo + procesorsCost * procesorsPieces + ramCost * ramMemPieces

    if (videocardPieces > procesorsPieces){
        allCost *= 0.85;    
    }
   let result = Math.abs(budgetPesho - allCost).toFixed(2)

   if ( allCost <= budgetPesho){
        
       console.log(`You have ${result} leva left!`)
   
    } else {
        console.log(`Not enough money! You need ${result} leva more!`)
    }



}
shopping(["900","2","1","3"])
shopping(["920.45","3","1","1"])