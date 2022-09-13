function catDiet(input){
    let fat = Number(input[0]);
    let protein = Number(input[1]);
    let carbohydrates = Number(input[2]);
    let allCalories = Number(input[3]);
    let procentegeWater = Number(input[4]);

    let fatCalorie = 9;
    let proteinCalorie = 4;
    let carbihydratesCalorie = 4
    fat = fat / 100
    protein = protein / 100;
    carbohydrates = carbohydrates / 100

    let allFat = (allCalories * fat) / fatCalorie;
    let allProtein = (allCalories * protein) / proteinCalorie;
    let allCarbohydrates = (allCalories * carbohydrates) / carbihydratesCalorie

    let allKgFood = allFat + allProtein + allCarbohydrates
    let perOnegram = allCalories / allKgFood
    
    procentegeWater = procentegeWater / 100
    let water = perOnegram * procentegeWater
    let onlyCalories = perOnegram - water

     
    
  
    


    console.log(onlyCalories.toFixed(4));

}
catDiet(["60",
"25",
"15",
"2500",
"60"])