function muOnline(arr){

    let newArr = arr.toString().split('|');
    let healt = 100;
    let coins = 0;
    let items = 0;
    let points = 0;
    let healing = 0;
    
    for(let i = 0; i < newArr.length; i++){
        let values = newArr[i].split(' ');
        items = values[0];
        points = Number(values[1]);
    
        if(items === 'potion'){
               
               healt += points;
              if(healt >= 100){  
                  healing = 100 - (healt - points);
                  healt = 100;
                  console.log(`You healed for ${healing} hp.`);
                   console.log(`Current health: ${healt} hp.`)
              } else {
                  console.log(`You healed for ${healing +points} hp.`);
                  console.log(`Current health: ${healt} hp.`)
              }
            
        } else if (items === 'chest'){
            coins += points;
            console.log(`You found ${points} bitcoins.`);
        } else {
               healt -= points;
            if(healt > 0){
             
                console.log(`You slayed ${items}.`);
            } else {
                console.log(`You died! Killed by ${items}.`);
                console.log(`Best room: ${i+1}`)
                break;
            }
        }
    }
    if(healt > 0){
        console.log("You've made it!");
        console.log(`Bitcoins: ${coins}`);
        console.log(`Health: ${healt}`)
    }
    
    
    }
muOnline("rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000")