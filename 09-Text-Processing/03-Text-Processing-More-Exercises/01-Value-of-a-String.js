function valueOfString(input) {

  let string = input[0];
  let command = input[1];
  let output = 0;

  if (command === 'LOWERCASE') {
    let removeUppercase = /[\W\dA-Z_]/g;
    string = string.split(removeUppercase).filter(Boolean).join('').split('');
    string.forEach(char => {
      output += char.charCodeAt(0);
    });
  } else {
    let removeUppercase = /[\W\da-z_]/g;
    string = string.split(removeUppercase).filter(Boolean).join('').split('');
    string.forEach(char => {
      output += char.charCodeAt(0);
    });
  }
  console.log(`The total sum is: ${output}`);

}
valueOfString(
  ['AC/DC', 'UPPERCASE',]
);