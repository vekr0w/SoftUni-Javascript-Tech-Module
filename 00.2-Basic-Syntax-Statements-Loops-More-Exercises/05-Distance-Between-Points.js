function findDistance(x1, y1, x2, y2) {

  let a = x1 - x2;
  let b = y1 - y2;
  let c = Math.sqrt(a * a + b * b);
  //let c = Math.hypot(x2 - x1, y2 - y1);
  console.log(c);


}
findDistance(2, 4, 5, 0);