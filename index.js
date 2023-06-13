function isPalindrome(word) {
  // Write your algorithm here
  let start = 0;
  let end = word.length - 1;

  while (start < end) {
    if (word[start] !== word[end]) {
      return false;
    }
    start++;
    end--;
  }
  return true;  
}

/* 
  Add your pseudocode here
  Define start and end indices postitions of word
    Iterate through the word comparing characters from both end
	    If characters don't match, return false
	Move forward 1 index position from front and back 1 index position from end
  Repeat until we reach the middle of the word, if we reach here, return true
*/

/*
  Add written explanation of your solution here
  We iterate through the word, starting with first and last character, moving inwards towards the middle. If at any point the characters don't match, we return false as the word is not a palindrome. If we make it through to where start >= end, all characters match and the word is a palindrome so we return true.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
