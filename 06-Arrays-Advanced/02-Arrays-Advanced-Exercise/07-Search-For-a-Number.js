function searchForNumber(firstArray, secondArray) {

  let elementsToTake = Number(secondArray.shift());
  let elementsToDelete = Number(secondArray.shift());
  let elementToSearch = Number(secondArray.shift());

  let newArray = firstArray.slice(0, elementsToTake);
  let temp = newArray.splice(0, elementsToDelete);
  let occurances = 0;

  newArray.forEach(element => {
    if (element == elementToSearch) {
      occurances++;
    }
  });

  console.log(`Number ${elementToSearch} occurs ${occurances} times.`);
}
searchForNumber(
  [5, 2, 3, 4, 1, 6], [5, 2, 3]);

/*
First arr = data to work with, second array is 3x commands with the following details:
First number represents the number of elements you have to take from the first array (starting from the first one)
Second number represents the number of elements you have to delete from the numbers you took (starting from the first one).
Last number is the number we search in our collection after the manipulations.

  */