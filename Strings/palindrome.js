// question: You are given a String, You need to check whether it is a palindrome or Not.
// god, dog is not a palindrome.
// sumit timus is not a palindrome.
// level, level is a palindrome.
// lol , lol is a palindrome.

// Approach 1: Inbuilt Js Methods
// Steps: 1. first split the string into Array.
//        2. reverse the Array.
//        3. Join the array and convert it into a string.
//        4. Compare both strings and return the results
const isPalindromeBuiltInMethods = (str) =>{
    let newArray = str.split("");
    let reverseArray = newArray.reverse();
    let reverseString = reverseArray.join("")
    return str.toLowerCase() === reverseString.toLowerCase();
    //this will return true if both strings match false if the strings dont match.
}

console.log(isPalindromeBuiltInMethods('lol'))

// Approach 2 : Without using inbuilt Js functions
// Steps: 1. Convert the given string into toLowerCase
//        2. initialize two pointers left and right.
//        3. left = 0, right= str.length-1 
//        4. run a while loop for left<right
//        5. if(str[left]!== str[right]) return false
//        6. left++, right--
//        7. outside while loop return true

const isPalindrome = (str) =>{
    let newString = str.toLowerCase();
    let left = 0;
    let right = newString.length - 1;
    while(left < right){
        if(str[left]!== str[right]){
            return false;
        }
        left++;
        right--;
    }
    //if the control comes here means there was no mismatch of left and right pointer
    return true;
}
console.log(isPalindrome('lol'));