function easterGifts(input) {

  let gifts = input.shift().split(' ');

  for (let i = 0; i < input.length; i++) {

    if (input[i] === 'No Money') {
      break;
    }

    let [command, gift, index] = input[i].split(' ');
    index = Number(index);

    while (command === 'OutOfStock' && gifts.includes(gift)) {
      let giftIndex = gifts.indexOf(gift);
      gifts.splice(giftIndex, 1, 'none');

    }
    if (command === 'Required' && gifts[index] !== undefined) {
      gifts.splice(index, 1, gift);

    }

    if (command === 'JustInCase') {
      gifts.pop();
      gifts.push(gift);

    }

  }

  while (gifts.includes('none')) {
    let indexOfNone = gifts.indexOf('none');
    gifts.splice(indexOfNone, 1);
  }

  console.log(gifts.join(' '));

}
easterGifts(
  ['Sweets Cozonac Clothes Flowers Wine Clothes Eggs Clothes',
    'Required Paper 8',
    'OutOfStock Clothes',
    'Required Chocolate 2',
    'JustInCase Hat',
    'OutOfStock Cable',
    'No Money'
  ]);