function repeatString(str,number){
      let result = '';
    for(let i = 0; i < number;i++){
       result += str
    }
    return result;
}
console.log(repeatString("abc", 3))
