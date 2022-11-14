function theLift(peopleAndLift) {
    
    let people = Number(peopleAndLift.shift().split(' '))
    let lift = peopleAndLift.shift().split(' ');
    let currWagon = [];
    let isFreeSeat = true;

      
   for(let i = 0;i < lift.length;i++){
   
    let currWagon = Number(lift[i]);
    if (currWagon < 4) {
        if (people >= 4) {

            if (currWagon != 0) {
                people -= (4 - currWagon);
                currWagon = 4;
                lift[i] = currWagon;
                isFreeSeat = false;
            } else {
                currWagon = 4;
                people -= currWagon;
                lift[i] = currWagon;
            }

        } else {
            currWagon += people;
            people = 0;
            lift[i] = currWagon;
            isFreeSeat = true;
        }
    }
   }

   let wagons = lift;
   let wagonSpaceCount = 0;

   if (people != 0) {
    console.log(`There isn't enough space! ${people} people in a queue!`);
    console.log(wagons.join(' '));
} else {
    for (let wagon of wagons) {
        
        if (wagon === 4) {
            wagonSpaceCount++;
        }
    }
    if (wagonSpaceCount != wagons.length) {
        console.log("The lift has empty spots!");
        console.log(`${wagons.join(' ')}`)
    } else {
        console.log(`${wagons.join(' ')}`)
    }

}
}
theLift(["855", "-4"]);
theLift([
    "15",
    "0 0 0 0 0"
   ]
   )
