function organizeList(input) {

  let sortedArr = input.sort((a, b) => a > b);
  sortedArr = addProductIndicator(sortedArr);

  for (const iterator of sortedArr) {
    console.log(iterator);
  }

  function addProductIndicator(array) {
    let labledArr = [];
    for (let i = 0; i < array.length; i++) {
      const element = array[i];
      labledArr.push(`${i + 1}.${element}`);
    }
    return labledArr
  }
}
organizeList(["Potatoes", "Tomatoes", "Onions", "Apples"]);