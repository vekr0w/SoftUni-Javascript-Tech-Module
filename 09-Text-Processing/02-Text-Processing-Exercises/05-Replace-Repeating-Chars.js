function replaceRepeatingChars(input) {

  const charsData = input.split('');
  let filteredChars = [];

  for (let i = 0; i < charsData.length; i++) {
    const element = charsData[i];
    let lastFilteredChar = filteredChars[filteredChars.length - 1];
    if (element !== lastFilteredChar) {
      filteredChars.push(element);
    }
  }
  console.log(filteredChars.join(''));
}
replaceRepeatingChars('aaaaabbbbbcdddeeeedssaa');