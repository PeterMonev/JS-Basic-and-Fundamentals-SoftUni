function maxNumber(input){
    let index = 0;
    let maxNumber = Number.MAX_SAFE_INTEGER
    let command = input[index++]

    while(command !== "Stop"){
        let num = Number(command);
        if (maxNumber < num){
            maxNumber = num;
        }
        command = input[index++];

    }
    console.log(maxNumber);

}
maxNumber((["100",
"99",
"80",
"70",
"Stop"]))
maxNumber(["-10",
"20",
"-30",
"Stop"])