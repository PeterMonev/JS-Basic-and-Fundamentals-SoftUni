function newHouse(input) {
  const typeFlowers = input[0];
  const numberFlowers = Number(input[1]);
  const budget = Number(input[2]);

  const rosesPrice = 5;
  const dahliasPrice = 3.8;
  const tulpisPrice = 2.8;
  const narcissusPrice = 3;
  const gladiolusPrice = 2.5;

  let finalPrice = 0;

  switch (typeFlowers) {
    case "Roses":
      finalPrice = rosesPrice * numberFlowers;
      if (numberFlowers > 80) {
        finalPrice *= 0.9;
      }
      break;
    case "Dahlias":
      finalPrice = dahliasPrice * numberFlowers;
      if (numberFlowers > 90) {
        finalPrice *= 0.85;
      }
      break;
    case "Tulips":
      finalPrice = tulpisPrice * numberFlowers;
      if (numberFlowers > 80) {
        finalPrice *= 0.85;
      }
      break;
    case "Narcissus":
      finalPrice = narcissusPrice * numberFlowers;
      if (numberFlowers < 120) {
        finalPrice *= 1.15;
      }
      break;
    case "Gladiolus":
      finalPrice = gladiolusPrice * numberFlowers;
      if (numberFlowers < 80) {
        finalPrice *= 1.2;
      }
      break;
  }
  if (budget >= finalPrice) {
    let moneyleft = budget - finalPrice;
    console.log(
      `Hey, you have a great garden with ${numberFlowers} ${typeFlowers} and ${moneyleft.toFixed(2)} leva left.`
    );
  } else {
    let moneyleft1 = finalPrice - budget;
    console.log(
      `Not enough money, you need ${moneyleft1.toFixed(2)} leva more.`
    );
  }
}
newHouse(["Roses", "55", "250"]);
newHouse(["Tulips", "88", "260"]);
newHouse(["Narcissus", "119", "360"]);
