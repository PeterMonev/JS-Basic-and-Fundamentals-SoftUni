function emojiDetector(input){
  let patternString = /([*]{2}|[:]{2})(?<word>[A-Z][a-z]{2,})\1/g;
  let patternDigits = /(?<number>[0-9])/g;
  let sum = [];
  let digit = 1;
  let emoji = [];
  let counter = 0;
  let cooles = [];

  while((sum = patternDigits.exec(input))!= null){
      digit = sum[0] * digit
  }
  
  console.log(`Cool threshold: ${digit}`);
  
  while((emoji = patternString.exec(input))!= null){
    counter++;
    let point = 0;
    let chars = emoji[2];
    for(let char of chars) {
       point += char.charCodeAt(0);
    }
    
    if(point >= digit){
      cooles.push(emoji[0]);
    }
      
  }
  console.log(`${counter} emojis found in the text. The cool ones are:`);
  console.log(`${cooles.join('\n')}`)

}
emojiDetector(["In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**"]);