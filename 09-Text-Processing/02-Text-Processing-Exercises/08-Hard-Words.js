function fillHardWords(input) {

  let letter = input[0].split(' ');
  let hardWords = input[1];
  let count = 0;
  for (let word of letter) {
    if (word.includes('_')) {
      for (const hardWord of hardWords) {
        let regex = /[.,\s]/g;
        let underscoreCheck = '_'.repeat(hardWord.length);
        if (word.replace(regex, '') === underscoreCheck) {
          
        }
      }
    }
  }

  console.log(count);




}
fillHardWords(
  ['Hi, grandma! I\'m so ____ to write to you. ______ the winter vacation, so _______ things happened. My dad bought me a sled. Mom started a new job as a __________. My brother\'s ankle is ________, and now it bothers me even more. Every night Mom cooks ___ on your recipe because it is the most delicious. I hope this year Santa will _____ me a robot.',
    ['pie',
      'bring',
      'glad',
      'During',
      'amazing',
      'pharmacist',
      'sprained']]
);