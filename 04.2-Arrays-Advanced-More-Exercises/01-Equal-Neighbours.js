function findNumberOfPairs(input) {
  let pairs = 0;
  for (let i = 0; i < input.length; i++) {
    let firstRow = input[i];
    let secondRow = input[i + 1]
    if (secondRow == undefined || secondRow.length < 1)
      break


    for (let j = 0; j < firstRow.length; j++) {
      const firstRowElement = firstRow[j]
      const secondRowElement = secondRow[j]
      if (firstRowElement == secondRowElement) {
        pairs++
      }
    }
  }
  console.log(pairs);

}
findNumberOfPairs(
  [
    [2, 2, 5, 7, 4],
    [4, 0, 5, 3, 4],
    [2, 5, 5, 4, 2],
  ]
)