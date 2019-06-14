function returnTripCost(distance, passangersNum, fuelPriceLiter) {

  let fuelConsumption = (distance / 100) * 7;
  fuelConsumption += passangersNum * 0.100;
  let moneyRequired = fuelConsumption * fuelPriceLiter;

  console.log(`Needed money for that trip is ${moneyRequired}lv.`);

}
returnTripCost(260, 9, 2.49);