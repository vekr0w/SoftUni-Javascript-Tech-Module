function isYearLeap(year) {
  let isLeap = (year) => new Date(year, 1, 29).getDate() === 29;
  isLeap(year) ? console.log('yes') : console.log('no');
}
isYearLeap(1984);