function treasureHunt(treasureChest) {
     let chest = treasureChest.shift().split('|');
     let command = treasureChest.shift();
     let newChest = [];

     while(command != 'Yohoho!'){
        let currCommand = command.split(' ');
        let action = currCommand.shift();
        let item = '';
        let indexOrCount = Number(currCommand[0]);
        let swappedItem = 0;

        switch(action){
          case 'Loot':
           for(let i = 0 ; i < currCommand.length; i++){
              item = currCommand[i]
              if(!chest.includes(item)){
                chest.unshift(item)
              }
           } 
             break;
          case 'Drop':
          if(indexOrCount <= chest.length && indexOrCount >= 0){
            swappedItem = chest.splice(indexOrCount,1);
            chest.push(swappedItem[0]);        
          }
          break;
          case 'Steal':
             let stolenItem = '';
             stolenItem = chest.splice(-indexOrCount);
             console.log(stolenItem.join(', '));
             break;
        }
      command = treasureChest.shift();
     }

     if(chest.length <= 0){
      console.log("Failed treasure hunt.");
     } else {
      let char = 0;
      let itemCounter = 0;
      for(let element of chest){
        char += element.length
        itemCounter++;
      }
      let credit = char / itemCounter;
      console.log(`Average treasure gain: ${credit.toFixed(2)} pirate credits.`)
     }

}
treasureHunt((["Gold|Silver|Bronze|Medallion|Cup",
"Loot Wood Gold Coins",
"Loot Silver Pistol",
"Drop 3",
"Steal 3",
"Yohoho!"])
);
treasureHunt((["Diamonds|Silver|Shotgun|Gold",
"Loot Silver Medals Coal",
"Drop -1",
"Drop 1",
"Steal 6",
"Yohoho!"])
)