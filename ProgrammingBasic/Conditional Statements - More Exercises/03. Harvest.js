function harvest(input){
    const vineYardMet = Number(input[0]);
    const grape1Meter = Number(input[1]);
    const neededVine = Number(input[2]);
    const NumWorkers = Number(input[3]);

    let allGrape = vineYardMet * grape1Meter;
    allGrape *= 0.4;
    let oneLitreVine = allGrape / 2.5;
    allVine = 0

    if (neededVine > oneLitreVine){
        allVine =  Math.floor(neededVine - oneLitreVine) 
        console.log(`It will be a tough winter! More ${allVine} liters wine needed.`);
    } else if (oneLitreVine >= neededVine){
        allVine =  Math.ceil(oneLitreVine - neededVine);
        console.log(`Good harvest this year! Total wine: ${oneLitreVine} liters.`);
        literVine = Math.ceil(allVine / NumWorkers)
        console.log(`${allVine} liters left -> ${literVine} liters per person.`)
        

    }





}
harvest(["650","2","175","3"]);
harvest(["1020","1.5","425","4"]);
