function traveling(input){
    index = 0;
    let destination = input[index++];

    while(destination !== "End"){
        let priceVacation = Number(input[index++]);
           
          for (let savedMoney = 0 ; savedMoney < priceVacation ; savedMoney++) {
                  save = Number(input[index++]);
                  savedMoney += save
                  
          }
          console.log(`Going to ${destination}!`)
          
          destination = input[index++];
          
    }
    
}
traveling(["Greece","1000","200","200","300","100","150","240","Spain","1200","300","500","193","423","End"]);
traveling(["France","2000","300","300","200","400","190","258","360","Portugal","1450","400","400","200","300","300",
"Egypt",
"1900",
"1000",
"280",
"300",
"500",
"End"])

