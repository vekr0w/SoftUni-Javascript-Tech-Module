function isPalindrome(input) {

  for (let i = 0; i < input.length; i++) {
    let elementReversed = input[i].toString().split('').reverse();
    let element = input[i].toString().split('');
    let isPalindrome = false;

    for (let j = 0; j < element.length; j++) {
      element[j] == elementReversed[j] ? isPalindrome = true : isPalindrome = false;
    }

    console.log(isPalindrome);

  }
}
isPalindrome([32, 2, 232, 1010]);