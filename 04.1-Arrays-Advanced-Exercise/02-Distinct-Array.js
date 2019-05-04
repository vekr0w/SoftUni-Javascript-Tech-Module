function removeRepeatingElements(input) {

  let dataToPrint = [...new Set(input)];
  console.log(dataToPrint.join(' '));

}
removeRepeatingElements([7, 8, 9, 7, 2, 3, 4, 1, 2]);