function findWord(inputWord, inputText) {
  let word = inputWord.toLowerCase();
  let text = inputText.toLowerCase();
  let output = text.includes(word) ? inputWord : `${inputWord} not found!`;
  console.log(output);
}
findWord(
  'javascript',
  'JavaScript is the best programming language'
);