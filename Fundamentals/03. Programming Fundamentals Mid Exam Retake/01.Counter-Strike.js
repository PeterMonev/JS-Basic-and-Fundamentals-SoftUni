function counterStrike(array) {
  
  let startingLife = Number(array.shift());
  let winCounter = 0;

  while ( array.length > 0) {
    let command = array.shift();

    if (command !== 'End of battle') {
      let energy = Number(command);
      if (startingLife - energy < 0) {
          console.log(`Not enough energy! Game ends with ${winCounter} won battles and ${startingLife} energy`);
          return;
      }
      startingLife -= energy;
      winCounter++;
  } else {
      console.log(`Won battles: ${winCounter}. Energy left: ${startingLife}`);
  }
  if (winCounter % 3 === 0) {
      startingLife += winCounter;
  }
}

}
counterStrike(["100", "10", "10", "10", "1", "2", "3", "73", "10"]);
counterStrike(["200", "54", "14", "28", "13", "End of battle"]);
