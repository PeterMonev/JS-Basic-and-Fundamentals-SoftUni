function logistics(input){
    let numberOfParcels = Number(input[0]);
    let busPrice = 0;
    let truckPrice = 0;
    let trainPrice = 0;
    let busTons= 0 ;
    let truckTon = 0;
    let trainTon = 0;

    for(i = 1;i <= numberOfParcels;i++){
        let tons = Number(input[i]);
        if (tons <= 3){
            busTons += tons
            busPrice += tons * 200;
        } else if (tons >= 4 && tons <= 11){
            truckTon += tons
            truckPrice += tons * 175;
        } else {
            trainTon += tons;
            trainPrice += tons * 120;
        }
    }
    let allTons = trainTon + busTons + truckTon;
    let allPrice = trainPrice + busPrice + truckPrice;
    let averagePrice = allPrice / allTons;
    let busPercent = (busTons / allTons) * 100;
    let truckPercent = (truckTon / allTons) * 100;
    let trainPercent = (trainTon / allTons) * 100;

    console.log(averagePrice.toFixed(2));
    console.log((busPercent.toFixed(2))+"%");
    console.log((truckPercent.toFixed(2))+"%");
    console.log((trainPercent.toFixed(2))+"%");

    
}
logistics([4,1,5,16,3])