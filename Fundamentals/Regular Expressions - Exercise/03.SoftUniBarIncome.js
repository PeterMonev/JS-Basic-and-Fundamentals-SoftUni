function softUniBarIncome(input){
   let pattern = /%(?<name>[A-Z][a-z]*)%[^|$%.]*?<(?<product>\w+)>[^|$%.]*?\|(?<quantity>\d+)\|[^|$%.]*?(?<price>[0-9]+(\.[0-9]+)?)\$/g;
   let matches = [];
   let totalSum = 0;

   while((matches = pattern.exec(input))){
    let name = matches.groups['name'];
    let product = matches.groups['product'];
    let quantity = +matches.groups['quantity'];
    let price = +matches.groups['price'];
    console.log(`${name}: ${product} - ${(quantity * price).toFixed(2)}`)
    totalSum += quantity * price

   }

   console.log(`Total income: ${totalSum.toFixed(2)}`)


}
softUniBarIncome(['%InvalidName%<Croissant>|2|10.3$',
'%Peter%<Gum>1.3$',
'%Maria%<Cola>|1|2.4',
'%Valid%<Valid>valid|10|valid20$',
'end of shift']
);