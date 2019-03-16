// 1 year = 365.2422 

function breakDownCenturies(inputCenturies) {

  let years = inputCenturies * 100;
  let days = Math.trunc(years * 365.2422);
  let hours = days * 24;
  let minutes = hours * 60;
  console.log(`${inputCenturies} centuries = ${years} years = ${days} days = ${hours} hours = ${minutes} minutes`);

}
breakDownCenturies(1);