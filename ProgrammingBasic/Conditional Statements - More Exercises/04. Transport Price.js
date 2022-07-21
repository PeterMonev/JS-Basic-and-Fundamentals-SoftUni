function transportPrice(input){
    const kilometer = Number(input[0]);
    const day = input[1];

    let taxiPrice = 0.7;
    let busPrice = 0;
    let trainPrice = 0;

    if (kilometer < 20){
       if (day === "day"){
            taxiPrice += kilometer * 0.79;
            console.log(taxiPrice.toFixed(2))
    } else {
        taxiPrice += kilometer * 0.9;
        console.log(taxiPrice.toFixed(2))
    }
} else if (kilometer >= 20 && kilometer < 100){
        busPrice = kilometer * 0.09;
        console.log(busPrice.toFixed(2))
    } else {
        trainPrice = kilometer * 0.06; 
        console.log(trainPrice.toFixed(2))
    }
  
    
}
transportPrice(["5","day"]);
transportPrice(["7","night"]);
transportPrice(["25","day"]);
transportPrice