function fruitShop(input){
    const fruit = input[0];
    const day = input[1];
    const quantity = Number(input[2]);
    let price = 0

    if (day === "Monday" || day === "Tuesday" || day === "Wednesday" || day === "Thursday" || day === "Friday"){
        switch(fruit){
            case "banana": price = quantity * 2.50;console.log(price.toFixed(2)); break ;
            case "apple": price = quantity * 1.20;console.log(price.toFixed(2)); break ;
            case "orange": price = quantity * 0.85;console.log(price.toFixed(2)); break ;
            case "grapefruit": price = quantity * 1.45;console.log(price.toFixed(2)); break ;
            case "kiwi": price = quantity * 2.70;console.log(price.toFixed(2)); break ;
            case "pineapple": price = quantity * 5.50;console.log(price.toFixed(2)); break ;
            case "grapes": price = quantity * 3.85;console.log(price.toFixed(2)); break ;
            default: console.log("error");}
    } else if (day=== "Saturday" || day === "Sunday"){
        switch(fruit){
            case "banana": price = quantity * 2.70;console.log(price.toFixed(2)) ; break ; 
            case "apple": price = quantity * 1.25;console.log(price.toFixed(2)); break ;
            case "orange": price = quantity * 0.90;console.log(price.toFixed(2)); break ;
            case "grapefruit": price = quantity * 1.60;console.log(price.toFixed(2)); break ;
            case "kiwi": price = quantity * 3.00;console.log(price.toFixed(2)); break ;
            case "pineapple": price = quantity * 5.60;console.log(price.toFixed(2)); break ;
            case "grapes": price = quantity * 4.20; console.log(price.toFixed(2));break ;
            default: console.log("error")
              }
    } else {
        console.log("error")
    } 





}
fruitShop(["apple","Tuesday","2"]);
fruitShop(["orange","Sunday","3"]);
fruitShop(["kiwi","Monday","2.5"]);
fruitShop(["grapes","Saturday","0.5"]);