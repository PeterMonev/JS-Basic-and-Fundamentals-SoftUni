function shoppingLists(arrayOfProducts) {

    let shoppingList = arrayOfProducts.shift().split('!');
    let currCommand = arrayOfProducts.shift();
    let removedIndex = 0;

    while(currCommand !== 'Go Shopping!'){
        currCommand = currCommand.split(' ');
        let command = currCommand[0];
        let item = currCommand[1];
        let newItem = currCommand[2]
        
     switch(command){
        case 'Urgent':
            if(!shoppingList.includes(item)){
               shoppingList.unshift(item);
            }
            break;
        case 'Unnecessary':
            if(shoppingList.includes(item)){
               removedIndex = shoppingList.indexOf(item);
               shoppingList.splice(removedIndex, 1);
            }  
            break;
        case 'Correct':
            if(shoppingList.includes(item)){
                removedIndex = shoppingList.indexOf(item);
                shoppingList.splice(removedIndex, 1);
                shoppingList.splice(removedIndex,0,newItem);
            }
            break;
        case 'Rearrange':        
            if(shoppingList.includes(item)){
                removedIndex = shoppingList.indexOf(item);
                let swappedItem = shoppingList.splice(removedIndex,1);
                shoppingList.push(swappedItem[0]);    
            }
            break;
        default:
            break;
     }   
         currCommand = arrayOfProducts.shift();
    }
    console.log(shoppingList.join(', '));
}
shoppingLists((["Milk!Pepper!Water!Banana",
"Urgent Salt",
"Unnecessary Grapes",
"Correct Pepper Onion",
"Rearrange Grapes",
"Correct Tomatoes Potatoes",
"Go Shopping!"])

);
