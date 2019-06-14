function loadingBar(input) {

  let progress = ['[', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', ']'];
  let iterator = input / 10;

  for (let i = 1; i <= iterator; i++) {
    progress[i] = '%';
  }
  progress = progress.join('');

  if (input == 100) {
    console.log(`${input}% Complete!`);
    console.log(progress);
  } else {
    console.log(`${input}% ${progress}`);
    console.log('Still loading...');

  }
}
loadingBar(100);