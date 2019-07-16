function inventory(input) {

  let allHeroes = [];
  
  class Hero {
    constructor(name, level, items) {
      this.name = name;
      this.level = level;
      this.items = items;
    }
  }

  for (const element of input) {
    let [name, level, items] = element.split(' / ');
    let areThereItems = items != undefined;
    if (areThereItems) {
      items = items.split(', ').sort().join(', ');
    }
    if (Number(level)) {
      level = Number(level);
    }

    if (areThereItems) {
      let hero = new Hero(name, level, items);
      allHeroes.push(JSON.parse(JSON.stringify(hero)));
      
    }
  }

  allHeroes.sort(function (a, b) {
    return a.level - b.level;
  });

  for (const hero of allHeroes) {
    console.log(`Hero: ${hero.name}`);
    console.log(`level => ${hero.level}`);
    console.log(`items => ${hero.items}`);
  }

}
inventory(
  ['Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara']
);