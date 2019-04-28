function returnSums(input) {

  let data = input
    .toString()
    .split('')
    .map(Number)

  let sumEven = 0;
  let sumOdd = 0;

  data.forEach(element => {
    element % 2 == 0 ? sumEven += element : sumOdd += element;
  });

  console.log(`Odd sum = ${sumOdd}, Even sum = ${sumEven}`);

}
returnSums(3495892137259234);