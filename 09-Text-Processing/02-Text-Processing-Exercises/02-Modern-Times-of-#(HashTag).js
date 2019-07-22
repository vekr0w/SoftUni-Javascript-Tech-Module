function filterText(input) {

  let stringToArray = input.split(' ');
  let filtered = [];
  for (const word of stringToArray) {
    let isWordAcceptable = /^[#a-zA-Z]+$/.test(word);
    if (word.includes('#') && isWordAcceptable) {
      filtered.push(word);
    }
  }
  filtered.forEach(filteredWord => {
    if (filteredWord.length > 1) {
      filteredWord = filteredWord.replace('#', '');
      console.log(filteredWord);
    }
  });
}
filterText(
  'Nowadays everyone uses # to tag a #special word in #socialMedia'
);