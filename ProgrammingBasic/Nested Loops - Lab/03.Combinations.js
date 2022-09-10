function combinations(input){
    let n = Number(input[0]);
    resultCoutner = 0;

    for(let x = 0; x <= 25 ; x++){
          for(let y = 0; y <= 25 ; y++){
              for(let z = 0 ; z <= 25; z++){
                  let reuslt = x + y +z
                  
                  if(reuslt === n){
                      
                    resultCoutner++;
                      
                      
                  }
              }
          }
    }console.log(resultCoutner)

}
combinations(["25"]);
