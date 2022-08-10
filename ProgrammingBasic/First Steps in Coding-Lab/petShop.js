function petShop(input){
    let dogFood = Number(input[0])
    let catFood = Number(input[1])
    let dogfoodprice = 2.50 
    let catfoodprice = 4
    let total = (dogFood * dogfoodprice) + (catFood * catfoodprice)
    console.log(`${total} lv.`)
   
}  
petShop(["5 ","4 "])

