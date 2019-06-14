function triangleArea(a, b, c) {
  const s = (a + b + c) / 2;
  const result = Math.sqrt(s * (s - a) * (s - b) * (s - c));
  console.log(result);
}
triangleArea(2, 3.5, 4);