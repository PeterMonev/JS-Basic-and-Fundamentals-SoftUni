function vacation(input){
    let vacationMoney = Number(input[0]);
    let money = Number (input[1]);
    let index = 2;
    let dayCoutner = 0;
    let anotherDayCounter = 0;
    let allday = 0;

    while(money < vacationMoney){
        let day = input[index++];
        let sumSaveSpend = Number(input[index++]);
        dayCoutner++
        if(day === "spend"){
            anotherDayCounter++
            if(money <= sumSaveSpend){
             
                money = 0;
            } else {
                money -= sumSaveSpend
            }
            if(dayCoutner >= 5){
                console.log("You can't save the money.");
                console.log(`${dayCoutner}`);
                break;
            }  
        } else if (day === "save") {
            anotherDayCounter = 0;
            money += sumSaveSpend;
            if (money >= vacationMoney){
       
  console.log(`You saved the money for ${dayCoutner} days.`)
break ;
}

        }
   
    }
  


}
//vacation(["2000","1000","spend","1200","save","2000"])
//vacation(["110","60","spend","10","spend","10","spend","10","spend","10","spend","10"])
//vacation(["250","150","spend","50","spend","50","save","100","save","100"])
vacation(["250",
"150",
"spend",
"50",
"spend",
"50",
"save",
"100",
"save",
"100"]);