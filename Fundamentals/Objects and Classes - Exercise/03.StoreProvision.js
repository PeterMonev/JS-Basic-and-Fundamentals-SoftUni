function storeProvision(localStoreStoke, deliveryStoke) {

    let store = {};

    for(let i = 0; i < localStoreStoke.length; i+=2) {
       let currStoke = localStoreStoke[i];
       store[currStoke] = Number(localStoreStoke[i+1])
 }

    for(let j = 0;j < deliveryStoke.length; j+=2){
        let currDelivery = deliveryStoke[j];

        if(!store.hasOwnProperty(currDelivery)){
                store[currDelivery] = 0;
            }
            store[currDelivery] += Number(deliveryStoke[j+1]);

           }

    for(let product of Object.keys(store)){
        console.log(`${product} -> ${store[product]}`)
    }       
   
}
storeProvision([
    'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
    ],
    [
    'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ]
    )

