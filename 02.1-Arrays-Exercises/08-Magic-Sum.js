function magicSum(inputArr) {
  let targetNum = Number(inputArr[1]);
  let string = inputArr[0];
  let dataArr = string.split(' ');
  let dataOutput = [];

  for (let i = 0; i < dataArr.length; i++) {

    const firstElem = Number(dataArr[i]);
    for (let k = 1; k < dataArr.length; k++) {
      const secondElem = Number(dataArr[k]);
      let sumOfElems = firstElem + secondElem;
      if (sumOfElems === targetNum &&
        !dataOutput.includes(firstElem) &&
        !dataOutput.includes(secondElem)) {

        dataOutput.push(firstElem, secondElem);
        //console.log(`${firstElem} ${secondElem}`);
        //firstElem !== secondElem
      }
    }
  }

  for (let o = 0; o < dataOutput.length; o += 2) {
    console.log(`${dataOutput[o]} ${dataOutput[o+1]}`);
  }

}
magicSum(['1 2 3 4 5 6', '6']);