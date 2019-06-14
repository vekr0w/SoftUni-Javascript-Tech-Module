function getSum(input) {

  let first = Number(input.shift());
  let last = Number(input.pop());
  console.log(first + last);

}
getSum(['20', '30', '40']);