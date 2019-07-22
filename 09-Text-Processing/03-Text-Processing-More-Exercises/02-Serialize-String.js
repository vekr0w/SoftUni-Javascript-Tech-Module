function serializeString(input) {

  let output = {};
  const stringData = input[0].split('');

  for (let i = 0; i < stringData.length; i++) {
    const char = stringData[i];
    let indexOfChar = stringData.indexOf(char);
    if (!output.hasOwnProperty(char)) {
      output[char] = [];
      output[char].push(i);
    } else {
      output[char].push(i);
    }
  }

  for (const key in output) {
    console.log(`${key}:${output[key].join('/')}`);
  }
}
serializeString('abababa');