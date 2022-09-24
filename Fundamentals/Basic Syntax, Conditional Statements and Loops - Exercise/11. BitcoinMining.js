function bitcoinMining(input){
      
     let goldPrice = 67.51;
     let dayCounter = 0;
     let goldEarned = 0;
     let money = 0;
     let bitCoin = 0;
     let boughtBitcoin = 0;
     let firstDay = 0;

    for(let i = 0 ; i < input.length;i++){
        dayCounter ++;
        if(dayCounter % 3 === 0){
            goldEarned = Number(input[i]) * 0.70
        } else {
            goldEarned = Number(input[i]);
        }
        money += (goldEarned * goldPrice);
        if(money > 11949.16){
           bitCoin = Math.floor(money / 11949.16)
           boughtBitcoin += bitCoin
           money -= bitCoin * 11949.16
          
           if(firstDay === 0){
               firstDay = dayCounter
           }
           
        }
        
    }
   

   console.log(`Bought bitcoins: ${boughtBitcoin}`)
   if(bitCoin != 0){
   console.log(`Day of the first purchased bitcoin: ${firstDay}`)
   }
   console.log(`Left money: ${money.toFixed(2)} lv.`)
}
bitcoinMining([100, 200, 300])