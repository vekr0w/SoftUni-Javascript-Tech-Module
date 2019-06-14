function carTaxCalculatorV2(vehicleType, inputKW, inputAge) {
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

  function calculateMotorcycle(motorcyclePower) {
    let taxPrice = 0;
    if (motorcyclePower > 750) {
      taxPrice = 125;
    } else if (motorcyclePower > 490) {
      taxPrice = 94;
    } else if (motorcyclePower > 350) {
      taxPrice = 63;
    } else if (motorcyclePower > 250) {
      taxPrice = 43;
    } else if (motorcyclePower > 125) {
      taxPrice = 31;
    } else {
      taxPrice = 15;
    }
    return taxPrice;
  }
  switch (vehicleType) {
    case 'motorcycle':
      let totalPriceBike = calculateMotorcycle(inputKW);
      console.log(`${totalPriceBike.toFixed(2)} lv.`);

      break;
    case 'car':
      let pricePower = powerCalculator(inputKW);
      let coeficient = coeficientCalculator(inputAge);
      let totalPriceCar = pricePower * coeficient;
      console.log(`${totalPriceCar.toFixed(2)} lv.`);
      break;

    default:
      break;
  }


}
carTaxCalculatorV2('motorcycle', 450, 10)