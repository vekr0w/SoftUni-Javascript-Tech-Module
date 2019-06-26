function lastShop(input) {

  let listOfNumbers = input.shift().split(' ').map(Number);

  for (let i = 0; i < input.length; i++) {

    if (input[i] === 'END') {
      break;
    }
    let [command, firstNum, secondNum] = input[i].split(' ');
    firstNum = Number(firstNum);
    secondNum = Number(secondNum);

    if (command === 'Change' && listOfNumbers.includes(firstNum)) {
      let indexOfElemToChange = listOfNumbers.indexOf(firstNum);
      listOfNumbers.splice(indexOfElemToChange, 1, secondNum);
    }

    if (command === 'Hide' && listOfNumbers.includes(firstNum)) {
      let indexOfElemToRemove = listOfNumbers.indexOf(firstNum);
      listOfNumbers.splice(indexOfElemToRemove, 1);
    }

    if (command === 'Switch' && listOfNumbers.includes(firstNum) && listOfNumbers.includes(secondNum)) {
      let firstIndex = listOfNumbers.indexOf(firstNum);
      let secondIndex = listOfNumbers.indexOf(secondNum);
      listOfNumbers.splice(firstIndex, 1, secondNum);
      listOfNumbers.splice(secondIndex, 1, firstNum);
    }

    if (command === 'Insert' && listOfNumbers[firstNum] != undefined) {
      listOfNumbers.splice(firstNum + 1, 0, secondNum);
    }
    if (command === 'Reverse') {
      listOfNumbers.reverse();
    }

  }

  console.log(listOfNumbers.join(' '));

}
lastShop(
  ['77 120 115 101 101 97 78 88 112 111 108 101 111 110',
    'Insert 5 32',
    'Switch 97 78',
    'Hide 88',
    'Change 120 117',
    'END'
  ]
);


/*
Change {paintingNumber} {changedNumber} – find the painting with the first number in the collection (if it exists) and change its number with the second number – {changedNumber}.
Hide {paintingNumber} – find the painting with this value and if it exists and hide it (remove it).
Switch {paintingNumber} {paintingNumber2} – find the given paintings in the collections if they exist and switch their places.
Insert {place} {paintingNumber} – insert the painting (paintingNumber) on the next place after the given one, if it exists.
Reverse – you must reverse the order of the paintings.

*/