function task(input) {

  const add = (personName, health, energy) => {
    if (!personHealthData.hasOwnProperty(personName)) {
      personHealthData[personName] = health;
    } else {
      personHealthData[personName] += health;
    }

    if (!personEnergyData.hasOwnProperty(personName)) {
      personEnergyData[personName] = energy;
    }
    // else {
    //   personEnergyData[personName] += health;

    // }
  };
  const attack = (attackerName, defenderName, damange) => {
    let isAttackerPresent = personHealthData.hasOwnProperty(attackerName);
    let isDefenderPresent = personHealthData.hasOwnProperty(defenderName);

    if (isAttackerPresent && isDefenderPresent) {
      personHealthData[defenderName] -= damange;
      personEnergyData[attackerName] -= 1;
    }

    if (personHealthData[defenderName] <= 0) {
      console.log(`${defenderName} was disqualified!`);
      delete personHealthData[defenderName];
      delete personEnergyData[defenderName];

    }

    if (personEnergyData[attackerName] <= 0) {
      console.log(`${attackerName} was disqualified!`);
      delete personHealthData[attackerName];
      delete personEnergyData[attackerName];
    }
  };
  const del = (username) => {
    if (username === 'All') {
      personEnergyData = {};
      personHealthData = {};
    }
    if (personHealthData.hasOwnProperty(username)) {
      delete personHealthData[username];
      delete personEnergyData[username];
    }

  };

  let personHealthData = {};
  let personEnergyData = {};


  for (let line of input) {
    if (line === 'Results') {
      break;
    }

    let [command, firstData, secondData, thirdData] = line.split(':');
    switch (command) {
      case 'Add':
        secondData = Number(secondData);
        thirdData = Number(thirdData);
        add(firstData, secondData, thirdData);
        break;
      case 'Attack':
        thirdData = Number(thirdData);
        attack(firstData, secondData, thirdData);
        break;
      case 'Delete':
        del(firstData);
        break;

      default:
        break;
    }
    //end of forof
  }

  let peopleCount = Object.keys(personHealthData).length;
  console.log(`People count: ${peopleCount}`);
  //`${personName} - ${health} - ${energy}`

  let sortedNameHealth = Object.entries(personHealthData).sort((a, b) => {
    return b[1] - a[1] || a[0].localeCompare(b[0]);
  });

  let sortedEnergy = Object.entries(personEnergyData).sort((a, b) => {
    return b[1] - a[1];
  });


  for (let i = 0; i < sortedNameHealth.length; i++) {
    const [name, health] = sortedNameHealth[i];
    const [empty, energy] = sortedEnergy[i];
    console.log(`${name} - ${health} - ${energy}`);
  }

  //end of main function
}
task(
  ['Add:Bonnie:3000:5',
    'Add:Johny:4000:10',
    'Attack:Johny:Bonnie:400',
    'Add:Chicken:1000:1',
    'Add:Rabbit:3000:5',
    'Add:Buggy:1259:10',
    'Attack:Chicken:Rabbit:1000',
    'Results'
  ]


);

/*
"Add:{personName}:{health}:{energy}":
Add the person, his/her health and energy to your records. If person with the given name already exists,
just increase the health of the person with the current one that is given.

"Attack:{attackerName}:{defenderName}:{damage}":
Check if both people exist and if they do, reduce the defender’s health with the damage given.
If the defender’s health reaches 0 or less, the person is disqualified, and you need to remove
him/her from your records and print the following message:
"{defenderName} was disqualified!"
You also have to reduce the attacker’s energy by 1. If it reaches 0, he/she is disqualified,
and you need to remove him/her from your records and print the following message:
"{attackerName} was disqualified!"

"Delete:{username}":
Delete all records of the given user, if he exists. If "All" is given as username - delete all records you have.

*/