//function calculator(numOne, operator, numTwo) {//
//  operator === '+' ? console.log((numOne + numTwo).toFixed(2)) : console.log((numOne - numTwo).toFixed(2));
//}

function calculator(numOne, operator, numTwo) {

  switch (operator) {
    case '+':
      console.log((numOne + numTwo).toFixed(2));
      break;
    case '-':
      console.log((numOne - numTwo).toFixed(2));
      break;
    case '*':
      console.log((numOne * numTwo).toFixed(2));
      break;
    case '/':
      console.log((numOne / numTwo).toFixed(2));
      break;

    default:
      break;
  }
}