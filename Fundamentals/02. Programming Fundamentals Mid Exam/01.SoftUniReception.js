function softUniReception(workArr){
    
    let firstEmployer = Number(workArr.shift());
    let secondEmployer = Number(workArr.shift());
    let thirdEmployer = Number(workArr.shift());
    let employeesWokrPerHour = firstEmployer + secondEmployer + thirdEmployer;
    let counter = 0;


    while(workArr > 0){
         counter++;
         if(counter % 4 === 0){
       
         } else {
             workArr -= employeesWokrPerHour 
         }

        }
       
    
   console.log(`Time needed: ${counter}h.`)

}

//softUniReception(['5','6','4','20']);
softUniReception(['1','2','3','45']);
softUniReception([3,2,5,40])