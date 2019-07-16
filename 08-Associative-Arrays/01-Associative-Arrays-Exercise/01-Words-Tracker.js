function wordsTracker(input) {

  const countOccurrences = (arr, val) => arr.reduce((a, v) => (v === val ? a + 1 : a), 0);
  let storage = {};
  let worsToFind = input.shift().split(' ');
  for (let i = 0; i < worsToFind.length; i++) {
    const currentWord = worsToFind[i];
    let currentWordOccurrences = countOccurrences(input, currentWord);
    storage[currentWord] = currentWordOccurrences;
  }
  let sortedStorage = Object.entries(storage)
    .sort((a, b) => {
      let [firstWord, firstCount] = a;
      let [secondWord, secondCount] = b;
      return secondCount - firstCount;
    });

for (const [word,occurance] of sortedStorage) {
  console.log(`${word} - ${occurance}`);
}

}
wordsTracker(
  ['this sentence pesho',
    'In',
    'this',
    'sentence',
    'you',
    'have',
    'to',
    'count',
    'the',
    'occurances',
    'of',
    'the',
    'words',
    'this',
    'and',
    'sentence',
    'because',
    'this',
    'is',
    'your',
    'task',
    'pesho',
    'pesho',
    'pesho',
    'pesho']
);