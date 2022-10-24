function palihdromeIntegers(arrayNumers){
     
    for(let i = 0; i < arrayNumers.length; i++){
        let string = arrayNumers[i].toString().split('').reverse();
        let reversed = arrayNumers[i].toString().split('')
        string = string.toString()
        reversed = reversed.toString()

        if(string === reversed){
            console.log('true');
        } else {
            console.log('false');
        }

    }


}
palihdromeIntegers([123,323,421,121])