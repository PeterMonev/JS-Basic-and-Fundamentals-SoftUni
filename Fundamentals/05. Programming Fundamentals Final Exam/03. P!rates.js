function pirates(input) {
    let cities = {};
    let tokens = input.shift().split('||');

    while(tokens[0] != 'Sail'){
       
        let name = tokens[0];
        let people = Number(tokens[1]);
        let gold = Number(tokens[2]);

        if(!cities.hasOwnProperty(name)){
        cities[name] = {
            people: people,
            gold: gold,
        }
    } else {
        cities[name].people += people;
        cities[name].gold += gold;
    }
         tokens = input.shift().split('||');
    }
  
   let command = input.shift().split('=>');

   while(command[0] !== 'End'){
       let currCommand = command[0];
       let name = command[1];
       let peolple = Number(command[2]);
       let gold = Number(command[3]);
       let city = cities[name];

       if(currCommand === 'Plunder'){
                city.people -= peolple;
                city.gold -= gold;
                console.log(`${name} plundered! ${gold} gold stolen, ${peolple} citizens killed.`)
                if(city.people <= 0 || city.gold <= 0){
                   delete cities[name];
                   console.log(`${name} has been wiped off the map!`);
                }
            
       } else if (currCommand === 'Prosper'){
          if(peolple < 0){
            console.log(`Gold added cannot be a negative number!`);
            
          } else {
            city.gold += peolple;
            console.log(`${peolple} gold added to the city treasury. ${name} now has ${city.gold} gold.`)
          }
       }
       command = input.shift().split('=>');
   }
   
   if(Object.keys(cities).length > 0) {
   console.log(`Ahoy, Captain! There are ${Object.keys(cities).length} wealthy settlements to go to:`);
       for(let lines of Object.entries(cities)){
        let name = lines[0];
        let p = lines[1];
        console.log(`${name} -> Population: ${p.people} citizens, Gold: ${p.gold} kg`)
       }
   } else {
    console.log(`Ahoy, Captain! All targets have been plundered and destroyed!`)
   }
   

}
pirates(["Nassau||95000||1000",
"San Juan||930000||1250",
"Campeche||270000||690",
"Port Royal||320000||1000",
"Port Royal||100000||2000",
"Sail",
"Prosper=>Port Royal=>-200",
"Plunder=>Nassau=>94000=>750",
"Plunder=>Nassau=>1000=>150",
"Plunder=>Campeche=>150000=>690",
"End"])

