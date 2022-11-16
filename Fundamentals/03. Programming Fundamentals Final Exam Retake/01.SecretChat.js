function secretChat(input){

    let word = input.shift();
    
       for(let line of input){
        
        let  command = line.split(':|:');
    
         if(command[0] === 'Reveal'){
            return console.log(`You have a new text message: ${word}`)
         }

        if(command[0] === 'InsertSpace'){
            let index = Number(command[1]);
            word = word.substring(0, index) + " " + word.substring(index);
            console.log(word);

        } else if (command[0] === 'ChangeAll'){
            let substring = command[1];
            let replacement = command[2];

            while (word.includes(substring)) {
                word = word.replace(substring, replacement);
            }
            console.log(word);
            
        } else if (command[0] === 'Reverse'){
            let substring = command[1]
            let reverseSub = substring.split('').reverse().join('');

            if(word.includes(substring)){
                let index = word.indexOf(substring);
                word = word.replace(substring,'');
                word = word + reverseSub
                console.log(word);
            } else {
                console.log('error');
            }
         
        }
    }

}
secretChat([
    'heVVodar!gniV',
    'ChangeAll:|:V:|:l',
    'Reverse:|:!gnil',
    'InsertSpace:|:5',
    'Reveal'
  ]
  );