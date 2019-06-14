function modifyArray(input) {

  let originalArr = input;
  let modifiedArr = [];
  let originalSum = 0;
  let modifiedSum = 0;

  for (let i = 0; i < originalArr.length; i++) {
    const element = originalArr[i];

    if (element % 2 == 0) {
      modifiedArr.push(element + i);
    } else {
      modifiedArr.push(element - i);
    }
    originalSum += element;
    modifiedSum += modifiedArr[i];
  }

  console.log(modifiedArr);
  console.log(originalSum);
  console.log(modifiedSum);

}
modifyArray([5, 15, 23, 56, 35]);