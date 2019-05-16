function printAndSum(start, end) {
  let sum = 0;
  let numsToPrint = []
  for (let i = start; i <= end; i++) {
    numsToPrint.push(i)
    sum += i;
  }
  console.log(numsToPrint.join(' '));
  console.log(`Sum: ${sum}`);
}
printAndSum(5, 10);