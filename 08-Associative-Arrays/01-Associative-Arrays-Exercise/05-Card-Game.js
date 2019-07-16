function cardGame(input) {

  let cardPowers = {
    '2': 2,
    '3': 3,
    '4': 4,
    '5': 5,
    '6': 6,
    '7': 7,
    '8': 8,
    '9': 9,
    '10': 10,
    'J': 11,
    'Q': 12,
    'K': 13,
    'A': 14
  };
  let cardTypes = {
    'S': 4,
    'H': 3,
    'D': 2,
    'C': 1
  };

  let players = {};

  for (const line of input) {
    let [name, cards] = line.split(': ');
    cards = cards.split(', ');
    let uniqueCards = new Set(cards);

    uniqueCards = [...uniqueCards];
    if (!players.hasOwnProperty(name)) {
      players[name] = uniqueCards;
    } else {
      let currentCards = players[name].concat(uniqueCards);
      uniqueCards = new Set(currentCards);
      players[name] = [...uniqueCards];
    }
  }

  for (let name in players) {
    let deck = players[name];
    let sum = 0;
    for (const card of deck) {
      let tokens = card.split('');

      if (tokens.length === 2) {
        sum += calculateCardPower(tokens[0], tokens[1]);
      } else {
        sum += calculateCardPower(tokens[0] + tokens[1], tokens[2]);
      }

    }
    console.log(`${name}: ${sum}`);
  }

  function calculateCardPower(power, type) {
    let cardPowerMultiplier = cardPowers[power];
    let cardTypeMultiplier = cardTypes[type];

    return cardPowerMultiplier * cardTypeMultiplier;
  }
}
cardGame(
  [
    'Peter: 2C, 4H, 9H, AS, QS',
    'Tomas: 3H, 10S, JC, KD, 5S, 10S',
    'Andrea: QH, QC, QS, QD',
    'Tomas: 6H, 7S, KC, KD, 5S, 10C',
    'Andrea: QH, QC, JS, JD, JC',
    'Peter: JD, JD, JD, JD, JD, JD'
  ]
);