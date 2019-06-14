function siezeFire(input) {

  let firesToSieze = input.shift().split('#');
  let water = Number(input.shift());
  let cellsSiezed = [];
  let totalFireSiezed = 0;
  let effort = 0;

  for (let i = 0; i < firesToSieze.length; i++) {
    let [typeOfFire, valueOfCell] = firesToSieze[i].split(' = ');
    valueOfCell = Number(valueOfCell);

    let isFireHigh = valueOfCell >= 81 && valueOfCell <= 125 && typeOfFire === 'High';
    let isFireMedium = valueOfCell >= 51 && valueOfCell <= 80 && typeOfFire === 'Medium';
    let isFireLow = valueOfCell >= 1 && valueOfCell <= 50 && typeOfFire === 'Low';
    let isWaterEnough = water - valueOfCell > 0;

    if (isFireLow && isWaterEnough) {
      water -= valueOfCell;
      cellsSiezed.push(valueOfCell);
      totalFireSiezed += valueOfCell;
      effort += valueOfCell * 0.25;
    }
    if (isFireMedium && isWaterEnough) {
      water -= valueOfCell;
      cellsSiezed.push(valueOfCell);
      totalFireSiezed += valueOfCell;
      effort += valueOfCell * 0.25;
    }
    if (isFireHigh && isWaterEnough) {
      water -= valueOfCell;
      cellsSiezed.push(valueOfCell);
      totalFireSiezed += valueOfCell;
      effort += valueOfCell * 0.25;
    }
  }

  console.log(`Cells:`);
  cellsSiezed.forEach(element => {
    console.log(` - ${element}`);

  });

  console.log(`Effort: ${effort.toFixed(2)}`);
  console.log(`Total Fire: ${totalFireSiezed}`);


}
siezeFire(
  ['High = 150#Low = 55#Medium = 86#Low = 40#High = 110#Medium = 77',
    '220'
  ]
);