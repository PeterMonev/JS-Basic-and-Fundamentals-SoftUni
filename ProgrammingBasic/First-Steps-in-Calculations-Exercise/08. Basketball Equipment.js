function basketballEquipment(input){
    const yearTax = Number(input[0])
    const basketballSneakers = yearTax - (yearTax / 100) * 40
    const basketballSuit = basketballSneakers - (basketballSneakers / 100) * 20
    const basketballBall = basketballSuit / 4
    const basketballAcc = basketballBall / 5
    const totalPriceEquipment = yearTax + basketballSneakers + basketballSuit + basketballBall + basketballAcc








   console.log(totalPriceEquipment)
}
 basketballEquipment(['365'])