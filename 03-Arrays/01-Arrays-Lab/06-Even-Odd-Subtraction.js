function calculateDifference(inputArr) {
  let sumEven = 0;
  let sumOdd = 0;
  let parsedArray = inputArr.map(Number);
  let calculateSum = parsedArray.forEach(element => {
    element % 2 === 0 ? sumEven += element : sumOdd += element;
  });
  console.log(sumEven - sumOdd);
}