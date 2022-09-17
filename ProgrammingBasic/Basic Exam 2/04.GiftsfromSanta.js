function giftsFromSanta(input){
    let N = Number(input[0]);
    let M = Number(input[1]);
    let S = Number(input[2]);
    let prinline = ""

    for(let i = M; i >= N; i--){

        if(i % 2 == 0 && i % 3 === 0){
            
          if (i === S){
              break;
          }
             prinline += i + " "
        }
    } console.log(`${prinline}`)
}
//giftsFromSanta(["1","30","15"])
giftsFromSanta(["20",
"1000",
"36"])