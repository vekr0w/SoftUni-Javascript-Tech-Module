function printCommonElements(firstArr, secondArr) {

  firstArr.forEach(element => {
    if (secondArr.includes(element)) {
      console.log(element);

    }
  });

}
printCommonElements(["Hey", "hello", 2, 4, "Pesho", "e"], ["Pecho", 10, "hey", 4, "hello", "2"]);