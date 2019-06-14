function santaList(input) {

  let initialList = input[0].split('&');

  for (let i = 1; i < input.length; i++) {
    let element = input[i].split(' ');
    let command = element[0];
    let name = element[1];

    if (command === 'Finished!') {
      break;
    }
    if (command === 'Bad' && !initialList.includes(name)) {
      initialList.unshift(name);
    }

    if (command === 'Good' && initialList.includes(name)) {
      let nameIndex = initialList.indexOf(name);
      initialList.splice(nameIndex, 1);
    }

    if (command === 'Rename') {
      let spreadNames = name.split(' ');
      let newName = element[2];
      if (initialList.includes(name)) {
        let oldNameIndex = initialList.indexOf(name);
        initialList.splice(oldNameIndex, 1, newName);
      }
    }

    if (command === 'Rearrange' && initialList.includes(name)) {
      let nameIndex = initialList.indexOf(name);
      let nameToAdd = initialList.splice(nameIndex, 1);
      initialList.push(...nameToAdd);
    }
  }
  console.log(initialList.join(', '));
}
//santaList([
//  'Peter&George&Mike',
//  'Bad Joshua',
//  'Good Peter',
//  'Finished!'
//]);

/*
[ 'Joshua', 'Aaron', 'Walt', 'Dustin', 'William' ]
[ 'Joshua', 'Aaron',  'Dustin', 'William' ]
[ Jon,'Joshua', 'Aaron',  'Dustin', 'William' ]
[ Jon,'Joshua', 'Paul',  'Dustin', 'William' ]
[ 'Joshua', 'Paul',  'Dustin', 'William' ,Jon]

*/
santaList([
  'Joshua&Aaron&Walt&Dustin&William',
  'Good Walt',
  'Bad Jon',
  'Rename Aaron Paul',
  'Rearrange Jon'
]);