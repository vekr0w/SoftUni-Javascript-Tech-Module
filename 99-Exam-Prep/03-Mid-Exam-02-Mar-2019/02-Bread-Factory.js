function breadFactory(input) {

  let energy = 100;
  let coins = 100;
  let events = input[0].split('|');


  for (let i = 0; i < events.length; i++) {
    let [command, number] = events[i].split('-');
    //parseToNum
    number = Number(number);

    let isRest = command === 'rest';
    if (isRest) {
      let energyGained = rest(energy, number);
      if (energyGained > 0) {
        energy += energyGained;
      }
      console.log(`You gained ${energyGained} energy.`);
      console.log(`Current energy: ${energy}.`);
    }
    let isOrder = command === 'order';
    if (isOrder) {
      let orderOutcome = order(energy, number);
      if (orderOutcome !== 'You had to rest!') {
        console.log(orderOutcome);
        coins += number;
        energy -= 30;
      } else {
        console.log(orderOutcome);
        energy += 50;
      }
    }
    let isIngredient = !isRest && !isOrder;
    if (isIngredient) {
      let ingredient = command;
      let areCoinsEnough = coins - number > 0;
      if (areCoinsEnough) {
        console.log(`You bought ${ingredient}.`);
        coins -= number;
      } else {
        return console.log(`Closed! Cannot afford ${ingredient}.`);

      }
    }
  }

  console.log(`Day completed!`);
  console.log(`Coins: ${coins}`);
  console.log(`Energy: ${energy}`);

  function order(currentEnrg, number) {
    let energy = currentEnrg - 30;
    if (energy > 0) {
      return `You earned ${number} coins.`;
    } else {
      return `You had to rest!`;
    }
  }

  function rest(currentEnrg, number) {
    let current = currentEnrg;
    let addedEnergy = currentEnrg + number;

    if (addedEnergy <= 100) {
      return number;
    } else {
      return 100 - current;
    }
  }
}
breadFactory(['rest-101|order-20|eggs-120|rest-10']);