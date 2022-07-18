 function timerMinutes(input){
    const hours = Number (input[0])
    const minutes = Number (input[1])

    minutes += 15

 if (minutes >= 60 ){
     hours += 1

  
 }

 if (hours >= 24){
    hours = 0


 }





 
}
timerMinutes((["1", "46"]))