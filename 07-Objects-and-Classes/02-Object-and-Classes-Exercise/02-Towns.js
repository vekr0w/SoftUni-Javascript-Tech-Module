function towns(input) {
  //Town", "Latitude" and "Longitude"
  class Town {
    constructor(town, latitude, longitude) {
      this.town = town;
      this.latitude = latitude;
      this.longitude = longitude;
    }
  }
  for (let i = 0; i < input.length; i++) {
    let [townName, townLatitude, townlongitude] = input[i].split(' | ');
    townLatitude = Number(townLatitude).toFixed(2);
    townlongitude = Number(townlongitude).toFixed(2);
    let currentTown = new Town(townName, townLatitude, townlongitude);
    console.log(JSON.parse(JSON.stringify(currentTown)));
  }
}
towns(
  ['Sofia | 42.696552 | 23.32601',
    'Beijing | 39.913818 | 116.363625']
);