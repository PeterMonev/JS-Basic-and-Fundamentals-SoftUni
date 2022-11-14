function worldTour(input){
    
    let destination = input.shift();
    
    for(let line of input){
        let command = line.split(':');

         if(command[0] === 'Travel'){
            return console.log(`Ready for world tour! Planned stops: ${destination}`)
         } 

        if(command[0] === 'Add Stop'){
            let index = Number(command[1]);
            let city = command[2];
              
            if(destination.length > index && index >= 0){
                let firstPart = destination.substring(0,index);
                let secondPart = destination.substring(index);
                destination = firstPart + city + secondPart;
                
               } 
               console.log(destination);
        } else if (command[0] === 'Remove Stop'){
                let starIndex = Number(command[1]);
                let endIndex = Number(command[2]);
              
                if((starIndex >= 0 && starIndex < destination.length) && (endIndex < destination.length && endIndex >= 0) && (starIndex <= endIndex)){
                let firstPart = destination.substring(0,starIndex);
                let secondPart = destination.substring(endIndex+1);
                destination = firstPart + secondPart;
          
                } 
            console.log(destination);
        } else if (command[0] === 'Switch'){
            let oldstring = command[1];
            let newstring = command[2];

            if(destination.includes(oldstring)){
                let splitted = destination.split(oldstring);
                destination = splitted.join(newstring);
               
            }
             console.log(destination);
        }
    }

}
worldTour((["Albania:Bulgaria:Cyprus:Deuchland",
"Add Stop:3:Nigeria",
"Remove Stop:4:8",
"Switch:Albania: Azərbaycan",
"Travel"])
);