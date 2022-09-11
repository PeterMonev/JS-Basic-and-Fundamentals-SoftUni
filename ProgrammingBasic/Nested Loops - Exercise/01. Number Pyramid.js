function numberPyramid(input){
    let n = Number(input[0]);
    
    let currentNum = 0;
    let isEqual = false;

    for(let rows = 1 ; rows <= n ; rows++){
        let res = '';
        for(let cols = 1; cols <= rows ; cols++){
            currentNum++
            res += currentNum + " "
            if(currentNum === n){
                isEqual = true;
                break ;
            }
            

        }
        console.log(res)
         if(isEqual){
             break;
    }
        }
        
   
}
numberPyramid(["12"])