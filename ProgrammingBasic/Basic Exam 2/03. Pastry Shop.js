function pastryShop(input){
    let cake = input[0];
    let orderCake = Number(input[1]);
    let days = Number(input[2]);
    let cakePrice = 0;
    let soufflePrice = 0; 
    let baklavaPrice = 0;
    let price = 0;

    switch(cake){
        case "Cake":
            if(days <= 15){
                cakePrice = 24;
                price = cakePrice * orderCake
            } else {
                cakePrice = 28.70;
                price = cakePrice * orderCake
            }
            break;
        case "Souffle":
           if(days <= 15){
               soufflePrice = 6.66;
               price = soufflePrice * orderCake;
           } else {
               soufflePrice = 9.80;
               price = soufflePrice * orderCake;
           }
           break;
        case "Baklava":
            if(days <= 15){
                baklavaPrice = 12.60;
                price = baklavaPrice * orderCake
            } else {
                baklavaPrice = 16.98;
                price = baklavaPrice * orderCake
            }
            break;
    }
    if(days <= 22){
        if(price >= 100 && price <= 200){
            price *= 0.85;
        } else if (price > 200){
            price *= 0.75;
        }
    }
    if(days <= 15){
        price *= 0.90;
    }
    console.log(price.toFixed(2))
    
}
pastryShop(["Cake","10","15"])
