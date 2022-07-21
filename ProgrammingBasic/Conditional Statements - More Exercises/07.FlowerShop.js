function flowerShop(input){
    const magnoliaPiece = Number(input[0]);
    const zumbilPiece = Number(input[1]);
    const rosePiece = Number(input[2]);
    const cactusPiece = Number(input[3]);
    const presentPrice = Number(input[4]);

    let magnoliaPrice = 3.25;
    let zumbiuliPrice = 4;
    let rosePrice = 3.50;
    let cactusPrice = 8;
    let result = 0;

    let finalSum = magnoliaPiece * magnoliaPrice + zumbilPiece * zumbiuliPrice + rosePiece * rosePrice + cactusPiece * cactusPrice
    finalSum *= 0.95;

    if (finalSum >= presentPrice){
        result =Math.floor(finalSum - presentPrice);
        console.log(`She is left with ${result} leva.`);
    } else { 
        result = Math.ceil(presentPrice - finalSum);
        console.log(`She will have to borrow ${result} leva.`);


    }





}
flowerShop(["2","3","5","1","50"])