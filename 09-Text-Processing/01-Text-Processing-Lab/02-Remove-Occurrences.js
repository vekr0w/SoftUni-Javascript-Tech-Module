function removeOccurrences(wordToRmove, text) {
  while (text.includes(wordToRmove)) {
    text = text.replace(wordToRmove, '');
  }
  console.log(text);
}
removeOccurrences('ice kicegiciceeb')