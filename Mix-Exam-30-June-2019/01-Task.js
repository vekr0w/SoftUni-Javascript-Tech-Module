function taskOne(input) {
  let giftSideSize = Number(input[0]);
  let totalGiftSize = giftSideSize * giftSideSize * 6;
  let areaCovered = 0;
  let sheetsCount = Number(input[1]);
  let singleSheetCovers = Number(input[2]);

  for (let i = 1; i <= sheetsCount; i++) {
    if (i % 3 === 0) {
      areaCovered += singleSheetCovers * 0.25;
    } else {
      areaCovered += singleSheetCovers;
    }
  }

  let percentage = areaCovered * 100 / totalGiftSize;

  console.log(`You can cover ${percentage.toFixed(2)}% of the box.`);


}
taskOne(
  [2.5,
    32,
    4.25
  ]
);




/*
console.log(`You can cover ${percentage}% of the box.`)


*/