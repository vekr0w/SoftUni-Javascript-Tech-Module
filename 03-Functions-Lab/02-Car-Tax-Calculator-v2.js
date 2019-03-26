function carTaxCalculatorV2(inputKW, inputAge) {
  function powerCalculator(carPower) {

    const kiloWatts = Number(carPower);
    let pricePerKW = 0;

    if (kiloWatts <= 37 && kiloWatts) {
      pricePerKW = 0.43;
    } else if (kiloWatts >= 37.01 && kiloWatts <= 55) {
      pricePerKW = 0.50;
    } else if (kiloWatts >= 55.01 && kiloWatts <= 74) {
      pricePerKW = 0.68;
    } else if (kiloWatts >= 74.01 && kiloWatts <= 110) {
      pricePerKW = 1.38;
    } else if (kiloWatts > 110) {
      pricePerKW = 1.54;
    }
    return kiloWatts * pricePerKW;
  }

  function coeficientCalculator(carAge) {
    let coeficient = 0;
    if (carAge < 5) {
      coeficient = 2.80;
    } else if (carAge >= 5 && carAge <= 14) {
      coeficient = 1.50;
    } else if (carAge > 14) {
      coeficient = 1;
    }

    return coeficient;
  }

  let pricePower = powerCalculator(inputKW);
  let coeficient = coeficientCalculator(inputAge);
  let totalPrice = pricePower * coeficient;
  console.log(`${totalPrice.toFixed(2)} lv.`);

}
carTaxCalculatorV2(45, 10)