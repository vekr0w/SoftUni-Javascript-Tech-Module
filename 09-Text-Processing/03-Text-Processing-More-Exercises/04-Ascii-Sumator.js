function asciiSumator(input) {

  let startChar = input[0];
  let endChar = input[1];
  let filterRegex = /[^?-E]/g;
  let regex = new RegExp('^' + startChar - endChar, 'g');
  let randomString = input[2];
  let filteredString = randomString.replace(filterRegex, '').split('');
  let sum = 0;
  filteredString.forEach(char => {
    sum += char.charCodeAt(0);
  });
  console.log(sum);

}
asciiSumator(
  ['?', 'E', '@ABCEF']
);