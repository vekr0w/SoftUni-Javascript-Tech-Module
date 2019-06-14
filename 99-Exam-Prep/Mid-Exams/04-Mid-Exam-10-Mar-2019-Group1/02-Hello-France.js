function helloFrance(input) {

  let data = input[0].split('|');
  let initialBudget = Number(input[1]);
  let itemsBought = [];
  let budget = initialBudget;

  for (let i = 0; i < data.length; i++) {
    let [type, cost] = data[i].split('->');
    cost = Number(cost);
    if (type === 'Clothes' && cost <= 50 && budget >= cost) {
      itemsBought.push(cost);
      budget -= cost;
    }
    if (type === 'Shoes' && cost <= 35 && budget >= cost) {
      itemsBought.push(cost);
      budget -= cost;
    }
    if (type === 'Accessories' && cost <= 20.50 && budget >= cost) {
      itemsBought.push(cost);
      budget -= cost;
    }
  }
  itemsBought = itemsBought.map(item => item += item * 0.40);
  sum = itemsBought.reduce(function(a, b) { return a + b; }, 0);
  sum += budget;
  let profit = sum - initialBudget;
  let itemsToPrint = itemsBought.map(item => item.toFixed(2)).join(' ');
  console.log(itemsToPrint);
  console.log(`Profit: ${profit.toFixed(2)}`);
  if (sum >= 150) {
    console.log(`Hello, France!`);
  } else {
    console.log(`Time to go.`);
  }
}
helloFrance(
  ['Clothes->43.30|Shoes->25.25|Clothes->36.52|Clothes->20.90|Accessories->15.60',
    '120'
  ]
);

/*
Clothes <= 50.00
Shoes <= 35.00
Accessories <= 20.50
*/