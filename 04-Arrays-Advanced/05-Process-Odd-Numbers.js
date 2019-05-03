function processNumber(input) {

  let processedNums = sortOdd(input);
  processedNums = doubleElements(processedNums);
  processedNums.reverse();

  console.log(processedNums.join(' '));

  function doubleElements(array) {
    let doubledElements = [];
    for (let i = 0; i < array.length; i++) {
      const element = array[i];
      let sum = element + element;
      doubledElements.push(sum);
    }
    return doubledElements;
  }

  function sortOdd(array) {
    let sortedNums = [];
    for (let i = 0; i < input.length; i++) {
      const element = input[i];
      if (!(i % 2 === 0)) {
        sortedNums.push(element);
      }
    }
    return sortedNums;
  }
}
processNumber([10, 15, 20, 25]);