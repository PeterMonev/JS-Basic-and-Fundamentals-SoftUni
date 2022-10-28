function objectTowns(input){
   let listOfTowns = {};
   
   for(let tokens of input){
      let towninfo = tokens.split(' | ');
      let townName = towninfo[0];
      let latitude = Number(towninfo[1]).toFixed(2);
      let longitude = Number(towninfo[2]).toFixed(2);

      listOfTowns.town = townName;
      listOfTowns.latitude = latitude;
      listOfTowns.longitude = longitude;
      console.log(listOfTowns);
   }

}
objectTowns(['Sofia | 42.696552 | 23.32601',
'Beijing | 39.913818 | 116.363625']
)