function easterShopping(input) {

  let listOfShops = input.shift().split(' ');
  let countOfCommands = Number(input.shift()) - 1;

  for (let i = 0; i <= countOfCommands; i++) {
    let [command, firstElem, secondElem] = input[i].split(' ');

    if (command === 'Include') {
      listOfShops.push(firstElem);
    }
    if (command === 'Visit' && listOfShops.length >= Number(secondElem)) {
      secondElem = Number(secondElem);
      if (firstElem === 'first') {
        secondElem = Number(secondElem);
        listOfShops.splice(0, secondElem);
      } else {
        listOfShops.splice(-1, secondElem);
      }
    }

    if (command === 'Prefer' && listOfShops[firstElem] !== undefined && listOfShops[secondElem] != undefined) {
      let firstShop = listOfShops[firstElem];
      let secondShop = listOfShops[secondElem];
      listOfShops.splice(firstElem, 1, secondShop);
      listOfShops.splice(secondElem, 1, firstShop);
    }

    if (command === 'Place') {
      secondElem = Number(secondElem) + 1;
      if (listOfShops[secondElem] != undefined) {
        listOfShops.splice(secondElem, 0, firstElem);
      }
    }
  }

  console.log(`Shops left:`);
  console.log(listOfShops.join(' '));

}
easterShopping(
  ['Bershka CandyStore ThriftShop Armani Groceries ToyStore PeakStore',
    '5',
    'Include HM',
    'Visit first 2',
    'Visit last 1',
    'Prefer 3 1',
    'Place Library 2'
  ]
);