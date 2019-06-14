function theHuntingGames(input) {
  input = input.map(Number);

  const adventureLengthDays = input.shift();
  const playersCount = input.shift();
  let groupsEnergyCount = input.shift();
  let groupWaterCount = input.shift() * playersCount * adventureLengthDays;
  let groupFoodCount = input.shift() * playersCount * adventureLengthDays;
  let daysCount = 1;

  for (let i = 0; daysCount <= adventureLengthDays; i++, daysCount++) {
    const dailyEnergyLoss = input[i];
    groupsEnergyCount -= dailyEnergyLoss;

    if (groupsEnergyCount <= 0) {
      console.log(`You will run out of energy. You will be left with ${groupFoodCount.toFixed(2)} food and ${groupWaterCount.toFixed(2)} water.`);
      return;
    }
    if (daysCount % 2 == 0) {
      groupWaterCount -= groupWaterCount * 0.30;
      groupsEnergyCount += groupsEnergyCount * 0.05;
    }
    if (daysCount % 3 == 0) {
      groupFoodCount -= groupFoodCount / playersCount;
      groupsEnergyCount += groupsEnergyCount * 0.10;
    }
  }

  console.log(`You are ready for the quest. You will be left with - ${groupsEnergyCount.toFixed(2)} energy!`);

}

theHuntingGames(
  ['10',
    '7',
    '5035.5',
    '11.3',
    '7.2',
    '942.3',
    '500.57',
    '520.68',
    '540.87',
    '505.99',
    '630.3',
    '784.20',
    '321.21',
    '456.8',
    '330'
  ]
);