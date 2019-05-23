function printNextDay(currentYear, currentMonth, currentDay) {

  let day = new Date(currentYear, currentMonth - 1, currentDay + 1)
  console.log(`${day.getFullYear()}-${day.getMonth() + 1}-${day.getDate()}`); // May 01 2000 
}
printNextDay(2016, 9, 30)