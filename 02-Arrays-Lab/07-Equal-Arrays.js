function areArraysEqual(firstArr, secondArr) {
  let areEqual = false;
  //let difference = 0;
  let sum = 0;
  for (let i = 0; i < firstArr.length; i++) {
    const arrayA = Number(firstArr[i]);
    const arrayB = Number(secondArr[i]);

    if (arrayA === arrayB) {
      sum += arrayA;
    } else {
      return console.log(`Arrays are not identical. Found difference at ${i} index`);
    }
  }
  return console.log(`Arrays are identical. Sum: ${sum}`);
}