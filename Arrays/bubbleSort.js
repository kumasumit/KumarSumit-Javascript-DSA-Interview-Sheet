// in bubblesort after every iteration, the largest element is at the end of the array
//so you can be sure that after every iteration, the largest element is towards the end.

const bubblesort = (array) => {
    for(let i=array.length;i>0;i--){
        for(let j=0;j<i-1;j++){
            if(array[j]>array[j+1]){
                //swap the values
                [array[j], array[j+1]] = [array[j+1], array[j]];
            }
        }
    }
    return array;
}
console.log(bubblesort([2,5,0,1,3,4,6,9,8,7]));
// Approach 2:
const optimzedBubbleSort=(array)=>{
    //here we minimize the number of iterations
    for(let i=array.length;i>0;i--){
        let isSwapped;
        // declare a boolean isSwapped for the outer array
        for(let j=0;j<i-1;j++){
            if(array[j]>array[j+1]){
                //check if value of left element is greater than the value of the right element, if true swap, and mark the boolean isSwapped as true.
                [array[j], array[j+1]] = [array[j+1], array[j]];
                isSwapped = true;
            }
        }
        // after inner loop ends if isSwapped is not true, means there is no swap in the inner loop, means the arary is sorted
        if(!isSwapped){
            break; //this will come out of the outer loop
        }
    }
    return array;
}

console.log(optimzedBubbleSort([23,1,0,34,56,12,11,10]));