function modernTimesOfHasTag(string){
    let strAsArr = string.split(' ');
    let result
    for(let word of strAsArr){
        if(word.startsWith('#') && word.length > 1){
            let flag = true;
            result = word.substring(1, word.length);
          

            for(let char of result){
                if(char.charCodeAt() >= 97 && char.charCodeAt() <= 122 || char.charCodeAt() >= 65 && char.charCodeAt() <= 90){
                    flag = true;
                } else {
                    flag = false;
                    break;
                }
            }
            if(flag){
            console.log(result);
            }
        }
    }

}
modernTimesOfHasTag('Nowadays everyone uses # to tag a #special word in #socialMedia')