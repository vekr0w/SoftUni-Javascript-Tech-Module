function printElements(inputArray) {

  const steps = Number(inputArray.pop());
  const rawData = inputArray
  let processedData = [];

  for (let i = 0; i < rawData.length; i += steps) {
    const element = rawData[i];
    processedData.push(element);
  }

  console.log(processedData.join(' '));

}
printElements(['5', '20', '31', '4', '20', '2']);