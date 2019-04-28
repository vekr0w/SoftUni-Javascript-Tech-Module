function returnAsciiInRange(start, end) {

  let beginFrom = start.charCodeAt();
  let stopAt = end.charCodeAt();
  let characters = [];

  if (beginFrom > stopAt) {
    let temp = beginFrom;
    beginFrom = stopAt;
    stopAt = temp;
  }

  for (let i = beginFrom + 1; i < stopAt; i++) {
    characters.push(String.fromCharCode(i));
  }
  console.log(characters.join(' '));

}
returnAsciiInRange('c', '#');