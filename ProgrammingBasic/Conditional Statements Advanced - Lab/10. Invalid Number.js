function invalidNumber(input){
    const number = Number(input[0]);

    if (number >= 100 && number <= 200 || number == 0 ){
       
    } else {
        console.log("invalid")

    }







}
invalidNumber(["75"]);
invalidNumber(["150"]);
invalidNumber(["220"]);
invalidNumber(["-1"]);
invalidNumber(["0"]);