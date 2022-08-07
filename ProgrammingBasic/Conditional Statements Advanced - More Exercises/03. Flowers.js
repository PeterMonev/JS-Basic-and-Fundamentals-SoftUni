function flowers(input){
    const chrysan = Number(input[0]);
    const roses = Number(input[1]);
    const tulips = Number(input[2]);
    const season = input[3];
    const holiday = input[4];

    let allFlower = chrysan + roses + tulips
    let bouquetPrice = 2;
     

    switch (season){
        case "Spring":
            if (tulips >= 7){
                bouquetPrice = chrysan * 2 + roses * 4.1 + tulips * 2.5;
                bouquetPrice *= 0.95
            } else {
                bouquetPrice = chrysan * 2 + roses * 4.1 + tulips * 2.5;
            }
            if (holiday == "Y"){
                bouquetPrice *= 1.15;
            }    
            break;
        case "Summer":
            if (holiday == "Y"){
                bouquetPrice = chrysan * 2 + roses * 4.1 + tulips * 2.5;
                bouquetPrice *= 1.15;
                } else {
                    bouquetPrice = chrysan * 2 + roses * 4.1 + tulips * 2.5;
                }
            break;
        case "Autumn":
            if (holiday == "Y"){
                bouquetPrice = chrysan * 3.75 + roses * 4.5 + tulips * 4.15;
                bouquetPrice *= 1.15;
                } else {
                    bouquetPrice = chrysan * 3.75 + roses * 4.5 + tulips * 4.15;
                }
                break;
        case "Winter":
            if (roses >= 10){
                bouquetPrice = chrysan * 3.75 + roses * 4.5 + tulips * 4.15;
                bouquetPrice *= 0.90;
            } else {
                bouquetPrice = chrysan * 3.75 + roses * 4.5 + tulips * 4.15;
            }
            if (holiday == "Y"){
                bouquetPrice *= 1.15;
            }
            break;
    }
    if (allFlower >= 20){
        bouquetPrice *= 0.8;
    }
    bouquetPrice += 2
 console.log(bouquetPrice.toFixed(2));



}
flowers(["2","4","8","Spring",'Y'])