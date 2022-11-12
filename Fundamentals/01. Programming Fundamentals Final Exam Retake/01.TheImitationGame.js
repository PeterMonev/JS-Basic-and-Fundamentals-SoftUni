function theImitationGame(input){
    let word = input.shift();
    let command = input.shift().split('|');

    while(command[0] !== 'Decode'){
        let [currCommnad,index,values] = command
        
        if(currCommnad === 'Move'){
            let firstPart = word.substring(0, index);
            let secondPart = word.substring(index);
            word = secondPart + firstPart;

        } else if (currCommnad === 'Insert'){
            let firsPart = word.substring(0,index);
            let secondPart = word.substring(index);
            word = firsPart + values + secondPart;

        } else if (currCommnad === 'ChangeAll'){
            word = word.split(index).join(values);
        }
        
        command = input.shift().split('|');
    }
    
  console.log(`The decrypted message is: ${word}`)

}
theImitationGame(['zzHe',
    'ChangeAll|z|l',
    'Insert|2|o',
    'Move|3',
    'Decode',
])