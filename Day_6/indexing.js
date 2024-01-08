//Way 1
// let arr = [6, 9, 4, 0, 1, 2];
// let value = 2;
// let count = -1;
// console.log(indexing(arr, value));
// function indexing(arr, value) {
//   for (let i = 0; i < arr.length; i++) {
//     count++;
//     if (arr[i] == value) {
//       return count;
//     }
//   }
// }

// Way 2
let arr = [6, 9, 4, 0, 1, 2];
let value = 2;

console.log(indexing(arr, value));
function indexing(arr, value) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == value) {
      return i;
    }
  }
}
