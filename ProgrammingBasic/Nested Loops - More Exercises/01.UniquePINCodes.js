function uniquePINConeds(input){
    let a = Number(input[0]);
    let b = Number(input[1]);
    let c = Number(input[2]);

    for(let z = 1 ; z <= a ; a++){
        if(z % 2 ===0){
            console.log(`${z}`)
            continue
        }
        for(let x = 1; x <= b; b++){
            if(x % 1 === b){
                console.log(`${b}`)
                
            }
            for(let y = 1; y <= c; y++){
                if(y % 2 === 0){
                    console.log(`${y}`);
                    continue
                   
                }
               
                  
            }
        }
    }
}
uniquePINConeds([3,5,5])