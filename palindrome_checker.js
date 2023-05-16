function palindrome(str) {
  let re = /[A-Za-z0-9]/ig;
  let word = str.match(re).join('').toLowerCase();
  let revWord = str.match(re).reverse().join('').toLowerCase()
  return word === revWord;
}

palindrome("_2A3*3a2");
