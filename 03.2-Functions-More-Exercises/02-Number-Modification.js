function modifyNum(input) {

  let data = input
    .toString()
    .split('')
    .map(Number);

  function checkAvarage(num) {
    let temp = 0;
    for (let i = 0; i < num.length; i++) {
      const element = num[i];
      temp += element;
    }
    for (let j = 0; j < num.length; j++) {
      if (temp / num.length < 5)
        num.push(9);
      else
        return num
      temp += 9;
    }
  }
  console.log(checkAvarage(data).join(''));

}
modifyNum(101);