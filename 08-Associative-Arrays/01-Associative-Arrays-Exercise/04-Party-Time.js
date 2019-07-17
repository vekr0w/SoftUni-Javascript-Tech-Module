function sortGuests(input) {

  let data = input.join(' ').split(' PARTY ');
  let guestList = data.shift().split(' ');
  let incomingGuests = data.shift().split(' ');

  let sortedGuestList = {
    vip: [],
    regular: []
  };

  for (const guest of guestList) {
    if (Number(guest[0])) {
      sortedGuestList.vip.push(guest);
    } else {
      sortedGuestList.regular.push(guest);
    }
  }

  for (let incGuest of incomingGuests) {

    if (Number(incGuest[0])) {
      let vipList = sortedGuestList.vip;
      let indexOfIncGuest = vipList.indexOf(incGuest);
      vipList.splice(indexOfIncGuest, 1);
    } else {
      let regularList = sortedGuestList.regular;
      let indexOfIncGuest = regularList.indexOf(incGuest);
      regularList.splice(indexOfIncGuest, 1);
    }
  }

  let guestsLeft = sortedGuestList.vip.length + sortedGuestList.regular.length;
  console.log(guestsLeft);
  console.log(sortedGuestList.vip.join('\n'));
  console.log(sortedGuestList.regular.join('\n'));
}
sortGuests(
  ['7IK9Yo0h',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc',
    'tSzE5t0p',
    'PARTY',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc'
  ]


);