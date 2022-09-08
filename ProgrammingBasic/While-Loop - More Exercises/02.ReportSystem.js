function reportSystem(input){
    let amountMoney = Number(input[0]);
    let index = 1;
    let command = input[index++];
    let productPrice = 0;
    let paymentCard = 0;
    let paymentCash = 0;
    let cardCounter = 0;
    let cashCounter = 0;
    let payWithCard = 0;
    let payWithCash = 0;
    let allMoney = 0;
    let averageCash = 0;
    let averageCard = 0;


    while(command !== "End"){
        payWithCash = Number(command);
        payWithCard = Number(input[index++]); 

        if(payWithCash <= 100){
            paymentCash += payWithCash;
            cashCounter++
            console.log("Product sold!"); 
        }  else {
            console.log("Error in transaction!");
        }
        if(payWithCard >= 10){
            paymentCard += payWithCard;
            cardCounter++
            console.log("Product sold!")
        } else {
            console.log("Error in transaction!");
        }
        allMoney = paymentCard + paymentCash

        if(allMoney >= amountMoney){
            averageCash = paymentCash / cashCounter;
            averageCard = paymentCard / cardCounter;
            console.log(`Average CS: ${averageCash.toFixed(2)}`);
            console.log(`Average CC: ${averageCard.toFixed(2)}`);
            break;

        }
        command = input[index++]
       
       
    }
    if(command === "End"){
        console.log("Failed to collect required money for charity.")
    }


}
//reportSystem([500,120,8,63,256,78,317]);
reportSystem([600,86,150,98,227,"End"]);