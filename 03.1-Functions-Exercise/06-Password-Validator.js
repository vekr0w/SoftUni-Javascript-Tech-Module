function isPasswordValid(input) {

  function isLengthValid(password) {
    let passLength = password.length;

    if (passLength >= 6 && passLength <= 10) {
      return true
    } else {
      return false
    }
  }

  function isContentValid(password) {
    return password.match(/^[a-zA-Z0-9]+$/i) !== null;
  }

  function areDigitsEnough(password) {
    let data = password.split('');
    counter = 0;
    data.forEach(element => {
      if (Number(element))
        counter++
    });
    if (counter >= 2)
      return true
    else
      return false

  }

  let isPassValid = isLengthValid(input) && isContentValid(input) && areDigitsEnough(input);

  if (isPassValid)
    console.log('Password is valid');

  if (!isLengthValid(input))
    console.log("Password must be between 6 and 10 characters");

  if (!isContentValid(input))
    console.log("Password must consist only of letters and digits");

  if (!areDigitsEnough(input))
    console.log("Password must have at least 2 digits");

}
isPasswordValid('');


/*
•	6 – 10 characters (inclusive)
•	Consists only of letters and digits
•	Have at least 2 digits 

•	"Password must be between 6 and 10 characters"
•	"Password must consist only of letters and digits"
•	"Password must have at least 2 digits"

*/