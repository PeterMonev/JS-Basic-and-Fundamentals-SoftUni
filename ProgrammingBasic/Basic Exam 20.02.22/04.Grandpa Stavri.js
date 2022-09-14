function grandpaStavri(input){
    let days = Number(input[0]);
    index = 1;

    let rakia = Number(input[index++]);
    let degrees = Number(input[index++]);

    let allRakia = 0;
    let allDegrees = 0;
    let degreesPerday = 0;

    for(let i = 1; i <= days; i++){
        allRakia = allRakia + rakia;
        degreesPerday = rakia * degrees
        allDegrees += degreesPerday;
        rakia = Number(input[index++]);
        degrees = Number(input[index++])

    }
    let averegeDegrees = 0;
    averegeDegrees = allDegrees / allRakia;
    console.log(`Liter: ${allRakia.toFixed(2)}`);
    console.log(`Degrees: ${averegeDegrees.toFixed(2)}`);
    if(averegeDegrees < 38){
        console.log("Not good, you should baking!");
    } else if (averegeDegrees >= 38 && averegeDegrees <= 42){
        console.log("Super!");
    } else {
        console.log("Dilution with distilled water!");
    }
    
}
grandpaStavri(["3","100","45","50","55","150","36"]);
grandpaStavri(["2","200","43","200","40"]);