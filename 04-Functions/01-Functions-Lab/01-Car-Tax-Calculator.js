function carTaxCalculator(input) {

  const kiloWatts = Number(input);
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

  let outputLeva = kiloWatts * pricePerKW;
  console.log(`${outputLeva.toFixed(2)} lv.`);

}
carTaxCalculator(57.50);

/*
·	under 37 kW - 0.43 lv./kW
·	37.01 – 55 kW - 0.50 lv./kW 
·	55.01 – 74.00 - 0.68 lv./kW
·	74.01 – 110.00 - 1.38 lv./kW 
·	up 110.00 - 1.54 lv./kW
*/