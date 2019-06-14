function addOrRemove(inputArray) {

  const rawData = inputArray;
  let processedData = [];
  let counter = 0;

  for (let i = 0; i < rawData.length; i++) {
    const element = rawData[i];
    counter++
    if (element === 'add') {
      processedData.push(counter);
    } else {
      processedData.pop()
    }
  }

  processedData.length > 0 ? console.log(processedData.join(' ')) : console.log('Empty');

}
addOrRemove(['add', 'add', 'add', 'add']);