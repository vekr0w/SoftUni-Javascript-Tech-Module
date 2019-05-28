function questJournal(input) {

  let myJournal = input[0].split(', ');
  for (let i = 1; i < input.length; i++) {
    const element = input[i].split(' - ')
    if (element === 'Retire!') {
      break
    }
    let command = element[0];
    let quest = element[1];

    if (command === 'Start' && !myJournal.includes(quest)) {
      myJournal.push(quest);
    }
    if (command === 'Complete' && myJournal.includes(quest)) {
      let index = myJournal.indexOf(quest);
      myJournal.splice(index, 1);
    }
    if (command === 'Side Quest') {
      //Side Quest - If else:Switch
      let questSplit = quest.split(':');
      let initialQuest = questSplit[0];
      let sideQuest = questSplit[1];
      if (myJournal.includes(initialQuest) && !myJournal.includes(sideQuest)) {
        let questIndex = myJournal.indexOf(initialQuest);
        myJournal.splice(questIndex + 1, 0, sideQuest);
      }
    }

    if (command === 'Renew' && myJournal.includes(quest)) {
      questIndex = myJournal.indexOf(quest);
      let changePosition = myJournal.splice(questIndex, 1);
      myJournal.push(changePosition);
    }
  }
  console.log(myJournal.join(', '));

}
//questJournal([
//  'Hello World, For loop, If else',
//  'Start - While loop',
//  'Complete - For loop',
//  'Retire!',
//])

questJournal([
  'Hello World, If else',
  'Complete - Homework',
  'Side Quest - If else:Switch',
  'Renew - Hello World',
  'Retire!',

])