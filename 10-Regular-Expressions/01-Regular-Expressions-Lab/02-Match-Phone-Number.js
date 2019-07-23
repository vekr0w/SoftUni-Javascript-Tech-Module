function matchNumbers(input) {
  let numbersData = input[0];
  let phoneValidator = /\+359([?: -])2\1\d{3}\1\d{4}/g;
  let result = numbersData.match(phoneValidator);
  console.log(result.join(', '));
  
}
matchNumbers(
  ['+359 2 222 2222,359-2-222-2222, +359/2/222/2222, +359-2 222 2222 +359 2-222-2222, +359-2-222-222, +359-2-222-22222 +359-2-222-2222']
);
