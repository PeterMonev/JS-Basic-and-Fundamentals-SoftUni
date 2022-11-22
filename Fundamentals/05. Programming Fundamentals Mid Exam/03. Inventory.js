function inventory(journal) {
    let inventory = journal.shift().split(', ');
    let command = journal.shift();
    let item = '';
    let newItem = ''
    while(command != 'Craft!'){
        command = command.split(' - ');
        let currCommand = command[0];
        if(currCommand === 'Combine Items'){
            let combine = command.pop().split(':')
            item = combine[0];
            newItem = combine[1];
        } else {
        item = command[1];
        newItem = command[2];
        let index = 0;
        }
       switch(currCommand){
            case 'Collect':
                if(!inventory.includes(item)){
                  inventory.push(item);
                }
                break;
            case 'Drop':
                if(inventory.includes(item)){
                   index = inventory.indexOf(item);
                   inventory.splice(index, 1);
                }
                break;
            case 'Combine Items':
                if(inventory.includes(item)){
                   index = inventory.indexOf(item);
                   inventory.splice(index + 1, 0 , newItem);
                }
                break;
            case 'Renew':
                if(inventory.includes(item)){
                    index = inventory.indexOf(item);
                    let change = inventory.splice(index,1);
                    inventory.push(change[0]);
                }
                break;        
        }


        command = journal.shift();
    }
    console.log(inventory.join(', '))
}

inventory([
    'Iron, Sword',
    'Drop - Bronze',
    'Combine Items - Sword:Bow',
    'Renew - Iron',
    'Craft!'
  ]
  )
