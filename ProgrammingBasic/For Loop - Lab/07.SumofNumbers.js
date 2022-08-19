function sumOFNumbers(input){
    let n = input[0];
    let sum = 0;

    for(let i = 0;i < n.length; i++){
        sum += Number(n[i]);
        
    }
    console.log(`The sum of the digits is:${sum}`) 
}
sumOFNumbers(["1234"])