function binaryToDecimal(string) {
  let decimal = +0;
  let bits = +1;
  for (let i = 0; i < string.length; i++) {
    let currNum = +(string[string.length - i - 1]);
    if (currNum === 1) {
      decimal += bits;
    }
    bits *= 2;
  }
  console.log(decimal);
}

function bin2dec(num) {
  return num.split('').reverse().reduce(function(x, y, i) {
    return (y === '1') ? x + Math.pow(2, i) : x;
  }, 0);
}