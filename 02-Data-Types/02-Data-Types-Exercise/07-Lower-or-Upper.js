function isUpper(inputChar) {
  inputChar === inputChar.toUpperCase() ? console.log('upper-case') : console.log('lower-case');
}

isUpper = inputChar => inputChar === inputChar.toUpperCase() ? console.log('upper-case') : console.log('lower-case');

isUpper('L')