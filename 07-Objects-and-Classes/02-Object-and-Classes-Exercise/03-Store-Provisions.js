function storeProvisions(firstArray, secondArray) {
  let inputData = firstArray.concat(secondArray);
  let inputDataLength = inputData.length;
  let localStoreInformation = {};

  for (let i = 0; i < inputDataLength; i += 2) {
    const product = inputData[i];
    const quantity = Number(inputData[i + 1]);

    if (localStoreInformation.hasOwnProperty(product)) {
      localStoreInformation[product] += quantity;
    } else {
      localStoreInformation[product] = quantity;
    }
  }

  for (const key in localStoreInformation) {
    console.log(`${key} -> ${localStoreInformation[key]}`);
  }
}
storeProvisions(
  ['Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'],
  ['Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30']
);