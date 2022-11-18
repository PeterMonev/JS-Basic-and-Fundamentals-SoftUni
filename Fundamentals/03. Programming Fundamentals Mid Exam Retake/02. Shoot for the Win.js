function shootForTheWin(array) {
     
    let points = array.shift().split(' ').map(Number);
    let target = array.shift();
    let shoot = 0;
    let shootingTarget = 0;

    while(target != 'End'){
        
        if(Number(target) >= 0 && Number(target < points.length)){
             shoot = Number(points[target]);
             for(let i = 0; i < points.length; i++){
                if(i === Number(target)){
                   shootingTarget++;
                   points[i] = -1
                   
                }
                if(points[i] !== -1){
                    
                if(shoot < points[i]){
                    points[i] -= shoot;
            
                } else if(shoot >= points[i]){
                  points[i] += shoot;  
                }
             }
            
        }


       
    }
target = array.shift();
}
console.log(`Shot targets: ${shootingTarget} -> ${points.join(' ')}`)
}
shootForTheWin(["24 50 36 70", "0", "4", "3", "1", "End"]);
shootForTheWin(["30 30 12 60 54 66", "5", "2", "4", "0", "End"]);
