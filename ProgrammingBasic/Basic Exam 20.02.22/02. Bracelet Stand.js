function braceletStand(input){
    let moneyPerDay = Number(input[0]);
    let moneyFromSell = Number(input[1]);
    let costAlltime = Number(input[2]);
    let presentPrice = Number(input[3]);

    let days = 5;
    let savedMoney = moneyPerDay * days;
    let wonMoney = moneyFromSell * days;
    let allSavedMoney = savedMoney + wonMoney;
    let sumOfAllmoney = allSavedMoney - costAlltime;
    let neededMoney = 0;

    if(sumOfAllmoney > presentPrice){
        console.log(`Profit: ${sumOfAllmoney.toFixed(2)} BGN, the gift has been purchased.`)
    } else {
        neededMoney = presentPrice - sumOfAllmoney;
        console.log(`Insufficient money: ${neededMoney.toFixed(2)} BGN.`)
    }


}
braceletStand(["5.12","32.05","15","150"]);
braceletStand(["2.10",
"17.50",
"20.20",
"148.50"])