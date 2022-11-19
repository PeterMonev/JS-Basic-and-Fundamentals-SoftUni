function heroesOfCodeAndLogic(input){
    let number = input.shift();
    let heroes = {};
 
    for(let i = 0;i < number;i++){
       let tokens = input.shift().split(' ');
       let name = tokens[0];
       let hp = Number(tokens[1]);
       let mp = Number(tokens[2]);
 
       heroes[name] = {
         hp,
         mp,
       }
    }
    
    while(input[0] != 'End'){
       let tokens = input.shift().split(' - ');
       let command = tokens[0];
       let name = tokens[1];
       let p1 = +tokens[2];
       let p2 = tokens[3];
       let hero = heroes[name];
 
       if(command == 'Heal'){
          if(hero.hp >= 0 ){
             let currhp = hero.hp + p1;
               if(currhp <= 100){
                 hero.hp += p1;
                 console.log(`${name} healed for ${p1} HP!`)
               } else {
                  let remain = 100 - hero.hp;
                  hero.hp += remain;
                  console.log(`${name} healed for ${remain} HP!`)
               }
             
          }
       } else if (command === 'Recharge'){
         if(hero.mp > 0 ){
             let currmp = hero.mp + p1;
               if(currmp <= 200){
                 hero.mp += p1;
                 console.log(`${name} recharged for ${p1} MP!`)
               } else {
                  let remain = 200 - hero.mp;
                  hero.mp += remain;
                  console.log(`${name} recharged for ${remain} MP!`)
               }
             
          }
       } else if (command === 'TakeDamage'){
            hero.hp -= p1;
           if(hero.hp > 0){
             console.log(`${name} was hit for ${p1} HP by ${p2} and now has ${hero.hp} HP left!`)
         } else {
             delete heroes[name];
             console.log(`${name} has been killed by ${p2}!`);
         }
       } else if (command === 'CastSpell'){
          if(hero.mp - p1 >= 0){
             hero.mp -= p1;
             console.log(`${name} has successfully cast ${p2} and now has ${hero.mp} MP!`)
          } else {
            console.log(`${name} does not have enough MP to cast ${p2}!`)
          }
       }
    }
    
    for(let heroData of Object.entries(heroes)){
       let name = heroData[0];
       let hero = heroData[1];
       console.log(name);
       console.log(`  HP: ${hero.hp}`);
       console.log(`  MP: ${hero.mp}`);
    }
 }
heroesOfCodeAndLogic(['2',
    'Solmyr 85 120',
    'Kyrre 99 50',
    'Heal - Solmyr - 10',
    'Recharge - Solmyr - 50',
    'TakeDamage - Kyrre - 66 - Orc',
    'CastSpell - Kyrre - 15 - ViewEarth',
    'End'
]);