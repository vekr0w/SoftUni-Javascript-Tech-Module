function getSum(numOne, numTwo, numThree) {

  let sumOfAll = numOne + numTwo + numThree;

  sumOfAll % 1 === 0 ? sumOfAll += ' - Integer' : sumOfAll += ' - Float';
  console.log(sumOfAll);
}