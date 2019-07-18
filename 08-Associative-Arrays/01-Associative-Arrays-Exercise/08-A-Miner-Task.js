function storeAndPrintResources(input) {

  let resourcesData = {};

  for (let i = 0; i < input.length; i += 2) {
    let currentResource = input[i];
    let quantity = Number(input[i + 1]);
    !resourcesData.hasOwnProperty(currentResource) ?
      resourcesData[currentResource] = quantity
      : resourcesData[currentResource] += quantity;

  }
  for (const key in resourcesData) {
    console.log(`${key} -> ${resourcesData[key]}`);
  }
}
storeAndPrintResources(
  [
    'gold',
    '155',
    'silver',
    '10',
    'copper',
    '17',
    'gold',
    '15'
  ]

);