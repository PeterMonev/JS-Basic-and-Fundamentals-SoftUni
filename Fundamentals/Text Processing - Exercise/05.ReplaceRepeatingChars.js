function replacePeratingChars(string){
    let chars = '';
    let char = string.split('');
    let word = '';
    
    
    for(let i = 0; i < char.length; i++) {
        if(char[i] != chars){
            chars = char[i];
            word += chars;
        }
    }
   
    console.log(word);

}
replacePeratingChars('aaaaabbbbbcdddeeeedssaa')