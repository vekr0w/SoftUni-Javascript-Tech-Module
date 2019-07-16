function taskThree(input) {

  let frogData = input.shift().split(' ');
  let length = input.length;

  for (let i = 0; i < length; i++) {

    let [command, firstElem, secondElem] = input[i].split(' ');

    if (command === 'Join') {
      frogData.push(firstElem);
    }

    if (command === 'Jump') {
      let index = Number(secondElem);
      if (frogData[index] != undefined) {
        frogData.splice(index, 0, firstElem);
      }
    }


    if (command === 'Dive') {
      let index = Number(firstElem);
      if (frogData[index] != undefined) {
        frogData.splice(index, 1);
      }
    }

    if (command === 'First') {
      let index = Number(firstElem);
      let firstElements = frogData.slice(0, index);
      console.log(firstElements.join(' '));
    }


    if (command === 'Last') {
      let index = Number(firstElem);
      let firstElements = frogData.slice((frogData.length - index), frogData.length)
      console.log(firstElements.join(' '));
    }


    if (command === 'Print' && firstElem === 'Normal') {
      console.log(`Frogs: ${frogData.join(' ')}`);
      break;
    } else if (command === 'Print' && firstElem === 'Reversed') {
      console.log(`Frogs: ${frogData.reverse().join(' ')}`);
      break;
    }
  }
}
taskThree(
  ['A B C D E F',
    'Join G',
    'Jump Q 3',
    'Last 3',
    'Dive 2',
    'Print Normal'
  ]

);




/*
"Join {name}":
A frog comes on the riverside and you need to add it in the end of your collection. Frog names will never repeat.
"Jump {name} {index}"
A frog jumps out of the water and joins the other frogs. You need to add it in your collection on the given index, if the index exists.
"Dive {index}":
The frog on the given index has decided to jump into the water. You have to remove it from your collection, if the index exists.
"First/Last {count}":
Print the first/last {count} frogs separated by a single space. If the count requested is more than the frogs- just print them to the end.
"{frog} {frog} {frog}"
"Print Normal/Reversed"



*/