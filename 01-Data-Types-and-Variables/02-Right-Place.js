function isMatch(notFull, missingPiece, fullPuzzle) {

  const partialWord = notFull.replace("_", missingPiece);

  if (partialWord == fullPuzzle) {
    console.log('Matched');
  } else {
    console.log('Not Matched');
  }
}