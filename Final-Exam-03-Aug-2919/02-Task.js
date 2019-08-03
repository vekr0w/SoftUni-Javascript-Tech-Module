function task(input) {

  let numberOfCommands = Number(input.shift());

  for (let i = 0; i < numberOfCommands; i++) {
    let currentData = input[i];
    //console.log(currentData);
    let regex = /([*@])([A-Z][a-z]{2,})\1:\s\[([A-Za-z])\]\|\[([A-Z-a-z])\]\|\[([A-Z-a-z])\]\|$/g;
    let validator = regex.exec(currentData);
    if (validator) {
      let tag = validator[2];
      let firstChar = validator[3].charCodeAt(0);
      let secondChar = validator[4].charCodeAt(0);
      let thirdChar = validator[5].charCodeAt(0);
      console.log(`${tag}: ${firstChar} ${secondChar} ${thirdChar}`);
    } else {
      console.log(`Valid message not found!`);
    }
  }



  //end of main function
}
task(
  ['3',
    '*Request*: [I]|[s]|[i]|',
    '*Taggy@: [73]|[73]|[73]|',
    'Should be valid @Taggy@: [v]|[a]|[l]|'
  ]
);