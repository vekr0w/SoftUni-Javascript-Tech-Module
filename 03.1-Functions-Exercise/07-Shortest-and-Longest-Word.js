//shortest and longest
function findWordLengths(inputText) {

  let data = inputText.replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, '').split(' ');
  if (data[data.length - 1] == '') {
    data.pop();
  }
  let shortestWord = '';
  let longestWord = '';
  let temp = Number.MAX_SAFE_INTEGER;

  data.forEach(element => {
    if (element.length < temp) {
      temp = element.length;
      shortestWord = element;
    }
    if (element.length > longestWord.length) {
      longestWord = element;
    }
  });

  console.log(`Longest -> ${longestWord}`);
  console.log(`Shortest -> ${shortestWord}`);

}
findWordLengths('Hello, sad, asd, 41 ')