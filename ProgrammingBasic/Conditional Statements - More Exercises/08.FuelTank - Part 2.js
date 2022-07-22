function fuelTank(input){
    const fuel = input[0];
    const quantityFuel = Number(input[1]);
    const clubCard = input[2];

    let gasolinePerL = 2.22;
    let deiselPerL = 2.33;
    let gasPerL = 0.93;
    let finalPrice = 0

    switch(fuel){
        case "Gasoline":
            if (clubCard == "Yes"){
                gasolinePerL -= 0.18;
                finalPrice = gasolinePerL * quantityFuel;
            } else {
                finalPrice = gasolinePerL * quantityFuel;
            }
            break;
        case "Diesel":
            if (clubCard == "Yes"){
                deiselPerL -= 0.12;
                finalPrice = deiselPerL * quantityFuel;
            } else {
                finalPrice = deiselPerL * quantityFuel;
            }
            break;
        case "Gas":
            if (clubCard == "Yes"){
                gasPerL -= 0.08;
                finalPrice = gasPerL * quantityFuel;
            } else {
                finalPrice = gasPerL * quantityFuel;
            }
            break;

    }

    if (quantityFuel >= 20 && quantityFuel <= 25){
        finalPrice *= 0.92;
        console.log(`${finalPrice.toFixed(2)} lv.`)
    } else if (quantityFuel > 25){
        finalPrice *= 0.9
        console.log(`${finalPrice.toFixed(2)} lv.`)
    } else {
        console.log(`${finalPrice.toFixed(2)} lv.`);
    }




}
fuelTank(["Gas","30","Yes"]);
fuelTank(["Gasoline","25","No"]);
fuelTank(["Diesel","19","No"]);