function sortNums(firstNum, secondNum, thirdNum) {
  let newArr = [];
  newArr.push(firstNum, secondNum, thirdNum);
  newArr.sort((a, b) => b - a);
  newArr.forEach(element => {
    console.log(element);
  });
}
sortNums(1, 3, 2)