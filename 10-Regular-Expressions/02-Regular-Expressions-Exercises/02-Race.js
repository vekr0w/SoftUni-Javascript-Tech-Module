function race(input) {

  let participants = input.shift().split(', ');
  let results = {};
  input.forEach(element => {
    const filterNames = /[A-Za-z]/gm;
    const filterScore = /[\d]/g;
    let currentPlayerName = element.match(filterNames).join('');
    if (participants.includes(currentPlayerName)) {
      let currentPlayerScore = element.match(filterScore).map(Number).reduce((a, b) => a + b, 0);
      if (!results[currentPlayerName]) {
        results[currentPlayerName] = currentPlayerScore;
      } else {
        results[currentPlayerName] += currentPlayerScore;
      }
      //console.log(`${currentPlayerName}: ${currentPlayerScore}`);
    }
  });

  let sortedResults = Object.keys(results)
    .sort((a, b) => results[b] - results[a])
    .slice(0, 3);


  console.log(`1st place: ${sortedResults[0]}`);
  console.log(`2nd place: ${sortedResults[1]}`);
  console.log(`3rd place: ${sortedResults[2]}`);

}
race(
  ['George, Peter, Bill, Tom',
    'G4e@55or%6g6!68e!!@',
    'R1@!3a$y4456@',
    'B5@i@#123ll',
    'G@e54o$r6ge#',
    '7P%et^#e5346r',
    'T$o553m&6',
    'end of race']
);