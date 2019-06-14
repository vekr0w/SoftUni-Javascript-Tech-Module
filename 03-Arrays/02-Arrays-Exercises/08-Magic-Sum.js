function magicSum(inputArr, number) {

  let numToCompare = Number(number);

  for (let i = 0; i < inputArr.length; i++) {
    const currentElement = inputArr[i];
    for (let j = i + 1; j < inputArr.length; j++) {
      const nextElement = inputArr[j];
      const isConditionTrue = currentElement + nextElement === numToCompare;
      if (isConditionTrue) {
        console.log(`${currentElement} ${nextElement}`);
      }
    }
  }
}
magicSum(
  [1, 7, 6, 2, 19, 23],
  8
);