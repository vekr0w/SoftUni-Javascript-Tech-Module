function concert(input) {

  let bandNames = {};
  let bandTimes = {};
  let bandToPrint = input.pop();
  let totalTime = 0;

  const add = (bandName, bandMembers) => {
    let uniqueMembers = new Set(bandMembers.split(', '));
    if (!bandNames.hasOwnProperty(bandName)) {
      bandNames[bandName] = [];
      bandNames[bandName] = [...uniqueMembers];
    } else {
      let allUnique = new Set(bandNames[bandName].concat([...uniqueMembers]));
      bandNames[bandName] = [...allUnique];
    }

  };
  const play = (bandName, time) => {
    time = Number(time);
    totalTime += time;
    if (!bandTimes.hasOwnProperty(bandName)) {
      bandTimes[bandName] = time;
    } else {
      bandTimes[bandName] += time;
    }
  };

  for (let line of input) {
    let [command, bandName, data] = line.split('; ');
    if (command === 'start of concert') {
      break;
    }
    if (command === 'Add') {
      add(bandName, data);
    }
    if (command === 'Play') {
      play(bandName, data);
    }
  }

  console.log(`Total time: ${totalTime}`);

  let sortedByTime = Object.entries(bandTimes)
    .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));
  for (let [bandName, time] of sortedByTime) {
    console.log(`${bandName} -> ${time}`);
  }
  
  console.log(bandToPrint);

  let namesToPrint = bandNames[bandToPrint];
  namesToPrint.forEach(element => {
    console.log(`=> ${element}`);
  });
}
concert(
  ['Add; The Beatles; John Lennon, Paul McCartney',
    'Add; The Beatles; Paul McCartney, George Harrison',
    'Add; The Beatles; George Harrison, Ringo Starr',
    'Play; The Beatles; 3698',
    'Play; The Beatles; 3828',
    'start of concert',
    'The Beatles']
);