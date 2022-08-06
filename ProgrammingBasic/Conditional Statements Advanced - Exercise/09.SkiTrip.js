function skiTrip(input) {
  const days = Number(input[0]);
  const places = input[1];
  const grade = input[2];

  const roomOnePerson = 18;
  const apartament = 25;
  const presidentApart = 35;
  const nights = days - 1;
  let finalPrice = 0;

  switch (places) {
    case "room for one person":
      finalPrice = nights * roomOnePerson;
      break;
    case "apartment":
      finalPrice = nights * apartament;
      if (nights < 10) {
        finalPrice *= 0.7;
      } else if (nights >= 10 && nights <= 15) {
        finalPrice *= 0.65;
      } else {
        finalPrice *= 0.5;
      }
      break;
    case "president apartment":
      finalPrice = nights * presidentApart;
      if (nights < 10) {
        finalPrice *= 0.9;
      } else if (nights >= 10 && nights <= 15) {
        finalPrice *= 0.85;
      } else {
        finalPrice *= 0.8;
      }
      break;
  }
  if (grade == "positive") {
    finalPrice *= 1.25;
  } else {
    finalPrice *= 0.9;
  }
  console.log(finalPrice.toFixed(2));
}
skiTrip(["14", "apartment", "positive"]);
skiTrip(["30", "president apartment", "negative"]);
skiTrip(["12", "room for one person", "positive"]);
skiTrip(["2", "apartment", "positive"]);
