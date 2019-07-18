function censoring(text, wordToCensor) {
  let wordLength = wordToCensor.length;
  let replacement = '*';
  while (text.includes(wordToCensor)) {
    text = text.replace(wordToCensor, replacement.repeat(wordLength));
  }
  console.log(text);
}
censoring("A small sentence with some words", "small");