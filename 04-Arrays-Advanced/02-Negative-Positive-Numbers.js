function sortArray(input) {
  let newArr = [];

  input.forEach(element => {
    element < 0 ? newArr.unshift(element) : newArr.push(element)
  });

  for (const element of newArr) {
    console.log(element);
  }

}
//sortArray([7, -2, 8, 9]);
sortArray([3, -2, 0, -1]);