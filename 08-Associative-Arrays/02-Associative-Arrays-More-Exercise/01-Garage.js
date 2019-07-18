function storeAndSortGarage(input) {

  let garageData = {};

  for (let element of input) {
    let [garageNumber, carData] = element.split(' - ');
    carDataToArray = carData.split(', ');
    for (let currentCar of carDataToArray) {
      let [carKey, carValue] = currentCar.split(': ');
      if (!garageData.hasOwnProperty(garageNumber)) {
        garageData[garageNumber] = {};
        garageData[garageNumber][carKey] = carValue;
      } else {
        garageData[garageNumber][carKey] = carValue;
      }
    }
  }
  console.log(garageData);

}
storeAndSortGarage(
  ['1 - color: blue, fuel type: diesel',
    '1 - color: red, manufacture: Audi',
    '2 - fuel type: petrol',
    '4 - color: dark blue, fuel type: diesel, manufacture: Fiat']
);