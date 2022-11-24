function degustationParty(input){
  let foods = new Map();
  let tokens = input.shift().split('-');
  let count = 0;

  while(tokens[0] != 'Stop'){
    let command = tokens[0];
    let name = tokens[1];
    let meal = tokens[2];
    
    
   if(command == 'Like'){

    if(!foods.has(name)){
        foods.set(name,[meal]);

    } else if(foods.has(name)){
        if(!foods.get(name).includes(meal)){
        foods.get(name).push(meal);
        }
    }

} else if(command == 'Dislike'){
    

     if(!foods.has(name)){
        console.log(`${name} is not at the party.`)

     } else {
        if(!foods.get(name).includes(meal)){
            console.log(`${name} doesn't have the ${meal} in his/her collection.`)
        } else {
          let index = foods.get(name).indexOf(meal);
          let swap = foods.get(name).splice(index, 1);
          count++;
          console.log(`${name} doesn't like the ${meal}.`)
        }
     }
}

    tokens = input.shift().split('-');
  }

  for(let line of foods.entries()){
    let name = line[0];
    let food = line[1];
    let meals = '';

    if(food.length > 0){
       console.log(`${name}: ${food.join(', ')}`);
    } else{
        console.log(`${name}:`)
    }
  }
 console.log(`Unliked meals: ${count}`)

}
degustationParty((["Like-Krisi-shrimps",
"Like-Krisi-soup",
"Like-Krisi-soup",
"Like-Penelope-dessert",
"Like-Misho-salad",
"Stop"])
)

solve((["Like-Krisi-shrimps",
"Dislike-Vili-carp",
"Dislike-Krisi-salad",
"Stop"])
)

solve((["Like-Katy-fish",
"Dislike-Katy-fish",
"Stop"])
)