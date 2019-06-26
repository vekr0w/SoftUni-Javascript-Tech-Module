function easterCozonacs(input) {

  let budget = Number(input[0]);
  let floorCost = Number(input[1]);
  let eggsCost = floorCost * 0.75;
  let milkCost = (floorCost + floorCost * 0.25) / 4;
  let cozonacCost = floorCost + eggsCost + milkCost;
  let cozonacsCount = 0;
  let coloredEggsCount = 0;

  for (let i = 1; budget > 0; i++) {

    let isThereEnoughBudget = budget - cozonacCost >= 0;

    if (isThereEnoughBudget) {
      budget -= cozonacCost;
      cozonacsCount++;
      coloredEggsCount += 3;
    }

    if (i % 3 === 0) {
      coloredEggsCount -= cozonacsCount - 2;
    }

    if (!isThereEnoughBudget) {
      break;
    }
  }

  console.log(`You made ${cozonacsCount} cozonacs! Now you have ${coloredEggsCount} eggs and ${budget.toFixed(2)}BGN left.`);

}
easterCozonacs(
  ['20.50', '1.25']
);