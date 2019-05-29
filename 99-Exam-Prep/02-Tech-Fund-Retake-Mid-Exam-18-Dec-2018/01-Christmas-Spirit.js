function christmassDecoration(input) {

  let allowedQuantity = Number(input[0]);
  let daysCount = Number(input[1]);
  let spirit = 0;
  let ornamentSetCount = 0;
  let treeSkirtCount = 0;
  let treeGarlandsCount = 0;
  let treeLightsCount = 0;

  for (let i = 1; i <= daysCount; i++) {
    const secondDay = i % 2 == 0;
    const thirdDay = i % 3 == 0;
    const fifthDay = i % 5 == 0;
    const tenthDay = i % 10 == 0;
    const eleventhDay = i % 11 == 0;

    if (eleventhDay) {
      allowedQuantity += 2;
    }

    if (secondDay) {
      ornamentSetCount += allowedQuantity;
      spirit += 5;
    }

    if (thirdDay) {
      treeSkirtCount += allowedQuantity;
      treeGarlandsCount += allowedQuantity;
      spirit += 13;
    }

    if (fifthDay) {
      treeLightsCount += allowedQuantity;
      spirit += 17;
      if (thirdDay) {
        spirit += 30;
      }
    }

    if (tenthDay) {
      spirit -= 20;
      treeSkirtCount++;
      treeGarlandsCount++;
      treeLightsCount++;
    }

    if (i === daysCount && tenthDay) {
      spirit -= 30;
    }
  }
  let totalCost = (ornamentSetCount * 2) + (treeSkirtCount * 5) + (treeGarlandsCount * 3) + (treeLightsCount * 15);
  console.log(`Total cost: ${totalCost}`);
  console.log(`Total spirit: ${spirit}`);

}
christmassDecoration([1, 7]);

/*
Ornament Set – 2$ a piece
Tree Skirt – 5$ a piece
Tree Garlands – 3$ a piece
Tree Lights – 15$ a piece
*/