//Write a program to print three most repeated words in a string. Dont include artcles a, an, the.
//this will over the edge case like 
//let str = "this is is "
//output: is, this
let str = "this is is"


function findMostRepeatedWord(str) {
    let words = str.match(/\w+/g);
    console.log(words); // [ 'How', 'do', 'you', 'do' ]
  
    let occurances = {};
  
    for (let word of words) {
      if (occurances[word]) {
        occurances[word]++;
      } else {
        occurances[word] = 1;
      }
    }
  
    console.log(occurances); // { How: 1, do: 2, you: 1 }
  
    let max = 0;
    let mostRepeatedWord = '';
  
    for (let word of words) {
      if (occurances[word] > max) {
        max = occurances[word];
        mostRepeatedWord = word;
      }
    }
  
    return mostRepeatedWord;
}
  

console.log(optimizedThreeMostRepeatedWords(str));
function optimizedThreeMostRepeatedWords(str){

    console.log(5);
}