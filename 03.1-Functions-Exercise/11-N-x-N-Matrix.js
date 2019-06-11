function matrixNtimesN(input) {
  let n = input.toString();
  let arr = [];

  for (let i = 0; i < n; i++) {
    arr.push(n.repeat(n));
    console.log(arr[i].split('').join(''));
  }
}
matrixNtimesN(12);