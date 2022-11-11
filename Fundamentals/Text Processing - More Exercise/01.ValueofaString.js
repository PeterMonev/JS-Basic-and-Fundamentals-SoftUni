function valueOfAString(input) {

    let command = input.pop();
    input = input.toString();
    let text = input.split('');
    let result = 0;

    if(command === 'LOWERCASE'){
        for(let char of text){
            if(char === char.toLowerCase() && char.charCodeAt() >= 97 && char.charCodeAt() <= 122){
               result += char.charCodeAt();
            }
        }
    } else if (command === 'UPPERCASE'){
        for(let char of text){
            if(char === char.toUpperCase() && char.charCodeAt() >= 65 && char.charCodeAt() <= 90){
            result += char.charCodeAt();
            }
        }
    }
    
    console.log(`The total sum is: ${result}`);
}
valueOfAString(["HelloFromMyAwesomePROGRAM", "LOWERCASE"]);
