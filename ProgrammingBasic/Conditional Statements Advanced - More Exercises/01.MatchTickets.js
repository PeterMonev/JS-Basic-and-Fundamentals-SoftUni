function matchTickets(input){
    let budget = Number(input[0]);
    let category = input[1];
    let people = Number(input[2]);
    let vip = 499.99;
    let normal = 249.99;
    let finalPrice = 0;
    let transport = 0;

    if (people <= 4){
         transport = budget * 0.75;
    } else if (people <= 9){
          transport = budget * 0.60;
    } else if (people <= 24){
     transport = budget * 0.50;
    } else if (people <= 49){
    transport = budget * 0.40;
    } else {
       transport = budget * 0.25
    }
    let sum = 0 ;
    
    switch (category){
        case "Normal":
            finalPrice = (people * normal) + transport;
            if(budget >= finalPrice){
                 sum = budget - finalPrice
                console.log(`Yes! You have ${sum.toFixed(2)} leva left.`);
            } else {
               sum = finalPrice - budget
                console.log(`Not enough money! You need ${sum.toFixed(2)} leva.`);
            }
            break;
        case "VIP":
 finalPrice = (people * vip) + transport;
            if (budget >= finalPrice){
               sum = budget - finalPrice;
                console.log(`Yes! You have ${sum.toFixed(2)} leva left.`);
            } else {
                sum = finalPrice - budget;
                console.log(`Not enough money! You need ${sum.toFixed(2)} leva.`)
            }

        } 
      
        
    

}
matchTickets(["1000","Normal","1"]);
matchTickets(["30000","VIP","49"]);