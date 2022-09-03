function footballLeague(input){
    let stadium = Number(input[0]);
    let fan = Number(input[1])
    let fanInSectorA = 0;
    let fanInSectorB = 0;
    let fanInSectorV = 0;
    let fanInSectorG = 0;

    for(let i = 2; i <= input.length; i++){
        let sector = input[i]
      
        switch(sector){
            case "A":
                fanInSectorA++;
                break;
            case "B":
                fanInSectorB++;
                break;
            case "V":
                fanInSectorV++;
                break;
            case "G":
                fanInSectorG++;
                break;    
        }
        
    }
let allFan = 0;
allFan = fanInSectorA + fanInSectorB + fanInSectorV + fanInSectorG;
console.log(`${((fanInSectorA / allFan) * 100).toFixed(2)}%`);
console.log(`${((fanInSectorB / allFan) * 100).toFixed(2)}%`);
console.log(`${((fanInSectorV / allFan) * 100).toFixed(2)}%`);
console.log(`${((fanInSectorG / allFan) * 100).toFixed(2)}%`);
console.log(`${((allFan / stadium) * 100).toFixed(2)}%`);


   

}
footballLeague([76,10,"A","V","V","V","G","B","A","V","B","B"]);