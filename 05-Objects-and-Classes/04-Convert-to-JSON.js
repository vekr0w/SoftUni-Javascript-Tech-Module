function convertToJson(name, lastName, hairColor) {

  let person = {
    name,
    lastName,
    hairColor
  }
  console.log(JSON.stringify(person));
}
convertToJson(
  'George',
  'Jones',
  'Brown'
)