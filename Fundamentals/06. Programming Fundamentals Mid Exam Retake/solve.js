function manOWar(battle){
 
    let pirateShip = battle.shift().split(">").map(Number);
    let warShip = battle.shift().split(">").map(Number);
    let maxHealth = Number(battle.shift())
  
    while(battle[0] !== "Retire"){
        let commands = battle.shift().split(" ");
        
        switch(commands[0]){
          case 'Fire':
            let fire = Number(commands[1]);
            if(fire >= 0 && fire <= warShip.length - 1){
                warShip[fire] -= Number(commands[2]);
                if(warShip[fire] <= 0){
                    console.log("You won! The enemy ship has sunken.");
                    return;
                }
            }
            break;
          case 'Defend':
            let startIndex = Number(commands[1]);
            let endIndex = Number(commands[2]);
            if(startIndex >= 0 && startIndex <= pirateShip.length -1 && endIndex >=0 && endIndex <= pirateShip.length - 1){
                for(let i = startIndex; i <= endIndex; i++){
                    pirateShip[i] -= Number(commands[3]);
     
                    if(pirateShip[i] <= 0){
                        console.log("You lost! The pirate ship has sunken.");
                        return;
                    }
                }
            }
            break;
          case 'Repair':
            let repairIndex = Number(commands[1])
            if(repairIndex >= 0 && repairIndex <= pirateShip.length - 1){
                pirateShip[repairIndex] += Number(commands[2]);
                if(pirateShip[repairIndex] > maxHealth){
                    pirateShip[repairIndex] = maxHealth;
                }
            }
            break;
          case 'Status':
          let countSections = 0;
            for(let i = 0; i < pirateShip.length; i++){
                if(pirateShip[i] < maxHealth * 0.2){
                    countSections++
                }
            }
        console.log(`${countSections} sections need repair.`)
        break;
        }
     
    }
    let pirateShipSum = pirateShip.reduce((a, b) => a + b,0);
    let warShipSum = warShip.reduce((a, b) => a + b, 0);
    console.log(`Pirate ship status: ${pirateShipSum}`);
    console.log(`Warship status: ${warShipSum}`)
    }