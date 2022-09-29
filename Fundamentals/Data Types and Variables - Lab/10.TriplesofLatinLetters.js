function triplesOfLatinLetters(n){
   
    let firstLetter = '';
    let secondLetter = '';
    let thirdLetter = '';

    for(let i = 0; i < n; i++){
      firstLetter = String.fromCharCode(97 + i);
        for(let j = 0; j < n; j++){
         secondLetter= String.fromCharCode(97 + j);
            for(let k = 0; k < n; k++){
          thirdLetter = String.fromCharCode(97 + k);
                
          console.log((firstLetter + secondLetter + thirdLetter))
          
            }
        }
    }
}
triplesOfLatinLetters(3)