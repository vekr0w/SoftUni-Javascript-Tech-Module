function isleOfMan(input) {
  const decrypt = (string, number) => {
    number = Number(number);
    let output = '';
    for (let char of string) {
      let currentAsciiCode = char.charCodeAt();
      let newAscii = currentAsciiCode + number;
      output += String.fromCharCode(newAscii);
    }
    return output;
  };
  
  for (let line of input) {
    let pattern = /^(?<symbols>[#$%*&])(?<racerName>[A-Za-z]+)\1=(?<codeLength>\d+)!!(?<geohashcode>[\s\S]*?)$/g;
    let data = pattern.exec(line);
    if (data) {
      let isLengthValid = data.groups.codeLength == data.groups.geohashcode.length;
      if (isLengthValid) {
        let decryptedCode = decrypt(data.groups.geohashcode, data.groups.codeLength);
        console.log(`Coordinates found! ${data.groups.racerName} -> ${decryptedCode}`);
        continue;
      }
    }
    console.log(`Nothing found!`);
  }


}
isleOfMan(
  ['%GiacomoAgostini%=7!!hbqw',
    '&GeoffDuke*=6!!vjh]zi',
    'JoeyDunlop=10!!lkd,rwazdr',
    'Mike??Hailwood=5!![pliu',
    '#SteveHislop#=16!!df%TU[Tj(h!!TT[S']
);