function city(name, area, population, country, postCode) {

  let city = {
    name,
    area,
    population,
    country,
    postCode
  }

  let entries = Object.entries(city);
  for (const [key, value] of entries) {
    console.log(`${key} -> ${value}`);
  }
}
city("Sofia", " 492", "1238438", "Bulgaria", "1000");