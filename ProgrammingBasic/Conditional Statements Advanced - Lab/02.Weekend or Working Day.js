function weekendorWorkingDay(input){
    const weekDay = input[0];

    switch (weekDay){
        case "Monday": 
        case "Tuesday": 
        case "Wednesday": 
        case "Thursday": 
        case "Friday": console.log("Working day"); break ;
        case "Saturday": 
        case "Sunday": console.log("Weekend"); break ;
        default: console.log("Error"); break ;
    }








}
weekendorWorkingDay(["Monday"]);
weekendorWorkingDay(["Sunday"]);
weekendorWorkingDay(["April"]);
