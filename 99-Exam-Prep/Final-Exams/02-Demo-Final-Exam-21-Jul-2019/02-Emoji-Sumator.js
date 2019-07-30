function emojiSumator(input) {
  let lastEmoji = '';
  let match = input
    .pop()
    .split(':')
    .forEach(element => {
      lastEmoji += String.fromCharCode(element);
    });

  let pattern = /(?<=\s)(?<test>:(?<emoji>[a-z]{4,}):)[\s,.!?]/gm;
  let totalEmojiSum = 0;
  let emojisCheck = [];
  let emojisPrint = [];
  let validator = pattern.exec(input);
  while (validator !== null) {
    let emojiWithCollumn = validator.groups.test;
    let currentEmoji = validator.groups.emoji;
    emojisCheck.push(currentEmoji);
    emojisPrint.push(emojiWithCollumn);
    for (let char of currentEmoji) {
      totalEmojiSum += char.charCodeAt(0);
    }
    validator = pattern.exec(input);
  }

  if (emojisCheck.includes(lastEmoji)) {
    totalEmojiSum *= 2;
  }
  if (emojisPrint.length > 0) {
    console.log(`Emojis found: ${emojisPrint.join(', ')}`);
  }
  console.log(`Total Emoji Power: ${totalEmojiSum}`);
}
emojiSumator(
  ['Hello I am Mark from :England: and I am :one: :seven: years old, I have a :hamster: as pet.',
    '115:101:118:101:110']

);