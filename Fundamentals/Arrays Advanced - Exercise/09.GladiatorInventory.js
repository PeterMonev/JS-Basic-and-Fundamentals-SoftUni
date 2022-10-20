function gladiatorInventory(arrayInventory){
     
    let inventory = arrayInventory.shift().split(' ')
    let currCommand = [];
    let command = [];
    let items = [];

    for(let i = 0; i < arrayInventory.length; i++){
       command = arrayInventory[i].split(' ')
       currCommand = command[0];
       items = command[1];

       switch(currCommand){
          case 'Buy':
              if(!inventory.includes(items)){
                  inventory.push(items);
              }
              break;
          case 'Trash':
              if(inventory.includes(items)){
                  let index = inventory.indexOf(items);
                  inventory.splice(index, 1);
              }  
              break;
          case 'Repair':
              if(inventory.includes(items)){
                  let indexOfRepair = inventory.indexOf(items);
                  let repair = inventory.splice(indexOfRepair,1);
                  inventory.push(repair[0]);
              }      
              break;
          case 'Upgrade':
             let itemUpgrade = items.split('-')
             let enchant = itemUpgrade[1];
              if(inventory.includes(itemUpgrade[0])){
                  let idnexOfUpgrade = inventory.indexOf(itemUpgrade[0]);
                  let upgrade = inventory.splice(idnexOfUpgrade,1);
                  let oldItem = upgrade[0];
                  inventory.splice(idnexOfUpgrade,0,oldItem);
                  upgrade += `:${enchant}`
                  inventory.splice(idnexOfUpgrade + 1 ,0, upgrade);  
              }
              break;
       }
    }

    console.log(inventory.join(' '))
}
gladiatorInventory(['SWORD Shield Spear',
'Buy Bag',
'Trash Shield',
'Repair Spear',
'Upgrade SWORD-Steel']
)