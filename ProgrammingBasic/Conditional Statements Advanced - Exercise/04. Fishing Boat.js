function fishingBoat(input){
    const budget = Number(input[0]);
    const season = input[1];
    const fisherman = Number(input[2]);

    let springShipPrice = 3000;
    let summerShipPrice = 4200;
    let autumnShipPrice = 4200;
    let winterShipPrice = 2600;
    let finalPrice = 0;

    switch (season){
        case "Spring":
            if (fisherman <= 6){
                springShipPrice *= 0.9;
            } else if (fisherman >= 7 && fisherman <= 11){
                springShipPrice *= 0.85;
            } else if (fisherman >= 12){
                springShipPrice *= 0.75;
            } 
            if (fisherman % 2 === 0){
                springShipPrice *= 0.95;
            } 
            finalPrice = springShipPrice
break;
        case "Summer":
            if (fisherman <=6){
                summerShipPrice *= 0.9;
            } else if (fisherman >= 7 && fisherman <= 11){
                summerShipPrice *= 0.85;
            } else if (fisherman >= 12){
                summerShipPrice *= 0.75;
            } if (fisherman % 2 === 0){
                summerShipPrice *= 0.95;
            } 
            finalPrice = summerShipPrice;
            break;
        case "Autumn":
            if (fisherman <= 6){
                autumnShipPrice *= 0.9;
            } else if (fisherman >= 7 && fisherman <= 11){
                autumnShipPrice *= 0.85;
            } else if (fisherman >= 12){
                autumnShipPrice *= 0.75;
            } 
            finalPrice = autumnShipPrice;
            break;
        case "Winter":
            if (fisherman <= 6){
                winterShipPrice *= 0.9;
            } else if (fisherman >= 7 && fisherman <= 11){
                winterShipPrice *= 0.85;
            } else if (fisherman >= 12){
                winterShipPrice *= 0.75;
            } 
            if (fisherman % 2 ===0){
                winterShipPrice *= 0.95;
            }
            finalPrice = winterShipPrice;
            break;


    }
    if (budget >= finalPrice){
        const moneyleft = budget - finalPrice;
        console.log(`Yes! You have ${moneyleft.toFixed(2)} leva left.`);
    } else {
        const moneyleft1 = finalPrice - budget;
        console.log(`Not enough money! You need ${moneyleft1.toFixed(2)} leva.`);
    }






}
fishingBoat(["3000","Summer","11"]);
fishingBoat(["3600","Autumn","6"]);
fishingBoat(["2000","Winter","13"]);