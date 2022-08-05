function journey(input) {
  const budget = Number(input[0]);
  const season = input[1];
  let destination;
  let place;
  let finalMoney = 0;

  if (budget <= 100) {
    destination = "Bulgaria";
    if (season == "summer") {
      finalMoney = budget * 0.7;
      place = "Camp";
    } else if (season == "winter") {
      finalMoney = budget * 0.3;
      place = "Hotel";
    }
  } else if (budget <= 1000) {
    destination = "Balkans";
    if (season == "summer") {
      finalMoney = budget * 0.6;
      place = "Camp";
    } else if (season == "winter") {
      finalMoney = budget * 0.2;
      place = "Hotel";
    }
  } else {
    destination = "Europe";
    finalMoney = budget * 0.1;
    place = "Hotel";
  }
  let result = budget - finalMoney;
  console.log(`Somewhere in ${destination}`);
  console.log(`${place} - ${result.toFixed(2)}`);
}
journey(["50", "summer"]);
