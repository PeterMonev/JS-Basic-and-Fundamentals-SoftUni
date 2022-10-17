function houseParty(array) {
   let list = [];

   for(let lines of array) {
       let tokes = lines.split(" ");
       let names = tokes[0];
       if(tokes.length === 3){
           if(list.includes(names)){
               console.log(`${names} is already in the list!`);
           } else {
               list.push(names);
           }
       } else {
           let indexOfList = list.indexOf(names);
           if(indexOfList !== -1){
                 list.splice(indexOfList,1);
           } else {
               console.log(`${names} is not in the list!`)
           }
       }
   }
   console.log(list.join('\n'));

}
houseParty([
  "Allie is going!",
  "George is going!",
  "John is not going!",
  "George is not going!",
]);
houseParty(['Tom is going!',
'Annie is going!',
'Tom is going!',
'Garry is going!',
'Jerry is going!']
)
