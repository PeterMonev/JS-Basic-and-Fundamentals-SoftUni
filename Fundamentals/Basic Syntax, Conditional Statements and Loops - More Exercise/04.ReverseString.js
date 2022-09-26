function reverseString(str){
    let char = str.split('');
    char.reverse();
    char = char.join('');
    
    console.log(char)

}
reverseString('Hello');