function printNumbers(input) {

  let k = Number(input.shift());
  let firstNumbers = [];
  let lastNumbers = [];

  for (let i = 0; i < k; i++) {
    firstNumbers.push(input[i]);
  }

  for (let n = input.length - k; n < input.length; n++) {
    lastNumbers.push(input[n]);
  }

  console.log(firstNumbers.join(' '));
  console.log(lastNumbers.join(' '));

}
//printNumbers([2, 7, 8, 9]);
printNumbers([3, 6, 7, 8, 9]);