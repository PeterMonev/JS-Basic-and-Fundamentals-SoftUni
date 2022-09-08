function dishwasher(input){
    let index = 1
    let detergen = Number(input[0])
    let detergenBottle = detergen * 750
    let vessels = Number(input[index++])
 
    let pots = 0;
    let numberOfpots = 0;
    let dishesh = 0;
    let numberOfDishesh = 0;
    let charging = 0
    let necessaryDetergen = 0

    while(vessels !== "End"){
        
        charging++;
        if(charging % 3 === 0){
            charging = 0;
            numberOfpots += vessels
            pots = vessels * 15
            detergenBottle -= pots  
        } else {
        numberOfDishesh += vessels;
        dishesh = vessels * 5;
        detergenBottle -= dishesh
        } 
        if(detergenBottle < 0){
            necessaryDetergen = Math.abs(detergenBottle);
            break;
        }
      vessels = input[index++];
      if(vessels === "undefined" || isNaN(vessels) || vessels === 0){
         break;
      } 
    }
    
   if (vessels === "End"){
       console.log("Detergent was enough!");
       console.log(`${numberOfDishesh} dishes and ${numberOfpots} pots were washed.`);
       console.log(`Leftover detergent ${detergenBottle} ml.`)
   } else {
       console.log(`Not enough detergent, ${necessaryDetergen} ml. more necessary!`)
   }
}
dishwasher([2,53,65,55,"End"])
dishwasher([1,10,15,10,12,13,30])