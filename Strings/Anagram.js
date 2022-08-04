// Compare two strings if they are anagram .
// abbcd, bbcad.


let str1 = "abbcd";
let str2 = "bbcad";
function isAnagram(str1, str2){
    
    //Case 1: compare two strings str1 and str2
    if(str1.length!==str2.length){
        return false;
    }

    let charArray = new Array(256);
    for(let i=0;i<charArray.length;i++){
        charArray[i] = 0;
    }
    for(let i=0,j=0;i<str1.length&&j<str2.length;i++,j++){
        charArray[str1.charCodeAt(i)]++;
        charArray[str2.charCodeAt(j)]--;
        
    }
    for(let i=0;i<charArray.length;i++){
        if(charArray[i]!==0){
            return false;
        }
    }
    return true;
}
//this has a time complexity of O(n).
console.log(isAnagram("abbd", "cabb"));
