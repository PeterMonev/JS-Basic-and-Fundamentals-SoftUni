function multiplyby2(input){
    let index = 0
    let number = Number(input[index++]);

    while(number >= 0){
        number = number * 2
        console.log(`Result: ${number.toFixed(2)}`)
       
        number = Number(input[index++]);
    }
    console.log("Negative number!")

}
multiplyby2([12,43.2144,12.3,543.23,-20])