function sequence(input){
    let num = Number(input[0])
    let a = 1;

    while(num >= a){
        console.log(a)
        a = a * 2 + 1;
    }

}
sequence(["3"])