function currentCatalogue(array) {
    let catalogue = [];
    let currLetter = '';

    for(let products of array) {
       let tokens = products.split(' : ')
       let product = {
        name: tokens[0],
        price: Number(tokens[1])
       };
       catalogue.push(product);
       
    }

    catalogue.sort((a,b)=> a.name.localeCompare(b.name));
   
    
    for(const products of catalogue) {
       

         if(currLetter === products.name.toUpperCase().charAt(0)) {
            console.log(`  ${products.name}: ${products.price}`);
         } else {
             currLetter = products.name.toUpperCase().charAt(0);
             console.log(currLetter);
             console.log(`  ${products.name}: ${products.price}`);
         }
    }
}
currentCatalogue([
  "Appricot : 20.4",
  "Fridge : 1500",
  "TV : 1499",
  "Deodorant : 10",
  "Boiler : 300",
  "Apple : 1.25",
  "Anti-Bug Spray : 15",
  "T-Shirt : 10",
]);
