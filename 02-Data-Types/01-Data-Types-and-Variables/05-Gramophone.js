function returnSongRotations(bandName, albumName, songName) {

  let songLength = (albumName.length * bandName.length) * songName.length / 2;
  let rotations = Math.ceil(songLength / 2.5);

  console.log(`The plate was rotated ${rotations} times.`);

}

returnSongRotations('four', 'two', 'one');