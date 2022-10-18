function arrayManipulator(array,commandArray){
      let pieceCommand = [];
      let command = [];
      let index = [];
      let element = [];

   for(let i = 0;i < commandArray.length; i++){
        pieceCommand = commandArray[i].split(' ');
        command = pieceCommand.shift();
        index = Number(pieceCommand.shift());
        element = pieceCommand

        switch(command){
            case 'add':
                element = Number(element)
                array.splice(index,0,element);
                break;
            case 'addMany':
                element.reverse();
               for(let char of element){
                 char = Number(char);
                array.splice(index,0,char)}
                break;
            case 'contains':
                if(array.includes(index)){
                    console.log(array.indexOf(index))
                } else {
                    console.log(-1)
                }
                break;
            case 'remove':
                array.splice(index,1);
                break;    
            case 'shift':
                for(let i = 0; i < index ; i++){
                    let shifter = [];
                    shifter = array.shift();
                    array.push(shifter);
                }
                break;
            case 'sumPairs':
              let  newArr = 0;
               let result = [];
                while(array.length > 1){
                   
                    newArr = array.shift(' ')
                    newArr += array.shift(' ');
                    result.push(newArr)
                } 
                if(array.length === 1){
                    let oneNum = array[0];
                    array = result; 
                    array.push(oneNum)
                }else {
                    array = result;
                }
                break;
            case 'print':
                console.log(`[ ${array.join(', ')} ]`);
                return
                break;    
        }   
   }

}
arrayManipulator([1, 2, 4, 5, 6, 7],['add 1 8', 'contains 1', 'contains 3', 'print']);
arrayManipulator([1, 2, 3, 4, 5],
    ['addMany 5 9 8 7 6 5', 'contains 15', 'remove 3', 'shift 1', 'print']
    )