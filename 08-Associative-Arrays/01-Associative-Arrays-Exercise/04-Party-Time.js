function sortGuests(input) {

  let data = input.join(' ').split(' PARTY ');
  let guestList = data.shift().split(' ');
  let incomingGuests = data.shift().split(' ');
  for (let i = 0; i < incomingGuests.length; i++) {
    const currentGuest = incomingGuests[i];
    const currentGuestIndex = guestList.indexOf(currentGuest);
    if (currentGuestIndex != -1) {
      guestList.splice(currentGuestIndex, 1);
    }
  }
  guestList.sort();
  console.log(guestList.length);
  for (const guest of guestList) {
    console.log(guest);
  }
}
sortGuests(
  ['7IK9Yo0h',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc',
    'tSzE5t0p',
    '7IK9Yo0h',
    '8IK9Yo0h',
    'GIK9Yo0h',
    'PARTY',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc'
  ]

);