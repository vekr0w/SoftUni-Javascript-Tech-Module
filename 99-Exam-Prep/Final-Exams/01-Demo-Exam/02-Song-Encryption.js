function songEncryption(input) {


  for (let line of input) {
    if (line === 'end') {
      break;
    }
    const artistValidator = /^([A-Z][a-z\s']+)$/g;
    const songValidator = /^([A-Z\s]+)$/g;
    let [artist, songName] = line.split(':');

    if (!artistValidator.test(artist) || !songValidator.test(songName)) {
      console.log(`Invalid input!`);
      continue;
    }

    let key = artist.length;
    let output = '';
    for (let char of line) {
      if (char === ':') {
        output += '@';
        continue;
      }
      let asciiCode = char.charCodeAt(0);

      if (asciiCode >= 65 && asciiCode <= 90) {
        asciiCode += key;
        if (asciiCode > 90) {
          asciiCode -= 26;
        }
      }

      if (asciiCode >= 97 && asciiCode <= 122) {
        asciiCode += key;
        if (asciiCode > 122) {
          asciiCode -= 26;
        }
      }
      output += String.fromCharCode(asciiCode);
    }
    console.log(`Successful encryption: ${output}`);
  }


}
songEncryption(
  ['Em4inem:VENOM',
    'Linkin park:NUMB',
    'Drake:NONSTOP',
    'Adele:HELLO',
    'end']
);