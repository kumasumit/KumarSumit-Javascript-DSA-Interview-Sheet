// Following javascript program is to find the most repeated word in the given string and this is acheived by using for loop.
let str = 'How do you do?';
console.log(findMostRepeatedWord(str)); // Result: "do"

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
