function isNumberPerfect(number) {
  let temporaryNum = 0;
  for (let i = 1; i <= number / 2; i++) {
    if (number % i === 0)
      temporaryNum += i;
  }
  temporaryNum === number && temporaryNum != 0 ? console.log('We have a perfect number!') : console.log(`It’s not so perfect.`);
}
isNumberPerfect(6);