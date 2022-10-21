function orders(products,quantity) {
   let descip;

   if(products === 'coffee'){
    descip = 1.50 * quantity;
   } else if (products === 'water'){
    descip = 1.00 * quantity;
   } else if (products === 'coke'){
    descip = 1.40 * quantity;
   } else {
    descip = 2.00 * quantity;
   }

   console.log(descip.toFixed(2))
   
}
orders("water", 5);