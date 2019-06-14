function printSum(inputNum) {
  numToString = inputNum.toString()
  let sum = 0;
  for (let i = 0; i < numToString.length; i++) {
    const element = numToString[i];
    sum += Number(element);
  }
  console.log(sum);
}
printSum(245678)