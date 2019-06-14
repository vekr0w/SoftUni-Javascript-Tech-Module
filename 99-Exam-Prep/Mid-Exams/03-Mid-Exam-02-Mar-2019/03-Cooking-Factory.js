function cookingFactory(input) {

  let bestBatch = [];
  let bestTotalValue = null;

  for (let i = 0; i < input.length; i++) {
    let currentCommand = input[i];

    if (currentCommand === 'Bake It!') {
      console.log(`Best Batch quality: ${bestTotalValue}`);
      console.log(bestBatch.join(' '));
      break;
    } else {
      let currentBatch = currentCommand.split('#').map(Number);
      let currentTotalValue = currentBatch.reduce((a, b) => a + b, 0);
      let currentAverage = currentTotalValue / currentBatch.length;
      let averageBest = bestTotalValue / bestBatch.length;

      if (bestTotalValue === null) {
        averageBest = Number.MIN_SAFE_INTEGER;
        bestTotalValue = Number.MIN_SAFE_INTEGER;
      }
      if (currentTotalValue > bestTotalValue && currentAverage > averageBest) {
        bestTotalValue = currentTotalValue;
        bestBatch = currentBatch;
      } else if (currentTotalValue === bestTotalValue && currentAverage === averageBest) {
        let isCurrentLengthLess = currentBatch.length < bestBatch.length;
        if (isCurrentLengthLess) {
          bestTotalValue = currentTotalValue;
          bestBatch = currentBatch;
        }

      }
    }
  }
}
cookingFactory(
  ['5#4#10#-2', '10#5#2#3#2', 'Bake It!']
);