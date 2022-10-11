function ladyBugs(array){
    let fieldSize = Number(array.shift());
    let startingBugs = array.shift().split(" ").map(Number);
    let field = [];

    for (let i = 0; i < fieldSize; i++){
       field.push(0);
    }
    let bugsPosition = arr.shift().split(" ");
    bugsPosition.forEach(field) => {
        field[field] = 1;
     }

     let command = array.shift().split(' ');
     while(true) {
       let bugIndex = Number(command[0]);
       let direction = command[1];
       let flyLength = Number(command[2]);
       
       if(field[bugIndex] === 1){
       if(direction === 'right'){
        let fly = bugIndex + flyLength
             if(field[fly] === 0){
             field[fly] = 1;
             field[bugIndex] = 0
             } else {
                let newFly = fly + flyLength;
                field[bugIndex] = 0
                 if(field.length > field[newFly]){
                    field[newFly] = 1;
                 }
             }
       }
       
       if(direction === 'left'){
        let fly = bugIndex - flyLength
             if(field[fly] === 0){
             field[fly] = 1;
             field[bugIndex] = 0
             } else {
                let newFly = fly - flyLength;
                field[bugIndex] = 0
                 if(field.length > field[newFly]){
                    field[newFly] = 1;
                 }
             }
       }
    } else {
      
        if(array.length === 0){
            break;
        }
          command = array.shift().split(' ')
        continue;
    }
        if(array.length === 0){
            break;
        }
        command = array.shift().split(' ');
        
     }

    console.log(field.join(' '));
}
ladyBugs([3, "1 1 1", "0 left 1", "2 left 1"]);
