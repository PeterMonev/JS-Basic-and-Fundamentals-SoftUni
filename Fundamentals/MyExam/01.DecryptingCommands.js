function decryptingCommands(input){
   let text = input.shift();
   let tokens = input.shift().split(' ');

   while(tokens[0] != 'Finish'){
     let command = tokens[0];
     let starIndex = tokens[1];
     let endIndex = tokens[2];

     if(command === 'Replace'){
        let splited = text.split(starIndex);
        text = splited.join(endIndex)
        console.log(`${text}`)

     } else if (command === 'Cut'){
        starIndex = +starIndex;
        endIndex = +endIndex;
        if(starIndex >= 0 && starIndex <= text.length && endIndex >= 0 && endIndex <= text.length){
              let firstPart = text.substring(0,starIndex);
              let secondPart = text.substring(endIndex+1);
              text = firstPart + secondPart;
              console.log(text);
        } else {
            console.log(`Invalid indices!`)
        }

     } else if (command === 'Make'){
        if(starIndex === 'Upper'){
            text = text.toUpperCase();
            console.log(text);
        } else if (starIndex === 'Lower'){
            text = text.toLowerCase();
            console.log(text);
        }

     } else if (command === 'Check'){
        if(text.includes(starIndex)){
            console.log(`Message contains ${starIndex}`);
        }else {
            console.log(`Message doesn't contain ${starIndex}`);
        }

     } else if (command === 'Sum'){
        starIndex = +starIndex;
        endIndex = +endIndex;
        let sum = 0;
        if(starIndex >= 0 && starIndex <= text.length && endIndex >= 0 && endIndex <= text.length){
            let substr = text.substring(starIndex, endIndex+1);
            for(let char of substr){
              sum += char.charCodeAt();
            }
          console.log(sum);
        } else {
            console.log(`Invalid indices!`)
        }
     }


    tokens = input.shift().split(' ')
   }



}
decryptingCommands((["HappyNameDay",
"Replace p r",
"Make Lower",
"Cut 2 23",
"Sum -2 2",
"Finish"])

);