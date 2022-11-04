function furniture(input){
    
    let pattern  = />>(?<item>[A-Z]([A-Z|[a-z]+))<<(?<price>[0-9(.)]+)!(?<durability>\d+)\b/g;
    let validFurniture = [];
    let allSum = 0;
    let items = [];

    while ((validFurniture = pattern.exec(input)) !== null) {
       let item = validFurniture.groups['item'];
       let price =  Number(validFurniture.groups['price']);
       let durability = Number(validFurniture.groups['durability']);
       items.push(item);
       allSum += price * durability;
    }

    console.log('Bought furniture:');
    if(allSum > 0){
    console.log(items.join('\n'));
    }
    console.log(`Total money spend: ${allSum.toFixed(2)}`);

}
furniture(['>Invalid<<!4',
'>Invalid<<!2',
'>Invalid<<!5',
'Purchase']

) 