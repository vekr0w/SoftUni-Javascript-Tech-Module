function printLanguageSpoken(input) {
  let supportedLanguages = {
    England: 'English',
    USA: 'English',
    Spain: 'Spanish',
    Argentina: 'Spanish',
    Mexico: 'Spanish'
  }
  supportedLanguages.hasOwnProperty(input) ? console.log(supportedLanguages[input]) : console.log('unknown');
}
printLanguageSpoken('USA')