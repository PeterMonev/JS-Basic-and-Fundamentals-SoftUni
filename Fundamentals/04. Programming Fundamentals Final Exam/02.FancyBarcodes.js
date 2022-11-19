function fancyBarcodes(input){
   let n = Number(input.shift());
   let pattern = /@#+(?<word>[A-Z][A-Za-z0-9]{4,}[A-Z])@#+/
   
   
   for(let i = 0; i < n;i++){
    let digit = [];
    let match = pattern.exec(input[i]);
   
    
    if(match){
      let chars = match[1];
        for(let char of chars){
            if(char.charCodeAt() >= 47 && char.charCodeAt() <= 58){
                digit.push(char)
            }
        }
        if(digit.length > 0){
            console.log(`Product group: ${digit.join('')}`)
        } else {
            console.log(`Product group: 00`)
        }
    } else {
      console.log(`Invalid barcode`)
     
    }
 
   }

}
fancyBarcodes(["6",

"##InvaliDiteM##",
"@InvalidIteM@",
"@#Invalid_IteM@#",
"@#ValiditeM@#"]
);