function carToGo(input){
    const budget = Number(input[0]);
    const season = input[1];

    let typeCar = "";
    let classCar = "";
    let price = budget

    switch(season){
        case "Summer":
            if (budget <= 100){
                classCar = "Economy class";
                typeCar = "Cabrio";
                price *= 0.35
            } else if (budget <= 500){
                classCar = "Compact class";
                typeCar = "Cabrio";
                price *= 0.45;
            } else {
                classCar = "Luxury class";
                typeCar = "Jeep";
                price *= 0.9;
            }
        break;
        case "Winter":
            if (budget <= 100){
                classCar = "Economy class";
                typeCar = "Jeep";
                price *= 0.65;
            } else if (budget <= 500){
                classCar = "Compact class";
                typeCar = "Jeep";
                price *= 0.8;
            } else {
                classCar = "Luxury class";
                typeCar = "Jeep";
                price *= 0.9;
            }
            break;
    }
    console.log(`${classCar}`);
    console.log(`${typeCar} - ${price.toFixed(2)}`)
    

}
carToGo(["450","Summer"]);
carToGo(["450","Winter"]);
carToGo(["1010","Summer"]);