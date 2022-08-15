//logic use two loops, outer loop for i from 1 to arr.lengt
//use inner loop for j from 0 to i-1
const insertionSort = (array) => {
    for(let i=1;i<array.length;i++){
        let currentValue = array[i];
        let j = i-1;
        while(j>=0 && array[j]>currentValue){
            array[j+1] = array[j];
            j--;
        }
        array[j+1] = currentValue;
    }
    return array;
}

console.log(insertionSort([5,6,4,7,3,2,0,1]));