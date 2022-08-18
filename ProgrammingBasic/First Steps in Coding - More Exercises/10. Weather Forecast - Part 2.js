function weatherForecast2(input){
    const weather = Number(input[0]);
    
   
    if (weather >= 26.00 && weather <= 35.00  ){
      console.log("Hot")
    } else if (weather >= 20.1 && weather <=  25.09){
      console.log("Warm")
      
    } else if (weather >= 15.00 && weather <= 20.00){
      console.log("Mild")
  
    } else if (weather >= 12.00 && weather <= 14.9){
      console.log("Cool")

    } else if (weather >= 5.00 && weather <= 11.9){
      console.log("Cold")

    } else {
      console.log("unknown")
    }
     









}
weatherForecast2([16.5])
