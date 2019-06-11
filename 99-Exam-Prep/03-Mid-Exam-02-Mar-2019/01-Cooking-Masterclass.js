function cookingMasterclass(input) {

  let budget = +input[0];
  let studentsCount = +input[1];
  let flourCost = +input[2];
  let eggCost = +input[3];
  let apronCost = +input[4];

  let totalCost = 0;

  for (let i = 1; i <= studentsCount; i++) {

    if (i % 5 === 0) {
      totalCost += eggCost * 10;
    } else {
      totalCost += flourCost;
      totalCost += eggCost * 10;
    }
  }

  totalCost += apronCost * (Math.ceil(studentsCount + studentsCount * 0.20));

  if (totalCost <= budget) {
    console.log(`Items purchased for ${totalCost.toFixed(2)}$.`);
  } else {
    console.log(`${Math.abs(budget - totalCost).toFixed(2)}$ more needed.`);
  }
}
cookingMasterclass([
  100,
  25,
  4.0,
  1.0,
  6.0
]);

//[budget, students, flour, egg, apron]


//for (let i = 1; i <= studentsCount; i++) {
//
//  if (i % 5 === 0) {
//    totalCost += eggCost;
//    totalCost += apronCost;
//  } else {
//    totalCost += flourCost;
//    totalCost += eggCost;
//    totalCost += apronCost;
//  }
//}