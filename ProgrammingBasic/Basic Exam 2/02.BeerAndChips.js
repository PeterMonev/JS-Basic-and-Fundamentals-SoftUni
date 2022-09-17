function beerAndChips(input){
    let name = input[0];
    let budget = Number(input[1]);
    let beers = Number(input[2]);
    let chips = Number(input[3]);

    let allPriceBeer = beers * 1.20;
    let chipsPrice = allPriceBeer * 0.45;
    let allChipsPrice = Math.ceil(chipsPrice * chips);
    let allSum = allPriceBeer + allChipsPrice;
    let leftMoney = 0

    if(allSum <= budget){
        leftMoney = budget - allSum
        console.log(`${name} bought a snack and has ${leftMoney.toFixed(2)} leva left.`)
    } else {
        leftMoney = allSum - budget
        console.log(`${name} needs ${leftMoney.toFixed(2)} more leva!`)
    }






}
beerAndChips(["George","10","2","3"])