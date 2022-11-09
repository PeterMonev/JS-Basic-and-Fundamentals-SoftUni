function hardWork(string){
    let text = string[0];
    let letter = string.shift().split(' ');
    let changedWord = string.toString().split(',');

    for(let word of letter){

        if(word.includes('_')){
            let wordLength = word.length;
            let sign = '';

              if(word.endsWith('.')){
                wordLength -= 1;
                sign += '.';
              } else if(word.endsWith(',')){
                wordLength -= 1;
                sign += ',';
              }
              
            for(let char of changedWord){
                if(char.length === wordLength){
                   text = text.replace(word, char + sign);
                   break;
                }
            }
        }
    }

  console.log(text);

}
hardWork(['Hi, grandma! I\'m so ____ to write to you. ______ the winter vacation, so _______ things happened. My dad bought me a sled. Mom started a new job as a __________. My brother\'s ankle is ________, and now it bothers me even more. Every night Mom cooks ___ on your recipe because it is the most delicious. I hope this year Santa will _____ me a robot.',
['pie', 'bring', 'glad', 'During', 'amazing', 'pharmacist', 'sprained']]
)