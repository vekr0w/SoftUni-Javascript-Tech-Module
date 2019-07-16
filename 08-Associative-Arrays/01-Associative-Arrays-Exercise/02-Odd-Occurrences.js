function returnOddOccurrences(input) {
  const countOccurrences = (arr, val) => arr.reduce((a, v) => (v === val ? a + 1 : a), 0);
  let data = input.toLowerCase().split(' ');

  let filteredData = [];
  for (let i = 0; i < data.length; i++) {
    let currentWord = data[i];
    let occurances = countOccurrences(data, currentWord);
    let isWordIncluded = !filteredData.includes(currentWord);
    if (occurances % 2 !== 0 && isWordIncluded) {
      filteredData.push(currentWord);
    }
  }
  console.log(filteredData.join(' '));
}
returnOddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');