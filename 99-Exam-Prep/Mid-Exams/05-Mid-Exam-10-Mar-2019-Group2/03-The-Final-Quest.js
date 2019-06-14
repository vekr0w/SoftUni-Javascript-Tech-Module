function theFinalQuest(input) {

  let wordsCollection = input[0].split(' ');

  for (let i = 1; i < input.length; i++) {
    let [command, firstElement, secondElement] = input[i].split(' ');
    if (command == 'Stop') {
      console.log(wordsCollection.join(' '));
      break;
    }

    if (command === 'Delete') {
      firstElement = Number(firstElement) + 1;
      if (wordsCollection[firstElement] !== undefined) {
        wordsCollection.splice(firstElement, 1);
      }
    }

    if (command === 'Swap') {
      let areWordsIncluded =
        wordsCollection.includes(firstElement) &&
        wordsCollection.includes(secondElement);
      if (areWordsIncluded) {
        let firstElemIndex = wordsCollection.indexOf(firstElement),
          secondElemIndex = wordsCollection.indexOf(secondElement);
        [wordsCollection[firstElemIndex], wordsCollection[secondElemIndex]] = [wordsCollection[secondElemIndex], wordsCollection[firstElemIndex]];

      }
    }

    if (command === 'Put') {
      secondElement = Number(secondElement) - 1;
      if (wordsCollection[secondElement] !== undefined) {

        wordsCollection.splice(secondElement, 0, firstElement);
      }
    }
    if (command === 'Sort') {
      wordsCollection.reverse();
    }

    if (command === 'Replace') {
      if (wordsCollection.includes(secondElement)) {
        let indexOfSecondElem = wordsCollection.indexOf(secondElement);
        wordsCollection[indexOfSecondElem] = firstElement;
      }
    }
  }
}
theFinalQuest(
  ['Congratulations! You last also through the have challenge!',
    'Swap have last',
    'Replace made have',
    'Delete 2',
    'Put it 4',
    'Stop'
  ]
);