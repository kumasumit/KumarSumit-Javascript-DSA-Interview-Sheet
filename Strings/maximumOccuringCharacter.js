// you are given a string 'hello', you need to print the maximum occuring character
//Steps: 1. Convert the string into array by using split method
       //2.use foreach method on array and convert the string into key value pairs.
       //3. loop through the map to find the maximum value and print the corresponding key, that will be the alphabet.

const maximumOccuringCharacter = (str) =>{
    const map = {};
    str.split('').forEach(element => {
      map[element] = map[element]?map[element]+1:1;        
    });
    let max = 1;
    let char = str[0];
    for(let item in map){
        if(map[item]>max){
            max= map[item]
            char = item;
        }
    }
    return char;
}       
console.log(maximumOccuringCharacter('hello world'));