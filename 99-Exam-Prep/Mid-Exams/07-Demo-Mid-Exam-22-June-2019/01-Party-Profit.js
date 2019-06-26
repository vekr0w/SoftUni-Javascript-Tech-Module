function partyProfit(input) {

  let partySize = Number(input[0]);
  let daysCount = Number(input[1]);
  let coinsCount = 0;

  for (let i = 1; i <= daysCount; i++) {
    let everyThirdDay = i % 3 === 0;
    let everyFifthDay = i % 5 === 0;
    let everyTenthDay = i % 10 === 0;
    let everyFifteenthDay = i % 15 === 0;

    if (everyTenthDay) {
      partySize -= 2;
    }
    if (everyFifteenthDay) {
      partySize += 5;
    }
    coinsCount += 50;
    coinsCount -= partySize * 2;

    if (everyThirdDay) {
      coinsCount -= partySize * 3;
    }

    if (everyFifthDay) {
      coinsCount += 20 * partySize;
      if (everyThirdDay) {
        coinsCount -= partySize * 2;
      }
    }
  }

  let coinsPerMember = Math.floor(coinsCount / partySize);
  console.log(`${partySize} companions received ${coinsPerMember} coins each.`);
}
partyProfit(['15', '30']);