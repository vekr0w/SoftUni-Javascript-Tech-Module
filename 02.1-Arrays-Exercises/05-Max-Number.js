function printMaxNums(inputArr) {
  let array = inputArr;
  let store = [];
  let highestNum = Math.max(...array);

  for (let i = array.indexOf(highestNum); i < array.length; i++) {
    const element = array[i];
    let check = array.slice(i)
    if (Math.max(...check) === element && !store.includes(element)) {
      store.push(element);
    }
  }

  console.log(store.join(' '));

}
printMaxNums([41, 41, 34, 20]);