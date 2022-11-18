function movingTarget(arrayShooting) {

    let target = arrayShooting.shift().split(' ').map(Number);
    let command = arrayShooting.shift();

    while(command != 'End'){
        command = command.split(' ');
        let currCommand = command[0];
        let index = Number(command[1]);
        let value = Number(command[2]);
        
        
    switch(currCommand){
        case 'Shoot':
            if(index >= 0 && index < target.length){
            target[index] -= value;
            if(target[index] <= 0){
                target.splice(index, 1);
            }
        }
        break;
        case 'Add':
            if(index >= 0 && index < target.length){
                target.splice(index, 0, value);
            } else {
                console.log("Invalid placement!");
            }
            break;
        case 'Strike':
            let radius = index + value;
            if(index + value <= target.length && index - value >= 0){
                target.splice(index + value, value );
                target.splice(index,1);
                target.splice(index - value, value )
            } else {
                console.log('Strike missed!')
            }
            break;
      
    }
    
  command = arrayShooting.shift();
          
   }
  console.log(target.join('|'));
}
movingTarget((["52 74 23 44 96 110",
"Shoot 5 10",
"Shoot 1 80",
"Strike 2 1",
"Add 22 3",
"End"])
);
movingTarget(["1 2 3 4 5", "Strike 0 1", "End"]);
