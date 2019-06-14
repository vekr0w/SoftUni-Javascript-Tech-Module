function returnSumOfPreviousK(sequence, numberK) {

  const n = sequence;
  const k = numberK;
  const dataToPrint = [1];

  for (let i = 0; i < n - 1; i++) {
    let sum = 0;
    let iterator = 0;
    let j = i;
    while (iterator < k) {
      const element = dataToPrint[j];
      if (Number(element)) {
        sum += element;
      }

      j--;
      iterator++;
    }

    dataToPrint.push(sum);

  }

  console.log(dataToPrint.join(' '));

}
returnSumOfPreviousK(6, 3);