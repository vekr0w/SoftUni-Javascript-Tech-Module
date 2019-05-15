function pritnTicketCost(day, age) {

  let cost = 0;

  if (age < 0 || age > 122) {
    console.log(`Error!`);

  } else {
    switch (day) {
      case 'Weekday':
        cost = weekdayCost(age);
        break;
      case 'Weekend':
        cost = Weekend(age);
        break;
      case 'Holiday':
        cost = Holiday(age);
        break;

      default:
        return console.log(`Error!`);
        break;
    }
    console.log(`${cost}$`);

  }



  function weekdayCost(age) {
    if (age >= 0 && age <= 18) {
      return 12
    } else if (age > 18 && age <= 64) {
      return 18
    } else if (age > 64 && age <= 122) {
      return 12
    }
  }

  function Weekend(age) {
    if (age >= 0 && age <= 18) {
      return 15
    } else if (age > 18 && age <= 64) {
      return 20
    } else if (age > 64 && age <= 122) {
      return 15
    }
  }

  function Holiday(age) {
    if (age >= 0 && age <= 18) {
      return 5
    } else if (age > 18 && age <= 64) {
      return 12
    } else if (age > 64 && age <= 122) {
      return 10
    }
  }
}
pritnTicketCost('Holiday', -12);