function suppliesForSchool(input) {
  const numberPenPackages = Number(input[0]);
  const numberMarkerPackages = Number(input[1]);
  const literPreparation = Number(input[2]);
  const percentDiscount = Number(input[3]);
  const pricePen = 5.8;
  const priceMarker = 7.2;
  const pricePreparation = 1.2;
  const totalPrice =
    numberPenPackages * pricePen +
    numberMarkerPackages * priceMarker +
    literPreparation * pricePreparation;
  const totalPriceAfterDiscount =
    totalPrice - (percentDiscount / 100) * totalPrice;

  console.log(totalPriceAfterDiscount);
}
suppliesForSchool(["2 ", "3 ", "4 ", "25 "]);
suppliesForSchool(["4 ", "2 ", "5 ", "13 "]);
