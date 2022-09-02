function bills(input){
    let month = Number(input[0]);
    let allElectricity =0 ;
    let water = 0;
    let net = 0;
    let order = 0;
    let allWater = 0 ;
    let allNet = 0;
    let allorder = 0;

    for (i = 1; i <= month ; i++){
        let electricity = Number(input[i]);
        allElectricity += electricity
        water = 20
        allWater += water;
        net = 15;
        allNet += net;
        order = (electricity + water + net) * 1.2;
        allorder += order;
    }
    let averagePrice = (allElectricity + allWater + allNet + allorder) / month

    console.log(`Electricity: ${allElectricity.toFixed(2)} lv`);
    console.log(`Water: ${allWater.toFixed(2)} lv`);
    console.log(`Internet: ${allNet.toFixed(2)} lv`);
    console.log(`Other: ${allorder.toFixed(2)} lv`);
    console.log(`Average: ${averagePrice.toFixed(2)} lv`);
    


}
bills([5,68.63,89.25,132.53,93.53,63.22]);