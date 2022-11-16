function arrayModifier(arrayWithCommands){
  let modifierArray = arrayWithCommands.shift().split(' ').map(Number)
  let commands = arrayWithCommands.shift().split(' ');

  while(commands[0] != 'end'){
     
     if(commands[0] === 'swap'){
         let swap = modifierArray[commands[2]];
         modifierArray[commands[2]] = modifierArray[commands[1]];
         modifierArray[commands[1]] = swap;
     }
     
     if(commands[0] === 'multiply'){
         let result = modifierArray[commands[1]] * modifierArray[commands[2]];
         modifierArray[commands[1]] = result;
     }

     if(commands[0] === 'decrease'){
         for(let i = 0;i < modifierArray.length;i++){
             modifierArray[i] -= 1;
         }
     }
     
     commands = arrayWithCommands.shift().split(' ');
  }
console.log(modifierArray.join(', '));
}
arrayModifier( [
    '23 -2 321 87 42 90 -123',
    'swap 1 3',
    'swap 3 6',
    'swap 1 0',
    'multiply 1 2',
    'multiply 2 1',
    'decrease',
    'end'
  ]
  
  )
  arrayModifier([
    '1 2 3 4',
    'swap 0 1',
    'swap 1 2',
    'swap 2 3',
    'multiply 1 2',
    'decrease',
    'end'
  ]
  )