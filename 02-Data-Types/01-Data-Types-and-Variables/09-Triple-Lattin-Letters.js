function printLattinLetters(inputNum) {

  for (let i = 0; i < inputNum; i++) {
    for (let o = 0; o < inputNum; o++) {
      for (let p = 0; p < inputNum; p++) {
        let firstLetter = String.fromCharCode(97 + i);
        let secondLetter = String.fromCharCode(97 + o);
        let thirdLetter = String.fromCharCode(97 + p);
        console.log(`${firstLetter}${secondLetter}${thirdLetter}`);
      }
    }
  }
}
printLattinLetters(3);