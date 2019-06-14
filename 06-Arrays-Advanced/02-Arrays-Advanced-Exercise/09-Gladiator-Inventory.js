function gladiatorInventory(input) {

  let currentEquipment = input.shift().split(' ')

  for (const command of input) {

    item = command.split(' ').pop()

    if (command.includes('Buy')) {
      buy(currentEquipment, item)
    } else if (command.includes('Trash')) {
      trash(currentEquipment, item)
    } else if (command.includes('Repair')) {
      repair(currentEquipment, item)
    } else if (command.includes('Upgrade')) {
      upgrade(currentEquipment, item)
    }
  }


  function upgrade(equipment, itemUpg) {
    let temp = itemUpg.split('-')
    item = temp[0];
    upgrade = temp[1];
    if (equipment.includes(item)) {
      let indexToAddUpgrade = equipment.indexOf(item);
      let upgradedItemToAdd = `${item}:${upgrade}`
      equipment.splice(indexToAddUpgrade + 1, 0, upgradedItemToAdd)
    }
  }

  function repair(equipment, item) {
    if (equipment.includes(item)) {
      let indexToRemoveFrom = equipment.indexOf(item)
      removed = equipment.splice(indexToRemoveFrom, 1);
      equipment.push(...removed);
    }
  }

  function trash(equipment, item) {
    if (equipment.includes(item)) {
      let indexToRemoveFrom = equipment.indexOf(item)
      equipment.splice(indexToRemoveFrom, 1);
    }
  }

  function buy(equipment, item) {
    if (!equipment.includes(item))
      return equipment.push(item)
  }

  console.log(currentEquipment.join(' '));

}
gladiatorInventory(['SWORD Shield Spear',
  'Trash Bow',
  'Repair Shield',
  'Upgrade Helmet-V'
])

/*
Buy {equipment}
Trash {equipment}
Repair {equipment}
Upgrade {equipment}-{upgrade}
If you receive Buy command, you should add the equipment at last position in the inventory, but only if it isn't bought already.
If you receive Trash command, delete the equipment if it exists.
If you receive Repair command, you should Repair the equipment if it exists and place it on last position.
If you receive Upgrade command, you should check if the equipment exists and insert after it the upgrade in the
following format: "{equipment}:{upgrade}";

*/