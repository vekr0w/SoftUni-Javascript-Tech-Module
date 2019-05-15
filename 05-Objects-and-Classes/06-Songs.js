//Type List, Name and Time.
function setSongsInOrder(input) {

  class Song {
    constructor(typeList, name, time) {

      this.typeList = typeList;
      this.name = name;
      this.time = time;
    }
    printName() {
      console.log(this.name);

    }
  }

  let remove = input.shift()
  let listToPrint = input.pop();

  for (const data of input) {
    let songDetails = data.split('_');
    let playlist = new Song(songDetails[0], songDetails[1], songDetails[2]);
    if (listToprint === playlist.typeList || listToprint === 'all') {
      playlist.printName();
    }
  }
}
setSongsInOrder(
  ['2',
    'like_Replay_3:15',
    'ban_Photoshop_3:48',
    'all'
  ])