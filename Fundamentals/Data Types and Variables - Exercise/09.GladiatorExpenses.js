function gladiatorExpenses(lostFight,helmetPrice,swordPrice,shieldPrice,armorPrice) {
    let expeses = 0;
    let lostFightCounter = 0;
    let shieldBrokeCounter = 0;

    for (let i = 1; i <= lostFight; i++){
        lostFightCounter++;
        if (lostFightCounter % 2 == 0){
            expeses += helmetPrice;
        }
        if(lostFightCounter % 3 == 0){
            expeses += swordPrice;
        }
        if(lostFightCounter % 6 == 0){
            expeses += shieldPrice;
            shieldBrokeCounter++;
            if(shieldBrokeCounter % 2 == 0){
                expeses += armorPrice;
            }
        }

    }
    console.log(`Gladiator expenses: ${expeses.toFixed(2)} aureus`)

}
gladiatorExpenses(7, 2, 3, 4, 5);
