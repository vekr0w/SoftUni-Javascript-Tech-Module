function equalSums(inputArr) {

  let data = inputArr;

  for (let i = 0; i < data.length; i++) {
    const rightSide = data.slice(i + 1);
    const leftSide = data.slice(0, i);
    let rightSum = 0;
    let leftSum = 0;

    for (let k = 0; k < rightSide.length; k++) {
      rightSum += Number(rightSide[k]);
    }
    for (let l = 0; l < leftSide.length; l++) {
      leftSum += Number(leftSide[l]);
    }

    if (rightSum === leftSum) {
      return console.log(i);
    }

  }

  console.log('no');

}
equalSums([1, 2, 3, 3])