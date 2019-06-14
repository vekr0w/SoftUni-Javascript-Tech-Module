function lastDigitName(number) {
  let numbers = {
    0: 'zero',
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eigth',
    9: 'nine'
  }
  let data = number.toString().split('').map(Number).pop()
  console.log(numbers[data]);
}
lastDigitName(242);