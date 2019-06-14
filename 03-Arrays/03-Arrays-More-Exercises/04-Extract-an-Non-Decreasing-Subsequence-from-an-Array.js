function modifyArray(inputArr) {

  const rawData = inputArr.map(Number);
  let processedData = [];
  let maxNum = Number.MIN_SAFE_INTEGER;

  rawData.forEach(element => {
    if (element >= maxNum) {
      maxNum = element;
      processedData.push(maxNum);
    }
  });

  console.log(processedData.join(' '));

}
modifyArray([1, 3, 8, 4, 10, 12, 3, 2, 24]);