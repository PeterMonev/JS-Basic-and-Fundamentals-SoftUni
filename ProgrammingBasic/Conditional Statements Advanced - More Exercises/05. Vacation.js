function vacation(input){
    let budget = Number(input[0]);
    const season = input[1];
    let place = "";
    let location = "";
    

    switch (season){
        case "Summer":
            if (budget <= 1000){
                place = "Camp";
                location = "Alaska";
                budget *= 0.65;
            } else if (budget <= 3000){
                place = "Hut";
                location = "Alaska";
                budget *= 0.8;
            } else {
                place = "Hotel";
                location = "Alaska";
                budget *= 0.9;
            }
            break;
        case "Winter":
            if (budget <= 1000){
                place = "Camp";
                location = "Morocco";
                budget *= 0.45;
            } else if (budget <= 3000){
                place = "Hut";
                location = "Morocco";
                budget *= 0.6;
            } else {
                place = "Hotel";
                location = "Morocco";
                budget *= 0.9;
            }
            break;
    }
    console.log(`${location} - ${place} - ${budget.toFixed(2)}`)
    


}
vacation(["800","Summer"]);
vacation(["799.50","Winter"]);
vacation(["3460","Summer"]);
vacation(["2543.99","Winter"])