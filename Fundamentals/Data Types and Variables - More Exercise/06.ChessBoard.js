function chessBoard(number){
  
    let isFalse = false;
    let rollUp = 'black';

     console.log('<div class="chessboard">');
     for(let i = 1;i <= number;i++){
        console.log(`  <div>`);
        
        for(let j = 1; j <= number;j++){
            if(!isFalse){
                
                  console.log(`    <span class="black"></span>`);
                  isFalse = true;
            } else {
                console.log(`    <span class="white"></span>`);
                isFalse = false;
            }
       

        }
        if(rollUp === 'black'){
            rollUp = 'white';
            isFalse = true;
        } else {
            rollUp = 'black';
            isFalse = false;
        }
       
        console.log('  </div>');
     }

    console.log('</div>');
}
//chessBoard(3);
chessBoard(6);