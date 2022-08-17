function vegetableMarket(input){
    const vegePrice = Number(input[0]);
    const fruitPrice = Number(input[1]);
    const vegeKg = Number(input[2])
    const fruitKg = Number(input[3])
    const euro = 1.94

    let allVege = vegePrice * vegeKg
    let allFruit = fruitPrice * fruitKg 
    let allSum = (allVege + allFruit) / euro
   

    console.log(allSum.toFixed(2));
                                        


    





}
vegetableMarket([0.194,19.4,10,10]);
vegetableMarket([1.5,2.5,10,10])