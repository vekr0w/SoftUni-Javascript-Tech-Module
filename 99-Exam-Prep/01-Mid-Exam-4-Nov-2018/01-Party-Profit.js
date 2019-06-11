function partyProfit(input) {
  let partySize = Number(input[0]);
  let days = Number(input[1]);
  let coins = 0;

  for (let i = 1; i <= days; i++) {
    let isDayTen = i % 10 === 0;
    let isDayFifteen = i % 15 === 0;
    let isDayMotivational = i % 3 === 0;
    let isDayMonsterSlay = i % 5 === 0;

    if (isDayTen) {
      partySize -= 2;
    }
    if (isDayFifteen) {
      partySize += 5;
    }
    coins += 50;
    coins -= partySize * 2;

    if (isDayMotivational) {
      coins -= partySize * 3;
    }

    if (isDayMonsterSlay) {
      coins += partySize * 20;
      if (isDayMotivational) {
        coins -= partySize * 2;
      }
    }

  }

  let coinsPerMember = Math.floor(coins / partySize);
  console.log(`${partySize} companions received ${coinsPerMember} coins each.`);
}
partyProfit([3, 5]);