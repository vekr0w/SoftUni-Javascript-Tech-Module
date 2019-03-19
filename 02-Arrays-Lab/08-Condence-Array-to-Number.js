function condenceArray(input) {
  let originalArr = input;
  let condencedArr = [];

  for (let i = 0; i < originalArr.length - 1; i++) {

    if (condencedArr.length !== 1) {
      for (let j = 0; j < originalArr.length - 1; j++) {
        let firstElem = originalArr[i];
        let secondElem = originalArr[i + 1];
        condencedArr.push(firstElem + secondElem);
      }
    } else {

    }
  }
  console.log(originalArr);
  console.log(condencedArr);

  // does not work


}
condenceArray([2, 10, 3]);