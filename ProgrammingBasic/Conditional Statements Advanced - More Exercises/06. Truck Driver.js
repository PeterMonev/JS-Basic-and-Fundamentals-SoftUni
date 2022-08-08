function truckDriver(input){
    const season = input[0];
    const kiloPerMonth = Number(input[1]);
    let salary = 0;

    switch(season){
        case "Spring":
        case "Autumn":
            if (kiloPerMonth <= 5000){
                salary = kiloPerMonth * 0.75;
            } else if (kiloPerMonth <= 10000){
                salary = kiloPerMonth * 0.95;
            } else if (kiloPerMonth <= 20000){
                salary = kiloPerMonth * 1.45;
            }
            break;
        case "Summer":
            if (kiloPerMonth <= 5000){
                salary = kiloPerMonth * 0.90;
            } else if (kiloPerMonth <= 10000){
                salary = kiloPerMonth * 1.10;
            } else if (kiloPerMonth <= 20000){
                salary = kiloPerMonth * 1.45;
            }
            break;
        case "Winter":
            if (kiloPerMonth <= 5000){
                salary = kiloPerMonth * 1.05;
            } else if (kiloPerMonth <= 10000){
                salary = kiloPerMonth * 1.25;
            } else if (kiloPerMonth <= 20000){
                salary = kiloPerMonth * 1.45;
            }
            break;    
    }
    salary *= 4;
    salary *= 0.9;
    console.log(salary.toFixed(2));



}