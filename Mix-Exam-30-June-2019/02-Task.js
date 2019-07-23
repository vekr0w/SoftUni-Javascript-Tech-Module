function taskTwo(input) {
  const countOccurrences = (arr, val) => arr.reduce((a, v) => (v > val ? a + 1 : a), 0);

  let currentTasks = input.shift().split(' ').map(Number);
  const upcomingTasksLength = input.length;
  //console.log(currentTasks.join(' '));


  for (let i = 0; i < upcomingTasksLength; i++) {
    if (input[i] === 'End') {
      break;
    }

    let [command, firstNum, secondNum] = input[i].split(' ');
    if (Number(firstNum) && Number(secondNum)) {
      firstNum = Number(firstNum);
      secondNum = Number(secondNum);
    }

    let isNumIncluded = currentTasks[firstNum] != undefined;

    if (command === 'Complete' && isNumIncluded) {
      currentTasks[firstNum] = 0;
    }

    if (command === 'Change' && isNumIncluded) {
      currentTasks[firstNum] = secondNum;
    }

    if (command === 'Drop' && isNumIncluded) {
      currentTasks[firstNum] = -1;
    }

    if (command === 'Count' && firstNum === 'Completed') {
      console.log(countOccurrences(currentTasks, 0));
    }
    if (command === 'Count' && firstNum === 'Incomplete') {
      console.log(countOccurrences(currentTasks, 0));
    }
    if (command === 'Count' && firstNum === 'Dropped') {
      console.log(countOccurrences(currentTasks, -1));
    }
  }

  let notFinishedTasks = [];
  for (let j = 0; j < currentTasks.length; j++) {
    const element = currentTasks[j];
    if (element > 0) {
      notFinishedTasks.push(element);
    }
  }
  console.log(notFinishedTasks.join(' '));

}
taskTwo(
  ['1 -1 2 3 4 5',
    'Complete 4',
    'Change 0 4',
    'Drop 3',
    'Count Dropped',
    'End'
  ]

);




/*
"Complete {index}"
Find the task on this index in your collection and complete it, if the index exists.
"Change {index} {time}"
Replace the time needed of the task on the given index with the time given, if the index exists.
"Drop {index}"
Drop the task on the given index, if the index exists.
"Count Completed"
Print the number of completed tasks.
"Count Incomplete"
Print the number of incomplete tasks (this doesn’t include the dropped tasks).
"Count Dropped"
Print the number of dropped tasks (this doesn’t include the incomplete tasks).


*/