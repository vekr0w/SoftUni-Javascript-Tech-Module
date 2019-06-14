function fillTrain(input) {

  let train = input
    .shift()
    .split(' ')
    .map(Number);
  let wagonMaxCapacity = Number(input.shift());

  for (let i = 0; i < input.length; i++) {
    const element = input[i];

    if (!Number(element)) {
      let temp = input[i].split(' ');
      let newWagon = Number(temp[1]);
      train.push(newWagon);

    } else {
      let newPassangers = Number(element)
      for (let j = 0; j < train.length; j++) {
        let currentWagon = train[j];
        let check = (newPassangers + currentWagon) <= wagonMaxCapacity;
        if (check) {
          train[j] = newPassangers + currentWagon;
          break;
        }
      }
    }
  }

  console.log(train.join(' '));

}
fillTrain([
  '32 54 21 12 4 0 23',
  '75',
  'Add 10',
  'Add 0',
  '30',
  '10',
  '75'
])