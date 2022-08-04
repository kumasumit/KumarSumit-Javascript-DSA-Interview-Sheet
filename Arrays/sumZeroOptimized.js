// Q. Given an input sorted Array, find first Pair whose sum is zero.
// I/P: [-5, -4, -3, -2, -1, 0, 1,2, 3, 4, 5] A Sorted Array
// O/P: [-5,5] return the first Pair whose sum is zero
//Do this is O(n) using Only one for loop.

let arr = [-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5];
function getSumZeroOptimized(arr) {
  let leftIndex = 0;
  let rightIndex = arr.length - 1;
  while (leftIndex < rightIndex) {
    let sum = arr[leftIndex] + arr[rightIndex];
    if (sum === 0) {
      return [arr[leftIndex], arr[rightIndex]];
    } else if (sum > 0) {
      rightIndex--;
    } else if (sum < 0) {
      leftIndex++;
    }
  }
}
console.log(getSumZeroOptimized(arr));

// This is done in O(n)
