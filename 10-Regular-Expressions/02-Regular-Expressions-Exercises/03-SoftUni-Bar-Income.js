function barIncome(input) {
  let totalIncome = 0;
  input.forEach(element => {
    const validator = /%(?<customer>[A-Z][a-z]+)%<(?<product>\w+)>\|(?<count>[0-9]+)\|(?<price>[0-9]+\.?[0-9]*)\$/gm;
    let currentData = validator.exec(element);
    if (currentData) {
      let customerName = currentData.groups.customer;
      let currentProduct = currentData.groups.product;
      let currentPrice = Number(currentData.groups.price) * Number(currentData.groups.count);
      //console.log(`Client Name: ${customerName} Product Name: ${currentProduct} Money Spent: ${currentPrice}`);
      totalIncome += currentPrice;
      console.log(`${customerName}: ${currentProduct} - ${currentPrice.toFixed(2)}`);
    }
  });
  console.log(`Total income: ${totalIncome.toFixed(2)}`);
}
barIncome(
  ['%InvalidName%<Croissant>|2|10.3$',
    '%Peter%<Gum>1.3$',
    '%Maria%<Cola>|1|2.4',
    '%Valid%<Valid>valid|10|valid20$',
    'end of shift']
);