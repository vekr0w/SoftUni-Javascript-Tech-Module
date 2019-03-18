function sumOnlyEven(inputArr) {
  let sum = 0;
  let parsedArray = inputArr.map(Number);
  let calculateSum = parsedArray.forEach(element => {
    if (element % 2 === 0) {
      sum += element;
    }
  });
  console.log(sum);

}
sumOnlyEven(['1', '2', '3', '4', '5', '6']);