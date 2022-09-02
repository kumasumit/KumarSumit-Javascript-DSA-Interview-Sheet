//Write a program to print three most repeated words in a string. Dont include artcles a, an, the. 
// let str = 'This is a blue book, blue is a very nice color, this book is best'
// is - 3
// this - 2
// blue - 2
// book - 2
// output - is this blue
let str1 = 'This is a blue book, blue is a very nice color, this book is best';
let str2 = 'this is is is '

console.log(threeMostRepeatedWords(str1));

function threeMostRepeatedWords(str){
    let words = str.toLowerCase(). match(/\w+/g);
    // console.log(words);
    
    let occurances = {}; //An object to store words and their frequency
    for(word of words){
        if(occurances[word]){
            occurances[word]++;
        }else{
            occurances[word] = 1;
        }
    }
    // console.log(occurances);
    //program to remove a , an , the 
    for(word of words){
        if(word ==='a' || word ==='an' || word ==='the')
        {
          delete occurances[word]
        }
    }
    // console.log(occurances)
    let maxThreeWords=[];
    //program to get 1st largest Element
    let maxFirst = 0;
    let maxFirstWord = '';
    for(word of words) {
       if(occurances[word]>maxFirst) {
        maxFirst = occurances[word];
        maxFirstWord = word;
       }       
    }
    delete occurances[maxFirstWord];
    maxThreeWords.push(maxFirstWord);
    // console.log(occurances);
    //program to get second largest element
    let maxSecond = 0;
    let maxSecondWord = '';
    for(word of words) {
       if(occurances[word]>maxSecond) {
        maxSecond = occurances[word];
        maxSecondWord = word;
       }       
    }
    delete occurances[maxSecondWord];
    maxThreeWords.push(maxSecondWord);
    // console.log(occurances);
    //program to get third largest element
    let maxThird = 0;
    let maxthirddWord = '';
    for(word of words) {
       if(occurances[word]>maxThird) {
        maxThird = occurances[word];
        maxThirdWord = word;
       }       
    }
    delete occurances[maxThirdWord];
    maxThreeWords.push(maxThirdWord);
    // console.log(occurances);
    return maxThreeWords.join();
}

console.log(threeMostRepeatedWords(str2));