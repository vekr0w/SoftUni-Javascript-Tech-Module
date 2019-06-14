function reversedSplicedArray(number, InputArray) {
  let index = Number(number);
  let original = InputArray;

  let arrayToPrint = original.slice(0, index).reverse();
  console.log(arrayToPrint.join(' '));

}
reversedSplicedArray(3, [10, 20, 30, 40, 50]);