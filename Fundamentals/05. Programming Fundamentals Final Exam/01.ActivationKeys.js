function activationKeys(input){
   let word = input.shift();

   for(let line of input){
    let [command,secondCommand,startIndex,endIndex] = line.split(">>>");
      
    if(command === 'Generate'){
       return console.log(`Your activation key is: ${word}`);
    }

      if(command === 'Slice'){
         let substr = word.substring(secondCommand,startIndex)
         word = word.replace(substr,'');
         console.log(word);

      } else if (command === 'Flip'){

           if(secondCommand === 'Upper'){   
             let substr = word.substring(startIndex,endIndex).toUpperCase();
             let firstPart = word.substring(0,startIndex);
             let secondPart = word.substring(endIndex);
             word = firstPart + substr + secondPart;
             console.log(word);

           } else if (secondCommand === 'Lower'){
            let substr = word.substring(startIndex,endIndex).toLowerCase();
            let firstPart = word.substring(0,startIndex);
            let secondPart = word.substring(endIndex);
            word = firstPart + substr + secondPart;
            console.log(word);
           }
           
      } else if (command = 'Contains'){
          
        if(word.includes(secondCommand)){
            console.log(`${word} contains ${secondCommand}`);
        } else {
            console.log("Substring not found!")
        }
      }
   }


}
activationKeys((["abcdefghijklmnopqrstuvwxyz",
"Slice>>>2>>>6",
"Flip>>>Upper>>>3>>>14",
"Flip>>>Lower>>>5>>>7",
"Contains>>>def",
"Contains>>>deF",
"Generate"])
);