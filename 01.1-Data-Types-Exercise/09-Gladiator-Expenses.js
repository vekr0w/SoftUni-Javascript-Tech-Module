function printRepairCost(lossCount, helmetCost, swordCost, shieldCost, armorCost) {

  let helmetTrashed = 0;
  let swordTrashed = 0;
  let shieldTrashed = 0;
  let armorTrashed = 0;
  let totalCost = 0;

  if (lossCount >= 2) {
    helmetTrashed = Math.floor(lossCount / 2);
    totalCost += helmetTrashed * helmetCost;
  }
  if (lossCount >= 3) {
    swordTrashed = Math.floor(lossCount / 3);
    totalCost += swordTrashed * swordCost;
  }

  if (helmetTrashed > 0 && swordTrashed > 0) {
    shieldTrashed = Math.floor(lossCount / 4);
    totalCost += shieldTrashed * shieldCost;
  }

  if (shieldTrashed >= 2) {
    armorTrashed = Math.floor(shieldTrashed / 2);
    totalCost += armorTrashed * armorCost
  }
  console.log(`Gladiator expenses: ${totalCost.toFixed(2)} aureus`);

}
//printRepairCost(7, 2, 3, 4, 5);
printRepairCost(23, 12.50, 21.50, 40, 200);