function matchPhoneNumber(input){
    let text = input[0];
    let pattern = /(?:\s|^)\+359( |-)2\1\d{3}\1\d{4}\b/g
    let macth = pattern.exec(text);
    let result = [];

    while(macth != null){
        result.push(macth[0].trim());
       macth = pattern.exec(text);
    }

    console.log(result.join(', '));
}
matchPhoneNumber(['+359 2 222 2222,359-2-222-2222, +359/2/222/2222, +359-2 222 2222 +359 2-222-2222, +359-2-222-222, +359-2-222-22222 +359-2-222-2222'])