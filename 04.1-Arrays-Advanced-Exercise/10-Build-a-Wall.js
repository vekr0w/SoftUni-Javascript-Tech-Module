function buildingWall(input) {
  input.map(Number);
  let dailyUnits = [];
  let totalUnitsConcrete = 0;
  for (let i = 0; i < input.length; i++) {
    const element = input[i];
    for (let j = element, temp = 0; j < 30; j++, temp++) {
      Number(dailyUnits[temp]) ? dailyUnits[temp] += 195 : dailyUnits.push(195)
      totalUnitsConcrete += 195;
    }
  }
  let totalCost = totalUnitsConcrete * 1900;
  console.log(dailyUnits.join(', '));
  console.log(`${totalCost} pesos`);

}
buildingWall([21, 25, 28]);