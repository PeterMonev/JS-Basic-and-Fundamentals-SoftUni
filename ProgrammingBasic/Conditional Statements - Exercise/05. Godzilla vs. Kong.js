function godzillaKingKong(input) {
  let budgetFilm = Number(input[0]);
  let nubmerStatist = Number(input[1]);
  let priceOneClothesStatist = Number(input[2]);

  if (nubmerStatist > 150){
    priceOneClothesStatist = priceOneClothesStatist * 0.9
} 
  let decor = budgetFilm * 0.1;
  let allCostStatst = nubmerStatist * priceOneClothesStatist
  let costDecorStatist = allCostStatst + decor
  let costFilm = Math.abs(costDecorStatist - budgetFilm)
  
  
  
  if ( costDecorStatist > budgetFilm){


    console.log("Not enough money!")
    console.log(`Wingard needs ${costFilm.toFixed(2)} leva more.`)

  } else {
    console.log("Action!")
    console.log(`Wingard starts filming with ${costFilm.toFixed(2)} leva left.`)
  }
  
}
godzillaKingKong(["20000", "120", "55.5"]);
godzillaKingKong(["15437.62", "186", "57.99"]);
godzillaKingKong(["9587.88", "222", "55.68"]);
