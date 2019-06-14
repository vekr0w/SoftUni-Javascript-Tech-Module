function springVacationCost(input) {
  input = input.map(Number);
  let daysCount = input.shift();
  let budget = input.shift();
  let groupSize = input.shift();
  let fuelPricePerKm = input.shift();
  let foodCostTotal = input.shift() * groupSize * daysCount;
  let accommodationCostTotal = input.shift() * groupSize * daysCount;
  if (groupSize > 10) {
    accommodationCostTotal -= accommodationCostTotal * 0.25;
  }
  let totalCost = accommodationCostTotal + foodCostTotal;
  let counter = 1;

  for (let i = 0; i < input.length; i++, counter++) {
    const fuelForGivenDay = input[i] * fuelPricePerKm;
    totalCost += fuelForGivenDay;
    if (counter % 3 == 0 || counter % 5 == 0) {
      totalCost += totalCost * 0.40;
    }
    if (counter % 7 == 0) {
      totalCost -= totalCost / groupSize;
    }
  }

  let moneyLeft = budget - totalCost;
  if (moneyLeft >= 0) {
    console.log(`You have reached the destination. You have ${moneyLeft.toFixed(2)}$ budget left.`);
  } else {
    console.log(`Not enough money to continue the trip. You need ${Math.abs(moneyLeft).toFixed(2)}$ more.`);
  }

}
springVacationCost(
  ['7',
    '12000',
    '5',
    '1.5',
    '10',
    '20',
    '512',
    '318',
    '202',
    '154',
    '222',
    '108',
    '123'
  ]
);