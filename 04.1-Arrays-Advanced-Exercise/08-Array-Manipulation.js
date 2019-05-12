/*
1. add <index> <element> – adds element at the specified index (elements right from this position inclusively are 
shifted to the right).

2. addMany <index><element 1> <element 2> … <element n> – adds a set of elements at the specified index.

3. contains <element> – prints the index of the first occurrence of the specified element
 (if exists) in the array or -1 if the element is not found.

4. remove <index> – removes the element at the specified index.

5. shift <positions> – shifts every element of the array the number of positions to the left (with rotation).
For example, [1, 2, 3, 4, 5] -> shift 2 -> [3, 4, 5, 1, 2]

6. sumPairs – sums the elements in the array by pairs (first + second, third + fourth, …).
For example, [1, 2, 4, 5, 6, 7, 8] -> [3, 9, 13, 8].

7. print – stop receiving more commands and print the last state of the array.

input: [1, 2, 4, 5, 6, 7],
['add 1 8', 'contains 1', 'contains 3', 'print']

*/


function manipulateArray(arrayNumbers, arrayCommands) {

  for (const currentCommand of arrayCommands) {
    if ((currentCommand.includes('add')) && (currentCommand.length <= 7)) {
      add(arrayNumbers, currentCommand)
    } else if (currentCommand.includes('addMany')) {
      addMany(arrayNumbers, currentCommand)
    } else if (currentCommand.includes('contains')) {
      contains(arrayNumbers, currentCommand)
    } else if (currentCommand.includes('remove')) {
      remove(arrayNumbers, currentCommand)
    } else if (currentCommand.includes('shift')) {
      shift(arrayNumbers, currentCommand)
    } else if (currentCommand.includes('sumPairs')) {
      sumPairs(arrayNumbers, currentCommand)
    } else if (currentCommand.includes('print')) {
      print(arrayNumbers)
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
manipulateArray([1, 2, 4, 5, 6, 7], ["add 1 8", "contains 1", "contains -3", "print"])