function vacation(people,group,day){
    let price = 0;
    let allPrice = 0;
    switch(day){
        case "Friday":
            if(group === "Students"){
               price = 8.45;
               allPrice = price * people
            } else if(group === "Business"){
                price = 10.90;
                allPrice = price * people
            } else {
                price = 15;
                allPrice = price * people
            }
            break;
        case 'Saturday':
            if(group === "Students"){
                price = 9.80;
                allPrice = price * people
             } else if(group === "Business"){
                 price = 15.60;
                 allPrice = price * people
             } else {
                 price = 20;
                 allPrice = price * people
             }   
             break;
        case 'Sunday':
            if(group === "Students"){
                price = 10.46;
                allPrice = price * people
             } else if(group === "Business"){
                 price = 16;
                 allPrice = price * people
             } else {
                 price = 22.50;
                 allPrice = price * people
             }   
             break;          
    }
    if(group === 'Students' && people >= 30){
        allPrice *= 0.85;
    } else if (group === 'Business' && people >= 100){
        allPrice -= 10 * price
    } else if (group === 'Regular' && people >= 10 && people <= 20){
        allPrice *= 0.95;
    }
   console.log(`Total price: ${allPrice.toFixed(2)}`);

}
vacation(30,"Students","Sunday");
vacation(40,"Regular","Saturday")