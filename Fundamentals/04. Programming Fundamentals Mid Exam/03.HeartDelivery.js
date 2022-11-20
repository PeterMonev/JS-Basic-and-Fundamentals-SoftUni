function heartDelivery(arrayOFLove) {
    let neighborhood = arrayOFLove.shift().split('@').map(Number);
    let command = arrayOFLove.shift();
    let cupidPlace = 0;

   while(command != 'Love!' ){
       let currcommand = command.split(' ');
       let jump = Number(currcommand[1]);
       cupidPlace += jump;   
    
    
        if(neighborhood[cupidPlace] >= 0 && cupidPlace <= neighborhood.length){
            if(neighborhood[cupidPlace] != 0){
                neighborhood[cupidPlace] -= 2;
                
                if(neighborhood[cupidPlace] === 0){
                    console.log(`Place ${cupidPlace} has Valentine's day.`)
                }
            } else {
                console.log(`Place ${cupidPlace} already had Valentine's day.`)
            }
        } else {
            cupidPlace = 0;
            if(neighborhood[cupidPlace] != 0){
               neighborhood[cupidPlace] -= 2;
               if(neighborhood[cupidPlace] === 0){
                console.log(`Place ${cupidPlace} has Valentine's day.`)
            } 
            }  else {
                console.log(`Place ${cupidPlace} already had Valentine's day.`)
            }
        }
          
       command = arrayOFLove.shift();
    }
    console.log(`Cupid's last position was ${cupidPlace}.`);
    let counterHouse = 0;
    let itIsValtineday = true;

    for (let element of neighborhood){
             if(element != 0){
                counterHouse++
                itIsValtineday = false
             }
            } 

    if(itIsValtineday){
        console.log(`Mission was successful.`);
    } else {
        
        console.log(`Cupid has failed ${counterHouse} places.`)
    }
}
heartDelivery(["10@10@10@2", "Jump 1", "Jump 2", "Love!"]);
heartDelivery(["2@4@2",
"Jump 2",
"Jump 2",
"Jump 8",
"Jump 3",
"Jump 1",
"Love!"])

