function carWash(input) {

  let totalValue = 0;
  input.forEach(element => {
    switch (element) {
      case 'soap':
        totalValue += 10;
        break;
      case 'water':
        totalValue += totalValue * 0.20;
        break;
      case 'vacuum cleaner':
        totalValue += totalValue * 0.25;
        break;
      case 'mud':
        totalValue -= totalValue * 0.10;
        break;

      default:
        break;
    }
  });

  console.log(`The car is ${totalValue.toFixed(2)}% clean.`);

}
carWash(['soap', 'soap', 'vacuum cleaner', 'mud', 'soap', 'water']);