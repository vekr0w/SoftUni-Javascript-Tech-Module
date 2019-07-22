function cutAndReverse(input) {

  const lengthToCut = Math.floor(input.length / 2);
  let firstHalf = input.slice(0, lengthToCut);
  let secondHalf = input.slice(lengthToCut, input.length);
  firstHalf = firstHalf
    .split('')
    .reverse()
    .join('');
  secondHalf = secondHalf
    .split('')
    .reverse()
    .join('');

  console.log(firstHalf);
  console.log(secondHalf);

}
cutAndReverse('tluciffiDsIsihTgnizamAoSsIsihT');