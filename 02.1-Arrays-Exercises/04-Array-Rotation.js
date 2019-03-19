function rotateArray(inputArr, rotations) {

  let arrayToRotate = inputArr;
  for (let i = 0; i < rotations; i++) {
    let takeElem = arrayToRotate.shift();
    let returnElem = arrayToRotate.push(takeElem);
  }
  console.log(arrayToRotate.join(' '));
}
rotateArray([51, 47, 32, 61, 21], 2);