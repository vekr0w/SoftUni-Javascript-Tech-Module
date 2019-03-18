function printDayOfWeek(input) {
  let userInput = Number(input);
  let daysString = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  let inputDay = '';
  switch (userInput) {
    case 1:
      inputDay = daysString[0];
      break;
    case 2:
      inputDay = daysString[1];
      break;
    case 3:
      inputDay = daysString[2];
      break;
    case 4:
      inputDay = daysString[3];
      break;
    case 5:
      inputDay = daysString[4];
      break;
    case 6:
      inputDay = daysString[5];
      break;
    case 7:
      inputDay = daysString[6];
      break;

    default:
      console.log(`Invalid day!`);
      break;

  }

  if (inputDay.length > 0) {
    console.log(inputDay);
  }
}