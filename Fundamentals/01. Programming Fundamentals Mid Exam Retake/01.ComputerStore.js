function computerStore(priceList){
       
    let toltaSum = 0;
    let isInvalid = false;
    let type = priceList.pop().toLowerCase();

    for(let i=0;i<priceList.length;i++){
    
        if(priceList[i] > 0){
            toltaSum += Number(priceList[i]);
        } else {
            console.log('Invalid price!');
            continue;
        }

    }
    
    let priceWithOutTaxes = toltaSum;

    if(priceWithOutTaxes === 0)
    {
        return console.log("Invalid order!")
    }

    const taxes = toltaSum * 0.2;
    let allSum = toltaSum + taxes;

    if(type === 'special'){
    allSum *= 0.9;
    }
     
    console.log(`Congratulations you've just bought a new computer!
Price without taxes: ${priceWithOutTaxes.toFixed(2)}$
Taxes: ${taxes.toFixed(2)}$
-----------
Total price: ${allSum.toFixed(2)}$`)


}
computerStore([
    '1023', 
    '15', 
    '-20',
    '-5.50',
    '450', 
    '20','17.66', 
    '19.30', 'regular'
    ])
computerStore(([
    'regular'
    ])
    )
    
    