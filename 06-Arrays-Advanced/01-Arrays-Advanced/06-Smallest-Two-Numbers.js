function printSmallest(input) {

  let smallestNums = input
    .sort((a, b) => a - b)
    .slice(0, 2)
    .join(' ');

  console.log(smallestNums);

}
printSmallest([30, 15, 50, 5]);