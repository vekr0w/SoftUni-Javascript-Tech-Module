function feedTheAnimals(input) {
  let animalRationData = {};
  let areaAnimalData = {};
  const add = (animalName, ration, area) => {
    ration = Number(ration);
    if (!animalRationData.hasOwnProperty(animalName)) {
      animalRationData[animalName] = ration;
    } else {
      animalRationData[animalName] += ration;
    }

    if (!areaAnimalData.hasOwnProperty(area)) {
      areaAnimalData[area] = [animalName];

    } else {
      if (!areaAnimalData[area].includes(animalName)) {
        areaAnimalData[area].push(animalName);
      }
    }

  };
  const feed = (animalName, ration, area) => {
    ration = Number(ration);
    if (animalRationData.hasOwnProperty(animalName)) {
      animalRationData[animalName] -= ration;
      if (animalRationData[animalName] < 0) {
        delete animalRationData[animalName];
        let tempArr = areaAnimalData[area];
        let indexOfAnimal = tempArr.indexOf(animalName);
        tempArr.splice(indexOfAnimal, 1);
        console.log(`${animalName} was successfully fed`);

      }
    }
  };

  for (let line of input) {
    if (line === 'Last Info') {
      break;
    }

    let [command, animalName, ration, area] = line.split(':');

    if (command === 'Add') {
      add(animalName, ration, area);
    } else {
      feed(animalName, ration, area);
    }
  }

  console.log(`Animals:`);
  let sortedAnimalRation = Object.entries(animalRationData)
    .sort((a, b) => {
      return b[1] - a[1] || a[0].localeCompare(b[0]);
    })
    .forEach(([name, ration]) => {
      console.log(`${name} -> ${ration}g`);
    });
  console.log(`Areas with hungry animals:`);
  let sortedAreas = Object.entries(areaAnimalData)
    .sort((a, b) => {
      let firstLength = a[1].length;
      let secondLength = b[1].length;
      return secondLength - firstLength;
    })
    .forEach(([area, animals]) => {
      if (animals.length > 0) {
        console.log(`${area} : ${animals.length}`);
      }
    });
    
}
feedTheAnimals(
  ['Add:Maya:7600:WaterfallArea',
    'Add:Bobbie:6570:DeepWoodsArea',
    'Add:Adam:4500:ByTheCreek',
    'Add:Jamie:1290:RiverArea',
    'Add:Gem:8730:WaterfallArea',
    'Add:Maya:1230:WaterfallArea',
    'Add:Jamie:560:RiverArea',
    'Feed:Bobbie:6300:DeepWoodsArea',
    'Feed:Adam:4650:ByTheCreek',
    'Feed:Jamie:2000:RiverArea',
    'Add:Test:7600:Test',
    'Add:Bobbie:6570:DeepWoodsArea',
    'Add:Adam:4500:ByTheCreek',
    'Add:Jamie:1290:RiverArea',
    'Add:Gem:8730:WaterfallArea',
    'Add:Maya:1230:WaterfallArea',
    'Add:Jamie:560:RiverArea',
    'Feed:Test:6300:Test',
    'Feed:Test:6300:Test',
    'Feed:Adam:4650:ByTheCreek',
    'Feed:Jamie:2000:RiverArea',
    'Last Info']

);