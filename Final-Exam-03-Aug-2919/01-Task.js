function task(input) {

  let data = input.shift();

  for (let line of input) {
    if (line === 'Done') {
      break;
    }

    let [command, first, second] = line.split(' ');

    if (command === 'Change' && data.includes(first)) {
      while (data.includes(first)) {
        data = data.replace(first, second);
      }
      console.log(data);
    }

    if (command === 'Includes') {
      data.includes(first) ? console.log('True') : console.log('False');
    }

    if (command === 'End') {
      data.endsWith(first) ? console.log('True') : console.log('False');
    }

    if (command === 'Uppercase') {
      data = data.toUpperCase();
      console.log(data);
    }

    if (command === 'FindIndex') {
      console.log(data.indexOf(first));
    }

    if (command === 'Cut') {
      data = data.substr(first, second);
      console.log(data);

    }
  }
}
task(
  ['//Th1s 1s my str1ng!//',
    'Change 1 i',
    'Includes string',
    'End my',
    'Uppercase',
    'FindIndex I',
    'Cut 5 5',
    'Done'
  ]

);

/*
"Change {char} {replacement}"
Replace all occurences of {char} with {replacement}, then print the string.
"Includes {string}"
Check if the string includes with {string} and print "True/False".
"End {string}"
Check if the string ends with {string} and print "True/False".
"Uppercase"
Make the whole string uppercased, then print it.
"FindIndex {char}"
Find the first index of {char}, then print it.
"Cut {startIndex} {length}"
Remove all characters from the string except for those starting from {startIndex} and the next {length} characters, then print it.

*/