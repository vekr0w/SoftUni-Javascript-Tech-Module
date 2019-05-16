function isNumDivisible(number) {
  let numToPrint = 0;
  let checkNumbers = [2, 3, 6, 7, 10];

  for (let i = 0; i < checkNumbers.length; i++) {
    const element = checkNumbers[i];
    if (number % element === 0) {
      numToPrint = element;
    }
  }
  numToPrint > 0 ? console.log(`The number is divisible by ${numToPrint}`) : console.log('Not divisible');
}
isNumDivisible(30)