/*
0-2 – baby; 
3-13 – child; 
14-19 – teenager;
20-65 – adult;
>=66 – elder; 
All the values are inclusive.
*/
function ages(ageInput) {
  const returnType = (age) => {
    if (age >= 0 && age <= 2)
      return 'baby'
    else if (age >= 3 && age <= 13)
      return 'child'
    else if (age >= 14 && age <= 19)
      return 'teenager'
    else if (age >= 20 && age <= 65)
      return 'adult'
    else if (age >= 66)
      return 'elder'
  }

  console.log(returnType(Number(ageInput)));

}
ages(66);