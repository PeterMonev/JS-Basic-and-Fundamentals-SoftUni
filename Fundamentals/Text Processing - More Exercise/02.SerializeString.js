function serializeString(input){
    
    let text = input.shift().split('');
    let objChar = {};
    let charName = [];

    for(let i=0; i<text.length; i++){

        if(!objChar.hasOwnProperty(text[i])){
            
            objChar[text[i]] = new Set();
            objChar[text[i]].add(i)
           
        } else {
            objChar[text[i]].add(i)
        }
    }

   for(let chars of Object.entries(objChar)){
      let tokens = chars;
      let char = tokens[0];
      let index = Array.from(tokens[1])
      console.log(`${char}:${index.join('/')}`);
   }
}
serializeString(["avjavamsdmcalsdm"]);
serializeString(["abababa"]);