function factorialDivision(numOne, numTwo) {

  let firstNum = factorialize(numOne);
  let secondNum = factorialize(numTwo);
  let result = firstNum / secondNum;

  console.log(result.toFixed(2));

  function factorialize(num) {
    if (num < 0)
      return -1;
    else if (num == 0)
      return 1;
    else {
      return (num * factorialize(num - 1));
    }
  }
}
factorialDivision(5, 2);