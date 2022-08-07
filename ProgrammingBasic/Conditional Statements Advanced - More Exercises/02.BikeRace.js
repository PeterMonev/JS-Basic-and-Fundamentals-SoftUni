function bikeRace(input){
    const juniors = Number(input[0]);
    const seneiors = Number(input[1]);
    const terrain = input[2];

    let juniorTrailPrice = 5.50;
    let juniorCrossPrice = 8;
    let juniorDownhillPrice = 12.25;
    let juniorRoadPrice = 20;
    let seneiorTrailPrice = 7;
    let seneiorCrossPrice = 9.50;
    let seneiorDownhillPrice = 13.75;
    let seneiorRoadPrice = 21.50;
    let forCrosCountryPeople = juniors + seneiors;
    let taxPrice = 0

    switch(terrain){
        case "trail":
            taxPrice = juniors * juniorTrailPrice + seneiors * seneiorTrailPrice;
            break;
        case "cross-country":
            if(forCrosCountryPeople >= 50 ){
                taxPrice = juniors * juniorCrossPrice + seneiors * seneiorCrossPrice;
                taxPrice *= 0.75
            } else {
                taxPrice = juniors * juniorCrossPrice + seneiors * seneiorCrossPrice;
            }
            break;
        case "downhill":
            taxPrice = juniors * juniorDownhillPrice + seneiors * seneiorDownhillPrice;
        break;
        case "road":
            taxPrice = juniors * juniorRoadPrice + seneiors * seneiorRoadPrice;
            break;
    }

    taxPrice *= 0.95;
    console.log(`${taxPrice.toFixed(2)}`)


}
bikeRace(["10","20","trail"]);