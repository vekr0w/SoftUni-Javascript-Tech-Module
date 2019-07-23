function matchFullnames(input) {

  let nameValidator = /\b[A-Z][a-z]+ [A-Z][a-z]+/g;
  let data = input[0];
  let result = data.match(nameValidator);
  console.log(result.join(' '));
  
}
matchFullnames(
  ['Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan\tIvanov']
);