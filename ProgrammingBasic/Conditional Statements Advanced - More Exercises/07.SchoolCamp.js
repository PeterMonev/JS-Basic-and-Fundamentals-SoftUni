function schoolCamp(input){
    const season = input[0];
    const groupType = input[1];
    const students = Number(input[2]);
    const night = Number(input[3]);
    let price = 0;
    let sport = ""

    switch(season){
        case "Winter":
            if (groupType == "boys"){
                price = students * 9.60;
                sport = "Judo";
            } else if (groupType == "girls"){
                price = students * 9.60;
                sport = "Gymnastics";
            } else {
                price = students * 10;
                sport = "Ski"
            }
            break;
        case "Spring":
            if (groupType == "boys"){
                price = students * 7.20;
                sport = "Tennis";
            } else if (groupType == "girls"){
                price = students * 7.20;
                sport = "Athletics";
            } else {
                price = students * 9.50;
                sport = "Cycling";
            }
            break;
            case "Summer":
            if (groupType == "boys"){
                price = students * 15;
                sport = "Football";
            } else if (groupType == "girls"){
                price = students * 15;
                sport = "Volleyball";
            } else {
                price = students * 20;
                sport = "Swimming";
            }
            break;
    }
    if (students >= 10 && students < 20){
        price *= 0.95;
    } else if (students >= 20 && students < 50){
        price *= 0.85;
    } else if (students >= 50) {
        price *= 0.5;
    }
let totalSum = price * night
console.log(`${sport} ${totalSum.toFixed(2)} lv.`)


}
schoolCamp(["Spring","girls","20","7"]);
schoolCamp(["Winter","mixed","9","15"]);
schoolCamp(["Summer","boys","60","7"]);
schoolCamp(["Spring","mixed","17","14"]);
