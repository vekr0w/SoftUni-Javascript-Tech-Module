function sortArray(input) {

  let sortedArray = input.sort((a, b) => a - b)
  let finalArray = [];

  while (sortedArray.length !== 0) {
    const smallestNum = sortedArray.shift()
    const largestNum = sortedArray.pop()
    finalArray.push(largestNum);
    finalArray.push(smallestNum);
  }
  console.log(finalArray.join(' '));
}
sortArray([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);