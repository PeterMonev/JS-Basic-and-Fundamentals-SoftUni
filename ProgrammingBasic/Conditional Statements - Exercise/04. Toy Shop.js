function toyShop(input) {
  const puzzlePrice = 2.6;
  const talkingDollPrice = 3;
  const teddyBearPrice = 4.1;
  const minionPrice = 8.2;
  const truckPrice = 2;

  const vacantionPrice = Number(input[0]);
  const puzzlepieces = Number(input[1]);
  const talkingdollPieces = Number(input[2]);
  const teddybearPieces = Number(input[3]);
  const minionPieces = Number(input[4]);
  const truckPieces = Number(input[5]);

  let totalSum =
    puzzlePrice * puzzlepieces +
    talkingDollPrice * talkingdollPieces +
    teddyBearPrice * teddybearPieces +
    minionPieces * minionPrice +
    truckPieces * truckPrice;
  let totalNumber =
    puzzlepieces +
    talkingdollPieces +
    teddybearPieces +
    minionPieces +
    truckPieces;

  if (totalNumber >= 50) {
    let discout = totalSum * 0.25;
    totalSum = totalSum - discout;}

    let rent = totalSum * 0.1
    totalSum = totalSum - rent

    if (totalSum >= vacantionPrice){
        console.log(`Yes! ${(totalSum - vacantionPrice).toFixed(2)} lv left.`)
    } else {
        console.log(`Not enough money! ${(vacantionPrice - totalSum).toFixed(2)} lv needed.`)
    }




  }








toyShop(["40.8", "20", "25", "30", "50", "10"]);
toyShop(["320", "8", "2", "5", "5", "1"]);
