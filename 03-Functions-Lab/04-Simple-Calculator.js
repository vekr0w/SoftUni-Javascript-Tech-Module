function simpleCalculator(numOne, numTwo, operator) {
  let calculate = (numOne, numTwo, operator) => {
    let result = 0;
    switch (operator) {
      case 'multiply':
        result = numOne * numTwo;
        break;
      case 'divide':
        result = numOne / numTwo;
        break;
      case 'add':
        result = numOne + numTwo
        break;
      case 'subtract':
        result = numOne - numTwo;
        break;

      default:
        break;
    }
    return result;
  }
  console.log(calculate(numOne, numTwo, operator));
}

simpleCalculator(5, 5, 'multiply');