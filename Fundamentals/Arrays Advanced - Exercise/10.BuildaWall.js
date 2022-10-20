function buildAWall(workers){
     let doneJob = [];
     let cubicPerDay = 0;
     let allCubis = 0;
     let pesos = 1900;
     let result = [];

    while(workers.length > 0){
        cubicPerDay = 0;
        for(let i = 0 ; i < workers.length ; i++){
        
            if(workers[i] === 30){
                workers.splice(i, 1);
                i = i-1
            } else {
                workers[i] += 1;
                cubicPerDay += 195;
            }
        }
        allCubis += cubicPerDay
        if(workers.length === 0){
            break;
        } else {
        result.push(cubicPerDay)
    }
    }
       console.log(result.join(', '))
    console.log(`${allCubis * pesos} pesos`);
}
//buildAWall([21, 25, 28]);
buildAWall([17,22,17,19,17])