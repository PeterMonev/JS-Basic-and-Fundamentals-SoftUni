function messageTranslator(input){
 let n = input.shift();
 let pattern = /[!](?<command>[A-Z][a-z]{2,})[!][:][[](?<word>[A-Za-z]{8,})[\]]/;
 let numbers = [];

 for(let i = 0; i < n; i++){
    let match = pattern.exec(input[i]);
 
    
    if(match){

    let word = match[2];
    let command = match[1];
    for(let char of word){
        numbers.push(char.charCodeAt());
    }
    console.log(`${command}: ${numbers.join(' ')}`)

    } else {
        console.log(`The message is invalid`);
    }
 }



}
messageTranslator((["2",
"!Send!:[IvanisHere]",
"*Time@:[Itis5amAlready"])
);