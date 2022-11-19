function guineaPig(input) {

    let foodKg = Number(input[0]) * 1000;
    let hayKg = Number(input[1]) * 1000;
    let coverKg = Number(input[2]) * 1000;
    let puppyWeightGr = Number(input[3]) * 1000;
    let coverGiven = puppyWeightGr / 3;
    let isEnough = true

    for(let i = 1; i <= 30; i++){ 
         if(true){
        foodKg -= 300;
          if (foodKg <= 0){
            isEnough = false;
            break;
          }
         }
        if(i % 2 == 0){
            let hayGiven = foodKg * 0.05;
            hayKg -= hayGiven
            if(hayKg <= 0){
            isEnough = false; 
            break;
            }
        }
        
        if(i % 3 === 0){
            coverKg -= coverGiven;
            if(coverKg <= 0){
                isEnough = false;
                break;
            }
        }

    }
    if(isEnough){
   console.log(`Everything is fine! Puppy is happy! Food: ${(foodKg / 1000).toFixed(2)}, Hay: ${(hayKg / 1000).toFixed(2)}, Cover: ${(coverKg / 1000).toFixed(2)}.`)      
    } else {
        console.log("Merry must go to the pet store!");
    }
}
guineaPig(["10", "5", "5.2", "1"]);
guineaPig(["10", "5", "5.2", "1"]);
