// Q. Given an input sorted Array, find first Pair whose sum is zero.
// I/P: [-5, -4, -3, -2, -1, 0, 1,2, 3, 4, 5] A Sorted Array
// O/P: [-5,5] return the first Pair whose sum is zero
let arr = [-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 6];
function getSumZero(arr) {
  // 1. First Method
  for (let i = 0; i < arr.length; i++) {
    console.log("Outer loop");
    for (let j = i + 1; j < arr.length; j++) {
      console.log("Inner loop");
      if (arr[i] + arr[j] === 0) {
        return [arr[i], arr[j]];
      }
    }
  }

  // 2. Second Method
  //   for (let number of arr) {
  //     console.log("Outer Loop");
  //     for (let j = 1; j < arr.length; j++) {
  //       console.log("Inner Loop");
  //       if (number + arr[j] === 0) {
  //         return [number, arr[j]];
  //       }
  //     }
  //   }
}
console.log(getSumZero(arr));
// this is of Time Complexity(n^2);
