function foodDelivery(input){
    const chikenMenuPrice = 10.35  
    const fishMenuPrice = 12.40 
    const vegetarianMenuPrice = 8.15
    const DeliveryPrice = 2.5
    const percentOfTotalSum = 0.2

    const numberChickenMenu = Number(input[0])
    const numberFishMenu = Number(input[1])
    const numbervegetarianMenu = Number(input[2])

    const orderChickenPrice = chikenMenuPrice * numberChickenMenu
    const orderFishPrice = fishMenuPrice * numberFishMenu
    const orderVegatarianPrice = vegetarianMenuPrice * numbervegetarianMenu
    const totalPriceMenu = orderChickenPrice + orderFishPrice + orderVegatarianPrice
    const desertPrice = totalPriceMenu * percentOfTotalSum
    const finalSum = totalPriceMenu + desertPrice +DeliveryPrice

    console.log(finalSum)
    
    

}

foodDelivery(["2","4","3"])
