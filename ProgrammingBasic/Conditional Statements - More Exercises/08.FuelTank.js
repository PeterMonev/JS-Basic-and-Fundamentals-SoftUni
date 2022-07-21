function fuelTank(input){
    const fuel = input[0];
    const litre = Number(input[1]);

    switch (fuel){
        case "Diesel":
            if (litre >= 25){
                console.log(`You have enough ${fuel.toLowerCase()}.` );
            } else {
                console.log(`Fill your tank with ${fuel.toLowerCase()}!`)
            }
            break;
        case "Gasoline":
                if (litre >= 25){
                    console.log(`You have enough ${fuel.toLowerCase()}.`);
                } else {
                    console.log(`Fill your tank with ${fuel.toLowerCase()}!`)
                }
                break;
        case "Gas":
            if (litre >= 25){
                console.log(`You have enough ${fuel.toLowerCase()}.`);
            } else {
                console.log(`Fill your tank with ${fuel.toLowerCase()}!`);
            }
            break;
            default: console.log("Invalid fuel!")
            break;


        }
}
fuelTank(["Diesel","10"]);
fuelTank(["Gasoline","40"]);
fuelTank(["Gas","25"]);
fuelTank(["Kerosene","200"]);