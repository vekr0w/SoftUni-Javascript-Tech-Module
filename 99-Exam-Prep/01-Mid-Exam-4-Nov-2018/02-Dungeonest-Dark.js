function dungeon(input) {

  let health = 100;
  let coins = 0;
  let roomConter = 0;

  let data = input[0].split('|');

  for (let i = 0; i < data.length; i++) {
    roomConter++;
    const commands = data[i].split(' ');
    let roomContent = commands[0];
    let number = +commands[1];

    if (roomContent === 'potion') {
      let temp = health;
      health += number;
      if (health > 100) {
        console.log(`You healed for ${100 - temp} hp.`);
        health = 100;
      } else {
        console.log(`You healed for ${number} hp.`);
      }
      console.log(`Current health: ${health} hp.`);
    }

    if (roomContent === 'chest') {
      coins += number;
      console.log(`You found ${number} coins.`);

    }
    if (roomContent !== 'chest' && roomContent !== 'potion') {
      let monster = roomContent;
      health -= number;
      if (health > 0) {
        console.log(`You slayed ${monster}.`);
      } else {
        console.log(`You died! Killed by ${monster}.`);
        return console.log(`Best room: ${roomConter}`);
      }
    }
  }
  console.log(`You've made it! 
  Coins: ${coins} 
  Health: ${health}`);
}
dungeon(['rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000']);