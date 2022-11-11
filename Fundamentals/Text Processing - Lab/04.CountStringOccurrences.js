function countStringOccurences(text,word) {
    let stringAsArray = text.split(' ');
    let count = 0;
    
    for(let char of stringAsArray) {
        if(char === word){
            count++;
        }
    }
    console.log(count)

}
countStringOccurences('This is a word and it also is a sentence',
'is'
)