function cake(input){
    let a = Number(input[0]);
    let b = Number(input[1]);
    let cake = a * b;
    let index = 2;
    let piece = Number(input[index++]);

    while(piece !== "STOP"){
        piece = Number(piece);
        cake -=  piece;
        if(cake < 0){
           console.log(`No more cake left! You need ${Math.abs(cake)} pieces more.`)
           break;
        }
        piece = input[index++];
        piece +=""
    }
  
 if(piece === "STOP"){
       console.log(`${cake} pieces are left.`)
 }



}
//cake(["10","10","20","20","20","20","21"]);
cake(["10","2","2","4","6","STOP"]);