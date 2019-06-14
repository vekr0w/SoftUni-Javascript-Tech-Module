function arrayManipulation(input) {

  let data = input
    .shift()
    .split(' ')
    .map(Number);

  for (let i = 0; i < input.length; i++) {
    let commands = input[i].split(' ');
    let command = commands.shift();
    let valueOne = Number(commands.shift());
    let valueTwo = Number(commands.shift());

    switch (command) {
      case 'Add':
        data.push(valueOne);
        break;
      case 'Remove':
        data = remove(data, valueOne);
        break;
      case 'RemoveAt':
        data.splice(valueOne, 1);
        break;
      case 'Insert':
        data.splice(valueTwo, 0, valueOne);
        break;

      default:
        break;
    }
  }

  console.log(data.join(' '));

  function remove(array, element) {
    return array.filter(el => el !== element);
  }
}
arrayManipulation([
  "4 19 2 53 6 43",
  "Add 3",
  "Remove 2",
  "RemoveAt 1",
  "Insert 8 3"
]);

/*

Add {number}: add a number to the end of the array
Remove {number}: remove number from the array
RemoveAt {index}: removes number at a given index
Insert {number} {index}: inserts a number at a given index

*/