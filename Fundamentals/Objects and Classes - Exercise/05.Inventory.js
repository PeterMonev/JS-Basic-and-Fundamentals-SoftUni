function invetory(input) {
   class Hero{
      constructor(name,level,items){
          this.name = name;
          this.level = level;
          this.items = items;
      }
   }
   
   let heroes = [];
 
   for(let infos of input){
      let info = infos.split(' / ');
      let hero = new Hero(info[0], Number(info[1]), info[2]);
      heroes.push(hero);
   }
    
   heroes.sort((a,b)=> a.level - b.level);  
 
   for(let hero of heroes){
    console.log(`Hero: ${hero.name}\nlevel => ${hero.level}\nitems => ${hero.items}`);
   } 

}
invetory([
  'Batman / 2 / Banana, Gun',
  'Superman / 18 / Sword',
  'Poppy / 28 / Sentinel, Antara'
  ]
  )