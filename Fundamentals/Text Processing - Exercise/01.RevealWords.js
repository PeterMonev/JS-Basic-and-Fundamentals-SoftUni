function revealWords(word,text){
  let currWord = word.split(', ');
  let currText = text.split(' ');

  for(let i = 0; i < currWord.length; i++){
      
      for(let words of currText){
           if(words.length === currWord[i].length && words.startsWith('*')){
              text = text.replace(words,currWord[i]);
           }
      }
  }
  
  console.log(text);

}
revealWords('great, learning',
'softuni is ***** place for ******** new programming languages'

)