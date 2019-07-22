function deserializeString(input) {

  let output = [];
  for (let i = 0; i < input.length; i++) {
    let element = input[i];
    if (element === 'end') {
      break;
    }
    let [char, indexes] = element.split(':');
    indexes = indexes.split('/');
    indexes.forEach(index => {
      output[index] = char;
    });
  }

  console.log(output.join(''));

}
deserializeString(
  ['a:0/2/4/6', 'b:1/3/5', 'end']
);
