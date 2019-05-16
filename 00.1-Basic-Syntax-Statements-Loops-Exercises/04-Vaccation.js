function printVaccationCost(groupNumber, type, day) {
  // converting the input toLowerCase as the Object convetion does not use capital letters in beggining
  groupType = type.toLowerCase();
  dayOfWeek = day.toLowerCase();

  // Creating an object that holds the groupType and cost per given day.
  const vacationData = {
    students: {
      friday: 8.45,
      saturday: 9.80,
      sunday: 10.46
    },
    business: {
      friday: 10.90,
      saturday: 15.60,
      sunday: 16
    },
    regular: {
      friday: 15,
      saturday: 20,
      sunday: 22.50
    }
  }
  let costPerPerson = vacationData[groupType][dayOfWeek]
  let discount = 0;

  // Switch that determines the discount depending on the groupType.
  switch (groupType) {
    case 'students':
      if (groupNumber >= 30) {
        discount = 0.15;
      }
      break;
    case 'business':
      if (groupNumber >= 100) {
        groupNumber -= 10;
      }
      break;
    case 'regular':
      if (groupNumber >= 10 && groupNumber <= 20) {
        discount = 0.05;
      }
      break;
    default:
      break;
  }

  let totalCost = costPerPerson * groupNumber;

  if (discount != 0) {
    totalCost -= totalCost * discount;
  }

  console.log(`Total price: ${totalCost.toFixed(2)}`);

}
printVaccationCost(
  30,
  "students",
  "sunday"
)

/*
students >= 30 total price - 15%
business >= 100 groupNumber -10.
regular >= 10 regular <= 20 total price - 5%

*/