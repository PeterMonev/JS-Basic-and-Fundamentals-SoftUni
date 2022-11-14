function memoryGame(memory) {
  const line = memory.shift().split(" ");
  let counter = 0;

  while (line.length > 1 && memory[0] !== "end") {
    let [leftIndex , rightIndex] = memory.shift().split(" ");
    leftIndex = Number(leftIndex);
    rightIndex = Number(rightIndex);
    counter++;  

    if (leftIndex < 0 || leftIndex >= line.length || leftIndex === rightIndex || rightIndex < 0 || rightIndex >= line.length) {
         const halfArr = line.length / 2;
         const penalty = "-" + counter + "a";
         line.splice(halfArr, 0, penalty, penalty);
         console.log("Invalid input! Adding additional elements to the board");

    } else {
      const left = line[leftIndex];
       const right = line[rightIndex];

     if (left === right) {
        line.splice(leftIndex, 1);
        rightIndex = line.indexOf(right);
        line.splice(rightIndex, 1);
        console.log(`Congrats! You have found matching elements - ${left}!`);

      } else if (left !== right) {
        console.log("Try again!");
      }
    }
  }

     if (line.length === 0 || line.length === 1) {
        console.log(`You have won in ${counter} turns!`);

  } else {
    console.log(`Sorry you lose :(`);
    console.log(`${line.join(" ")}`);
  }
}
memoryGame( ["1 1 2 2 3 3 4 4 5 5","1 0","-1 0","1 0", "1 0", "1 0", "end"])
memoryGame(["a 2 4 a 2 4 a 3 5 6 7", "7 6", "4 end"]);
memoryGame(["a 2 4 a 2 4", "4 0", "0 2", "0 1", "0 1", "end"]);
