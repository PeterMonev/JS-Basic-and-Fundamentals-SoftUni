function yardGreening(input){
    let yard = Number(input[0])
    let price = 7.61
    let discount = 0.18
    let totalPrice = ( yard * price ) 
    let discountTotal = ( discount * totalPrice )
    let finalprice = (totalPrice - discountTotal)

    console.log(`The final price is: ${finalprice} lv.`)
    console.log(`The discount is: ${discountTotal} lv.`)

}   

yardGreening(["550"])