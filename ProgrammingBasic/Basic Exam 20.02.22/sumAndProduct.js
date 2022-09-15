function sumAndProduct(input){
let number = Number(input);


let isReached = false;

let sum= 0;
let multiply = 0;

for (let a = 1; a < 9; a++) {
    for (let b = 9; b > a; b--) {
        for (let c = 0; c < 9; c++) {
            for (let d = 9; d > c; d--) {
                sum=a+b+c+d;
                multiply = a*b*c*d;
                if(sum===multiply && number%10==5){
                    console.log(`${a}${b}${c}${d}`);
                    isReached = true;
                    break;
                }else if(Math.floor(multiply/sum)==3 && number%3==0){
                    console.log(`${d}${c}${b}${a}`);
                    isReached =true;
                    break;
                }
            }
            if(isReached){
                break;
            }
        }
        if(isReached){
            break;
        }     
    }
    if(isReached){
        break;
    } 
}

if(!isReached){
    console.log('Nothing found');
}
}

sumAndProduct(["123"]);
sumAndProduct(["145"]);
sumAndProduct(["214"]);