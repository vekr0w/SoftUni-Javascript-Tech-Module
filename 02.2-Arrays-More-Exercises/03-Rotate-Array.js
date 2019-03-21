function rotateArray(inputArray) {

  let rotations = 0;
  if (Number(inputArray[inputArray.length - 1])) {
    rotations = Number(inputArray.pop());
  } else {
    return console.log('Empty');
  }

  let data = inputArray;

  for (let i = 0; i < rotations; i++) {
    const element = data.pop();
    data.unshift(element);
  }

  console.log(data.join(' '));

}
rotateArray(['1', '2', '3', '4', '2']);