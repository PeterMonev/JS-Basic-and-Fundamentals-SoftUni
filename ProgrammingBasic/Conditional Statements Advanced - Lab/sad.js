function workingHours(input){
    const time = Number(input[0]);
    const day = input[1];

    if (day === "Monday" || day === "Tuesday" || day === "Wednesday" || day === "Thursday" || day === "Friday" || day === "Saturday" ){
       if (time >= 10 && time <= 18){
           console.log("open")
       } else {
        console.log("closed");
           
       }


    } else {
        console.log("closed");
    }
 










}
workingHours(["11","Monday"]);
workingHours(["19","Friday"]);
workingHours(["11","Sunday"]);