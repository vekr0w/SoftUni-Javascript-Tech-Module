


function manipulateArray(arrayNumbers, arrayCommands) {

  for (const currentCommand of arrayCommands) {
    if ((currentCommand.includes('add')) && (currentCommand.length <= 7)) {
      add(arrayNumbers, currentCommand);
    } else if (currentCommand.includes('addMany')) {
      addMany(arrayNumbers, currentCommand);
    } else if (currentCommand.includes('contains')) {
      contains(arrayNumbers, currentCommand);
    } else if (currentCommand.includes('remove')) {
      remove(arrayNumbers, currentCommand);
    } else if (currentCommand.includes('shift')) {
      shift(arrayNumbers, currentCommand);
    } else if (currentCommand.includes('sumPairs')) {
      sumPairs(arrayNumbers, currentCommand);
    } else if (currentCommand.includes('print')) {
      print(arrayNumbers);
    }
  }


  function print(array) {
    return console.log(array);
  }

  function sumPairs(array) {
    let summedArray = [];
    for (let i = 0; i < array.length; i += 2) {
      const firstElem = array[i];
      const secondElem = array[i + 1];
      let pair = firstElem + secondElem;
      summedArray.push(pair);
    }
    array.splice(0);
    array.push(...summedArray);
  }

  function shift(array, command) {
    currentCommand = command.split(' ');
    numberOfRotations = Number(currentCommand[1]);
    for (let i = 0; i < numberOfRotations; i++) {
      const element = array.shift();
      array.push(element);
    }
  }


  function remove(array, command) {
    currentCommand = command.split(' ');
    removeFromIndex = Number(currentCommand[1]);
    return array.splice(removeFromIndex, 1);
  }

  function contains(array, command) {
    currentCommand = command.split(' ');
    numToSearch = Number(currentCommand[1]);
    return console.log(array.indexOf(numToSearch));
  }

  function addMany(array, command) {
    currentCommand = command.split(' ');
    addAtIndex = Number(currentCommand[1]);
    let numbersToAdd = currentCommand.splice(2).map(Number);
    return array.splice(addAtIndex, 0, ...numbersToAdd);

  }

  function add(array, command) {
    currentCommand = command.split(' ');
    addAtIndex = Number(currentCommand[1]);
    let numberToAdd = Number(currentCommand[2]);
    return array.splice(addAtIndex, 0, numberToAdd);
  }
}
manipulateArray([1, 2, 4, 5, 6, 7], ["add 1 8", "contains 1", "contains -3", "print"]);