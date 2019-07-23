function asciiSumator(input) {

  let startCharCode = input[0].charCodeAt(0);
  let endCharCode = input[1].charCodeAt(0);
  let charData = input[2].split('');
  let sum = 0;

  if (startCharCode > endCharCode) {
    let temp = endCharCode;
    endCharCode = startCharCode;
    startCharCode = temp;
  }

  for (const char of charData) {
    let currentCharCode = char.charCodeAt(0);
    if (currentCharCode > startCharCode && currentCharCode < endCharCode) {
      sum += currentCharCode;
    }
  }
  console.log(sum);
}
asciiSumator(
  ['a', '1', 'jfe392$#@j24ui9ne#@$']
);