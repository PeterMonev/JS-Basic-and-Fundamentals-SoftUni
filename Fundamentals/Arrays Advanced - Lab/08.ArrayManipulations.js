function arrayManipulations(array){ 
       
    let manipulationArr = array.shift().split(' ');
    let commandAndNum = [];
    let command = [];
    let num = [];
    let index = [];

    for(let i = 0; i < array.length; i++){
        commandAndNum = array[i].split(' ');    
        command = commandAndNum[0];
        num = commandAndNum[1];
        index = commandAndNum[2];

        switch(command){
            case 'Add':
                manipulationArr.push(num);
                break;
            case 'Remove':
                if(manipulationArr.includes(num)){
                    let indexOfNum = manipulationArr.indexOf(num);
                    manipulationArr.splice(indexOfNum, 1);
                }
                break;
            case 'RemoveAt':
                manipulationArr.splice(num,1);
                break;
            case 'Insert':
               manipulationArr.splice(index,0,num)
            break;
        }
    }
   console.log(manipulationArr.join(' '));
}
arrayManipulations(['4 19 2 53 6 43',
'Add 3',
'Remove 2',
'RemoveAt 1',
'Insert 8 3']
)