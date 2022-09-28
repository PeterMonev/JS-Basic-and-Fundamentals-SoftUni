function requiredReading(numbePages,pageReadOneHour,days){
    
    let hoursReading = numbePages / pageReadOneHour;
    let ivanReading = hoursReading / days;

    console.log(ivanReading)



}
requiredReading(212,20,2);