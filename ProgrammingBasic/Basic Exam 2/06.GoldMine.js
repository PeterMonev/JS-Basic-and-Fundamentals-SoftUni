function goldMine(input){
    let locate = Number(input[0]);
    let index = 1 ;
    let collectGold = 0;
    let averageDaysGold = 0;

    for (let i = 1 ; i <= locate ; i++){
           let expectedAvrage = Number(input[index++]) 
         let days = Number(input[index++]);
         collectGold = 0;
         averageDaysGold = 0;
        for(let j = 1 ; j <= days ; j++){
            let extractGold = Number(input[index++]);
            collectGold += extractGold;
             
        }
        averageDaysGold = (collectGold / days)
        if(averageDaysGold >= expectedAvrage){
        console.log(`Good job! Average gold per day: ${averageDaysGold.toFixed(2)}.`)
        } else {
            let needGold = expectedAvrage - averageDaysGold
            console.log(`You need ${needGold.toFixed(2)} gold.`)
        }
    }


}
goldMine(["2","10","3","10","10","11","20","2","20","10"])