function piccolo(input) {
  let parkingLot = [];

  for (let element of input) {
    let [command, carNumber] = element.split(', ');

    if (command === 'IN' && !parkingLot.includes(carNumber)) {
      parkingLot.push(carNumber);
    } else {
      if (parkingLot.includes(carNumber)) {
        let letCarNumberIndex = parkingLot.indexOf(carNumber);
        parkingLot.splice(letCarNumberIndex, 1);
      }
    }

  }
  //console.log(parkingLot);
  if (parkingLot.length < 1) {
    return console.log(`Parking Lot is Empty`);
  } else {
    let sortedParkingLot = parkingLot.sort((a, b) => {
      let firstNumber = a.splice(2,4);
      let secondNumber = a.splice(2,4);
      return firstNumber - secondNumber;
    });

    sortedParkingLot.forEach(element => {
      //console.log(element);

    });
  }
}

piccolo(
  ['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'IN, CA9999TT',
    'IN, CA2866HI',
    'OUT, CA1234TA',
    'IN, CA2844AA',
    'OUT, CA2866HI',
    'IN, CA9876HH',
    'IN, CA2822UU']
);
