function  equalPairs(input){
    let n = Number(input[0]);
    let firstPair = Number(input[1]) + Number(input[2]);
    let maxdiff = 0;
    let mindiff = 0; 

    for(let i = 3; i <= n * 2; i += 2 ){
        let thirdNum =  Number(input[i]);
        let fourNum = Number(input[i+1]);
        secondtPair = thirdNum + fourNum;
        
        if(firstPair != secondtPair){
            maxdiff =Math.abs(firstPair - secondtPair);
            firstPair = secondtPair;
           if(maxdiff > mindiff){
               mindiff = maxdiff;
           }
        }
       
    }
    if (mindiff === 0){
      console.log(`Yes, value=${firstPair}`);
    } else {
        console.log(`No, maxdiff=${mindiff}`)
    }
}
 equalPairs([3,1,2,0,3,4,-1])
equalPairs([2,1,2,2,2])
equalPairs([4
    ,1
    ,1
   , 3
   , 1
   , 2
   , 2
   , 0
   , 0])