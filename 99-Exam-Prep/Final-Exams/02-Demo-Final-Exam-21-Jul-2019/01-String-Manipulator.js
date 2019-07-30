function stringManipulation(input) {

  let stringData = '';

  const add = (string) => {
    stringData += string;
  };
  const upgrade = (char) => {
    let tempString = '';
    for (let element of stringData) {
      if (element === char) {
        let currentAscii = element.charCodeAt(0);
        tempString += String.fromCharCode(currentAscii + 1);
      } else {
        tempString += element;
      }
    }
    stringData = tempString;
  };
  const print = () => {
    console.log(stringData);
  };
  const index = (char) => {
    if (stringData.includes(char)) {
      let tempArr = stringData.split('');
      let indexes = [];
      for (let i = 0; i < tempArr.length; i++) {
        const element = tempArr[i];
        if (element === char) {
          indexes.push(i);
        }
      }
      console.log(indexes.join(' '));
    } else {
      console.log(`None`);
    }


  };
  const remove = (string) => {
    if (stringData.includes(string)) {
      let temp = stringData.split(string);
      stringData = temp.join('');
    }
  };

  let applyCommands = {
    'Add': add,
    'Upgrade': upgrade,
    'Print': print,
    'Index': index,
    'Remove': remove
  };

  for (let line of input) {

    if (line === 'End') {
      break;
    }
    let tokens = line.split(' ');
    let command = tokens.shift();
    applyCommands[command](...tokens);

  }
}
stringManipulation(
  ['Add abracadabra',
    'Print',
    'Upgrade a',
    'Print',
    'Index b',
    'Remove bbrb',
    'Print',
    'End']
);