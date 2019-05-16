function printTriangle(num) {

  for (let i = 1; i <= num; i++) {
    let pyramid = [];
    while (pyramid.length < i) {
      pyramid.push(i);
    }
    console.log(pyramid.join(' '));
  }
}
printTriangle(3);