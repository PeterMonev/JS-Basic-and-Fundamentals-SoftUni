function hotelRoom(input){
    const season = input[0];
    const night = Number(input[1]);
    
    const mayOctStudio = 50;
    const mayOctAparty = 65;
    const juneSeptStudio = 75.20;
    const juneSeptApart = 68.70;
    const julyAugstStudio = 76;
    const julyAugstApart = 77;

    let studioPrice = 0;
    let apartPrice =0;

    switch (season) {
        case "May":
        case "October":
            studioPrice = mayOctStudio;
            apartPrice = mayOctAparty;
            if (night > 7 && night < 14){
               studioPrice *= 0.95;
            } else if (night > 14){
                studioPrice *= 0.70;
            }
            break;
        case "June":
        case "September":
            studioPrice = juneSeptStudio;
            apartPrice = juneSeptApart
            if (night > 14){
                studioPrice *= 0.80;
            }
            break;
        case "July":
        case "August":
            studioPrice = julyAugstStudio;
            apartPrice = julyAugstApart;
      
            break;
    } 
    if (night > 14){
        apartPrice *= 0.90;
    }
      let finalApartPrice = apartPrice * night;
      let finalStuidoPrice = studioPrice * night;
    console.log(`Apartment: ${finalApartPrice.toFixed(2)} lv.`);
    console.log(`Studio: ${finalStuidoPrice.toFixed(2)} lv.`);



}
hotelRoom(["May","15"]);
hotelRoom(["June","14"]);
hotelRoom(["August","20"]);