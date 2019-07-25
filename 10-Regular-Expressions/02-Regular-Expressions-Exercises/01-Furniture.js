function furnitureCost(input) {
  console.log('Bought furniture:');
  let totalCost = 0;
  input.forEach(element => {
    const pattern = />>(?<name>[A-Za-z]+)<<(?<price>[0-9]+[.]?[0-9]*)!(?<quantity>[0-9]+)/g;
    let result = pattern.exec(element);
    if (result) {
      console.log(result.groups.name);
      let currentCost = Number(result.groups.price) * (result.groups.quantity);
      totalCost += currentCost;
    }
  });
  console.log(`Total money spend: ${totalCost.toFixed(2)}`);
}
furnitureCost(
  ['>>Sofa<<312.23!3', '>>TV<<300!5', '>Invalid<<!5', 'Purchase']
);