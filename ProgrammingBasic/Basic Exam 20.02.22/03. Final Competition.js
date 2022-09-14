function finalCompetitions(input){
    let numberDancer = Number(input[0]);
    let points = Number(input[1]);
    let season = input[2];
    let place = input[3];

    let money = 0 ;

    switch(place){
        case "Bulgaria":
            money = numberDancer * points;
            if (season === "summer"){
                money *= 0.95;
            } else {
                money *= 0.92;
            }
            break;
        case "Abroad":
            money = (numberDancer * points) * 1.50;
            if(season === "summer"){
                money *= 0.9;
            
            } else {
                money *= 0.85;
            }
           break;
    } 
    let charity = 0 ;
    charity =  money * 0.75;
    let leftMoney = 0;
    leftMoney = money - charity;
    let moneyPerDancer = 0;
    moneyPerDancer = leftMoney / numberDancer

    console.log(`Charity - ${charity.toFixed(2)}`);
    console.log(`Money per dancer - ${moneyPerDancer.toFixed(2)}`);
 




}
finalCompetitions(["1","89.5","summer","Abroad"])