function pets(input){
    const days = Number(input[0]);
    const foodKg = Number(input[1]);
    const foodDogKg = Number(input[2]);
    const foodCatKg = Number(input[3]);
    let foodTurtleKg = Number(input[4]);
    foodTurtleKg /= 1000
    let allDog = days * foodDogKg;
    let allCat = days * foodCatKg;
    let allTurtle = days * foodTurtleKg;
    let allFood = allDog + allCat + allTurtle;
    let result =0 ;
    
    if (allFood <= foodKg){
        result = Math.floor(foodKg - allFood);
        console.log(`${result} kilos of food left.`)
    } else {
        result = Math.ceil(allFood - foodKg);
        console.log(`${result} more kilos of food are needed.`)
    }


}
pets(["2","10","1","1","1200"]);
pets(["5","10","2.1","0.8","321"])