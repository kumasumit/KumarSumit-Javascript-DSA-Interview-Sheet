// Given a string that consists of only two types of characters: "(" and ")". We are required to write a function that takes in one such string and balances the parentheses by inserting either a "(" or a ")" as many times as necessary.
// The function should then return the minimum number of insertions made in the string to balance it. For example −

// If the string is −

// const str = '()))';
// Then the output should be 2, because by prepending '((', we can balance the string.

const str = '()12))';
const str1= '()'
const balanceParanthesis = str => {
    let stack = [];
    for(let i=0;i<str.length;i++){
        //if it is a opening bracket
        //push on the stack
        if(str[i]==='('){
            stack.push(str[i])
        }else if(str[i]===')'){
         //check if the last value of stack contains opening bracket '('
         //if it is pop from the stack
         if(stack[stack.length-1]==='('){
            stack.pop();
         }else{
            stack.push('#');
         }
        }
    }
    //after the for loop ends return the length of the stack
    return stack.length;
}
console.log(balanceParanthesis(str));   //ans 2
console.log(balanceParanthesis(str1));  //ans 0