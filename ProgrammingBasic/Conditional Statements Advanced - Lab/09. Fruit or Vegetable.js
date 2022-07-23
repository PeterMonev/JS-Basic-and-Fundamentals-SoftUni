function fruitOrVegatable(input){
    const type = input[0];
//tomato, cucumber, pepper и carrot

    switch (type){
        case "banana":
        case "apple":
        case "kiwi":                            
        case "cherry":
        case "lemon":
        case "grapes": console.log("fruit"); break ;
        case "tomato":
        case "cucumber":
        case "pepper":
        case "carrot": console.log("vegetable"); break ;
        default: console.log("unknown"); break ;




    }









}
fruitOrVegatable(["banana"]);
fruitOrVegatable(["tomato"]);
fruitOrVegatable(["water"]);