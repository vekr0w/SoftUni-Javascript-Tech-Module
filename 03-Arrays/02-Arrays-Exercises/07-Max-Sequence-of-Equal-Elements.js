function maxEqualSequence(input) {

  let maxSequenceLength = -1;
  let indexOfBiggestSequence = 0;

  for (let i = 0; i < input.length; i++) {
    let currentElement = input[i];
    let currentSequenceLength = 1;

    for (let k = i + 1; k < input.length; k++) {
      const nextElement = input[k];

      if (currentElement != nextElement) {
        break;
      }
      currentSequenceLength++;
    }

    if (currentSequenceLength > maxSequenceLength) {
      maxSequenceLength = currentSequenceLength;
      indexOfBiggestSequence = i;
    }

  }

  let elementToPrint = input[indexOfBiggestSequence];
  console.log(`${elementToPrint} `.repeat(maxSequenceLength));


}
maxEqualSequence([0, 1, 1, 5, 2, 2, 6, 3, 3]);