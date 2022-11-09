function lettersChageNumber(input) {
  
   let string = input.split(' ');
   let result = 0;

   for(let word of string) {
      if(word === ''){
        continue;
      }
     let letter = word.split('');
     let starLetter = letter.shift();
     let endLetter = letter.pop();
     let numbers = Number(letter.join(''))

     if(starLetter === starLetter.toUpperCase()) {
        result += numbers / (starLetter.charCodeAt(0) - 64);
     } else if (starLetter === starLetter.toLowerCase()) {
        result += numbers * (starLetter.charCodeAt(0) - 96);
     }

     if(endLetter === endLetter.toUpperCase()) {
        result -= (endLetter.charCodeAt(0) - 64);
     } else if (endLetter === endLetter.toLowerCase()) {
        result += (endLetter.charCodeAt(0) - 96);
     }

   }
    
   console.log(result.toFixed(2));
}
lettersChageNumber('A12b s17G');
lettersChageNumber('P34562Z q2576f   H456z');
lettersChageNumber('a1A')