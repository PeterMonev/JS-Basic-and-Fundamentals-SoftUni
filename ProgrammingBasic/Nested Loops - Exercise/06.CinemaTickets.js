function cinemaTickets(input){
    index = 0;
    let film = input[index++];
    let studentCounter = 0;
    let standardCounter = 0;
    let kidCounter = 0 ;
    let seat = Number(input[index++]);
    let typeTicket = input[index++];
    let allTickets = 0;
    let hall = 0;
    let sumOFAllticket = 0;
    let sumOfAllStudent = 0;
    let sumOfallStandard = 0;
    let sumOfallKid = 0;

    while(film !== "Finish"){
    
    
        while(typeTicket !== "End"){
            if(typeTicket === "student"){
               studentCounter++;
            } else if (typeTicket === "standard"){
                standardCounter++;
            } else {
                kidCounter++;
            }
            
           typeTicket = input[index++];
           allTickets = studentCounter + standardCounter + kidCounter;
           if(allTickets >= seat){
               break;
           }
            }
            
            sumOFAllticket += allTickets;
            sumOfAllStudent += studentCounter;
            sumOfallStandard += standardCounter;
            sumOfallKid += kidCounter;
           hall = (allTickets / seat) * 100
            console.log(`${film} - ${hall.toFixed(2)}% full.`)
          if(typeTicket === "Finish"){
               break;
           }
      
           film = input[index++];
           seat = Number(input[index++])
           typeTicket = input[index++];
           allTickets = 0
           studentCounter = 0;
           standardCounter = 0; 
           kidCounter = 0;

         
              
           
           
        }



                   console.log(`Total tickets: ${sumOFAllticket}`)
               console.log(`${((sumOfAllStudent / sumOFAllticket) * 100).toFixed(2)}% student tickets.`);
               console.log(`${((sumOfallStandard / sumOFAllticket) * 100).toFixed(2)}% standard tickets.`);
               console.log(`${((sumOfallKid / sumOFAllticket) * 100).toFixed(2)}% kids tickets.`)
        
      
      
    
}
cinemaTickets(["Taxi","10","standard","kid","student","student","standard","standard","End","Scary Movie","6","student","student","student","student","student","student","Finish"])