function backToThePast(input){
    let cash = Number(input[0]);
    let years = Number(input[1]);
    let age = 18;
    let resultCash = 0;

    for(i = 1800 ; i <= years; i++){

        if( i % 2 === 0){
           cash -= 12000;
           age += 1;
        } else {
           cash -= (12000 + (50 * age));
            age += 1;
        }
    } 

   
    if (cash >= 0){
        console.log(`Yes! He will live a carefree life and will have ${cash.toFixed(2)} dollars left.`);
    } else {
        let needeCash = Math.abs(cash);
         console.log(`He will need ${needeCash.toFixed(2)} dollars to survive.`)
        
            
        }
    
    
   





}
backToThePast([50000,1802]);
backToThePast([100000.15,1808]);