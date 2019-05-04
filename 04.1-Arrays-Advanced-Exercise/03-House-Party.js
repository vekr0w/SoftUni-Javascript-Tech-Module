function houseParty(input) {

  let firstMap = new Map();

  for (let i = 0; i < input.length; i++) {
    const element = input[i].split(' ')
    let name = element[0];
    if (element.length == 3) {
      if (!firstMap.has(name)) {
        firstMap.set(name, 'is going!')
      } else {
        console.log(`${name} is already in the list!`);
      }
    } else {
      if (firstMap.has(name)) {
        firstMap.delete(name);
      } else {
        console.log(`${name} is not in the list!`);
      }
    }
  }

  let peopleGoing = Array.from(firstMap.keys())
  peopleGoing.forEach(element => {
    console.log(element);
  });

}
houseParty([
  'Allie is going!',
  'George is going!',
  'John is not going!',
  'George is not going!'
])


/*
"{name} is going!"
"{name} is not going!"

If you receive the first type of input, you have to add the person if he/she is not in the list
(If he/she is in the list print on the console: "{name} is already in the list!").
If you receive the second type of input, you have to remove the person if he/she is in the list
(if not print: "{name} is not in the list!"). At the end print all the guests.
*/