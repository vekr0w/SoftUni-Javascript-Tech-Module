function treasureFinder(input) {

  let keySequence = input.shift().split(' ');

  for (const string of input) {
    if (string === 'find') {
      break;
    }
    let stringToArray = string.split('');
    let stringToArrLength = stringToArray.length;
    let currentData = '';
    for (let k = 0, m = 0; k < stringToArrLength; k++ , m++) {
      let keySequenceLength = keySequence.length;
      if (m >= keySequenceLength) {
        m = 0;
      }
      let currentKey = Number(keySequence[m]);
      let currentCharCode = stringToArray[k].charCodeAt(0);
      currentData += String.fromCharCode(currentCharCode - currentKey);
    }
    let FirstIndexType = currentData.indexOf('&') + 1;
    let LastFirstIndexType = currentData.lastIndexOf('&');
    let FirstIndexCor = currentData.lastIndexOf('<') + 1;
    let LastFirstIndexCor = currentData.lastIndexOf('>');

    let treasureType = currentData.substring(FirstIndexType, LastFirstIndexType);
    let coordinates = currentData.substring(FirstIndexCor, LastFirstIndexCor);
    console.log(`Found ${treasureType} at ${coordinates}`);
  }
}

treasureFinder(
  ['1 2 1 3',
    'ikegfp\'jpne)bv=41P83X@',
    'ujfufKt)Tkmyft\'duEprsfjqbvfv=53V55XA',
    'find']
);