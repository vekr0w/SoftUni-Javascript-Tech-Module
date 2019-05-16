function multiplyTable(number) {

  for (let i = 1; i <= 10; i++) {
    const sum = number * i;
    console.log(`${number} X ${i} = ${sum}`);
  }
}
multiplyTable(5);