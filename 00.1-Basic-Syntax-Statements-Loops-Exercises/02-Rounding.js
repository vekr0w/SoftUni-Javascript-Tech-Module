function roundNumber(num, roundIndex) {

  let precision = roundIndex > 15 ? 15 : Number(roundIndex)
  let numToPrint = num.toFixed(precision);
  console.log(parseFloat(Number(numToPrint)));

}
roundNumber(10.5, 3)