function isNumAmazing(input) {

  let inputToString = input.toString();
  let sumTotal = 0;
  for (let i = 0; i < inputToString.length; i++) {
    sumTotal += Number(inputToString[i]);
  }

  let result = sumTotal.toString().includes('9');

  console.log(result ? `${input} Amazing? True` : `${input} Amazing? False`);

}