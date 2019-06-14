function sumOfOdd(input) {
  let total = 0;
  let counter = 0;

  for (let i = 1; i <= 100; i++) {
    if (counter === input) {
      return console.log(`Sum: ${total}`);
    }
    if (i % 2 === 1) {
      total += i;
      console.log(i);
      counter++

    }
  }
}
sumOfOdd(5)