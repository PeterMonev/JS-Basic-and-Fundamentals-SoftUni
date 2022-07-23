function workingHours(input){
    const time = Number(input[0]);
    const day = input[1];

    if (time >= 10 && time <= 18){
        switch (day){
            case "Sunday": console.log("closed"); 
            break;
            default: console.log("open"); 
            break;

        }
    } else {
        console.log("closed");
    }
   
 










}
workingHours(["11","Monday"]);
workingHours(["19","Friday"]);
workingHours(["11","Sunday"]);