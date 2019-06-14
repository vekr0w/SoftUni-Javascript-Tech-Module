function sortArray(input) {

  let sortedArray = input.sort((a, b) => a.length - b.length || a.localeCompare(b));

  for (const iterator of sortedArray) {
    console.log(iterator);
  }

}
sortArray(["alpha", "beta", "gamma"]);