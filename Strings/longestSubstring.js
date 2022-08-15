// Given a string find the length of the longest substring
// Input: abcaabb maxlength : 3 abc
// Input: pwwke maxlength: 3 wke
// This is part of leetcode medium
const longestSubstring = (str) => {
    let end = 0;
    let start = 0;
    let maxLength = 0;
    const UniqueCharactersSet = new Set();
    while(end<str.length){
        //if str[end] is not present in the set, insert the element in the set, end++, reset the maxlength
        if(!UniqueCharactersSet.has(str[end])){
            UniqueCharactersSet.add(str[end]);
            end++;
            maxLength = Math.max(maxLength, UniqueCharactersSet.size);

        }else{
            //this is the case where we will have duplicate elements, if the element is already in the set.
            //delete set[str[start]] start++
            UniqueCharactersSet.delete(str[start]);
            start++;
        }
    }
    return maxLength;
}

console.log(longestSubstring('pwwk')); //2 for wk.