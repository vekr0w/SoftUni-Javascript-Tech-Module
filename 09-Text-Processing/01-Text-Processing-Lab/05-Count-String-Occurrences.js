function countOccurrences(text, wordToSearch) {
  const countOccurrences = (arr, val) => arr.reduce((a, v) => (v === val ? a + 1 : a), 0);
  let data = text.split(' ');
  console.log(countOccurrences(data, wordToSearch));
}
countOccurrences("This is a word and it also is a sentence",
  "is"
);