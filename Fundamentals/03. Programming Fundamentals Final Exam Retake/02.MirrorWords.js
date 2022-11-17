function mirrorWords(input){
    let text = input;
    let pattern = /(@|#)([A-Za-z]{3,})\1\1([A-Za-z]{3,})\1/g;
    let macth = pattern.exec(text);
    let counter = 0;
    let result = [];

   while(macth != null){
    let word1 = macth[2];
    let word2 = macth[3];
    counter++;
    let reversed = word1.split('').reverse().join('');
    
    if(reversed === word2){
       result.push(`${word1} <=> ${word2}`);
    } 
    macth = pattern.exec(text);
   }
   
   if(counter > 0 ){
    console.log(`${counter} word pairs found!`);
} else {
    console.log(`No word pairs found!`);
}
  if(result.length > 0){
    console.log(`The mirror words are:
${result.join(', ')}`);

  } else {
    console.log(`No mirror words!`);
}

}
mirrorWords([
    '@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r'
    ]
    )