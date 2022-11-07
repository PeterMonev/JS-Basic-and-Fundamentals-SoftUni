function stringSubString(word, string){
    word = word.toLowerCase();
    let strAsArr = string.toLowerCase().split(' ');


    for(let char of strAsArr){

        if(word === char){
            return  console.log(word);
        } 
    }
        console.log(`${word} not found!`)
    

}
stringSubString('javascript',
'JavaScript is the best programming language'
)