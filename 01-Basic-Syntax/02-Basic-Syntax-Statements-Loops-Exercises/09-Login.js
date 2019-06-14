function login(input) {
  const username = input[0];

  for (let i = 1; i < input.length; i++) {
    let element = input[i];
    let elementReversed = element.split('').reverse().join('');
    if (elementReversed === username) {
      return console.log(`User ${username} logged in.`)
    } else {
      if (i === 4) {
        return console.log(`User ${username} blocked!`);
      }
      console.log('Incorrect password. Try again.')
    }

  }
}
login(['Acer', 'login', 'go', 'let me in', 'recA']);

//if incorrect display: Incorrect password. Try again.
//if correct display : User {username} logged in.
//if attempts > 4  display: User {username} blocked!