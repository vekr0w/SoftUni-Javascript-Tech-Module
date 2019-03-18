function spicesMining(inputNum) {

  let spiceQuanity = inputNum;
  let daysCount = 0;
  let spiceMined = 0;

  while (spiceQuanity >= 100) {
    daysCount++;
    spiceMined += spiceQuanity;
    spiceQuanity -= 10;
    //if (daysCount <= 1) {
    //spiceQuanity -= 10;
    //} else {
    //  spiceQuanity -= daysCount * 10;
    //}
    if (spiceMined > 26) {
      spiceMined -= 26;
    }
  }

  spiceMined -= 26;

  console.log(daysCount);
  console.log(spiceMined);

}
spicesMining(450);