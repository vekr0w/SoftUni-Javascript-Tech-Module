function travelTime(input) {

  let countryTownPriceData = {};

  for (let element of input) {
    let [country, town, currentPrice] = element.split(' > ');
    currentPrice = Number(currentPrice);

    if (!countryTownPriceData.hasOwnProperty(country)) {
      countryTownPriceData[country] = {};
      countryTownPriceData[country][town] = currentPrice;
    } else {
      let countryObject = countryTownPriceData[country];
      if (!countryObject.hasOwnProperty(town)) {
        countryObject[town] = currentPrice;
      } else {
        let oldPrice = Number(countryObject[town]);
        if (oldPrice > currentPrice) {
          countryObject[town] = currentPrice;
        }
      }
    }

  }

  let sortedCountryData = Object.entries(countryTownPriceData)
    .sort((a, b) => {
      let firstCountryName = a[0];
      let secondCountryName = b[0];
      return firstCountryName.localeCompare(secondCountryName);
    });

  for (const [countryName, townData] of sortedCountryData) {
    let sortedTownData = Object.entries(townData)
      .sort((a, b) => {
        let firstPrice = a[1];
        let secondPrice = b[1];
        return firstPrice - secondPrice;
      });
    let output = `${countryName} -> `;
    for (const [townName, price] of sortedTownData) {
      output += `${townName} -> ${price} `;
    }
    console.log(output);
  }
}
travelTime(
  [
    "Bulgaria > Sofia > 500",
    "Bulgaria > Sopot > 800",
    "France > Paris > 2000",
    "Albania > Tirana > 1000",
    "Bulgaria > Sofia > 200"
  ]
);
