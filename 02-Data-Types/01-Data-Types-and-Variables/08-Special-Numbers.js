function isNumSpecial(input) {

  for (let i = 1; i <= input; i++) {
    if (i < 10) {
      if (i === 5 || i === 7) {
        console.log(`${i} -> True`);
      } else {
        console.log(`${i} -> False`);
      }
    }

    if (i >= 10) {
      let num = i.toString();
      let sum = 0;
      for (let k = 0; k < num.length; k++) {
        const element = num[k];
        sum += Number(element);
      }

      if (sum === 5 || sum === 7 || sum === 11) {
        console.log(`${i} -> True`);
      } else {
        console.log(`${i} -> False`);
      }
    }
  }
}
isNumSpecial(15);