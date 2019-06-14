function compareAndMergeArrays(firstInput, secondInput) {

  let newArr = [];
  let firstArr = firstInput;
  let secondArr = secondInput;

  for (let i = 0; i < firstArr.length; i++) {
    const elemOfFirst = firstArr[i];
    const elemOfSecond = secondArr[i];

    i % 2 == 0 ? newArr.push(Number(elemOfFirst) + Number(elemOfSecond)) : newArr.push(elemOfFirst + elemOfSecond);

  }
  console.log(newArr.join(' - '));

}
compareAndMergeArrays(["5", "15", "23", "56", "35"], ["17", "22", "87", "36", "11"]);