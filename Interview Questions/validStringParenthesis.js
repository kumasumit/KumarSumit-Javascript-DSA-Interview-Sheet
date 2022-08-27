// We are required to write a JavaScript function that takes in a string str containing just the characters −
// '(', ')', '{', '}', '[' and ']'
// Our function should determine if the input string is valid.
// An input string is valid if −
// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// For example −
// "()" is a valid parenthesis
// "()[]{}" is a valid parentheses
// "(]" is an invalid parenthesis

const str = "([]{}";
const isValidStringParenthesis = (str = '') => {
    //Initialize a new map
    let map = new Map();
    //set the opening brackets as keys and closing brackets as values in a Map
    map.set('(', ')');
    map.set('{', '}');
    map.set('[', ']');
    //Initialize an empty stack
    const stack = []
    //loop through the length of the string
    for(let i=0;i<str.length;i++){
        //if the string has opening bracket,
        //check if the map already has an opening bracket
        //if it has push the opening bracket onto the stack 
        if(map.has(str.charAt(i))){
          stack.push(str.charAt(i));
        }else{
            //pop the latest/top value from the stack
            let popValue = stack.pop();
            //check if the string you popped from the stack its closing value from the map is the same closing value in the string if not the answer is false.
            if(map.get(popValue)!==str.charAt(i)){
                return false;
            }
        }
    }
    return stack.length === 0;
    //if the string is balanced the length of stack will be zero, if not it will not be zero.
}    
console.log(isValidStringParenthesis(str));