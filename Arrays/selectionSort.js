// in selection sort after every iteration the smallest element is sent to the beginning of the Array.

const selectionSort = (array) => {
    for(let i=0;i<array.length;i++){
        let minIndex = i;
        // assume the first element is the minimum element
        for(let j=i+1;j<array.length;j++){
            if(array[j]<array[minIndex]){
                minIndex=j;
            }
        }
        //if i and minIndex are not same means swap has occured
        if(i!==minIndex){
            let temp = array[i];
            array[i] = array[minIndex];
            array[minIndex] = temp;
        }
    }
    return array;
}

console.log(selectionSort([12,11,10,9,1,0,8,4,5]))