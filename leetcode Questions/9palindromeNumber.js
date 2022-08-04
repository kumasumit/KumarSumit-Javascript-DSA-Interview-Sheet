// 9. Palindrome Number leetcode Easy
// Given an integer x, return true if x is palindrome integer.

// An integer is a palindrome when it reads the same backward as forward.

// For example, 121 is a palindrome while 123 is not.

// Example 1:

// Input: x = 121
// Output: true
// Explanation: 121 reads as 121 from left to right and from right to left.
// Example 2:

// Input: x = -121
// Output: false
// Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
// Example 3:

// Input: x = 10
// Output: false
// Explanation: Reads 01 from right to left. Therefore it is not a palindrome.

// Constraints:

// -231 <= x <= 231 - 1

// 1. First Approach Convert Number into String
const isPalindrome = (num) => {
  // convert number into string
  let numString = num.toString();
  let n = numString.length;
  for (let i = 0; i < n; i++) {
    if (numString.charAt(i) !== numString.charAt(n - 1 - i)) {
      return false;
    }
  }
  return true;
};

const isPalindromeInteger = (num) => {
  if (num < 0) {
    return false;
  }
  //negative numbers are not palindrome
  let reverseNumber = 0;
  let i = num;
  while (i >= 1) {
    reverseNumber = reverseNumber * 10 + (i % 10);
    i = Math.floor(i / 10);
  }
  return reverseNumber === num;
};

console.log(isPalindrome(121), isPalindrome(-121));
// true false

console.log(isPalindromeInteger(121), isPalindromeInteger(-121));
