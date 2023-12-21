//Question 2 - Remove duplicate using set() and find the count

let arr = [1, 2, 1, 3, 2, 1, 5, 7, 6, 5];
function RemoveDuplicateBySet(arr) {
  let arr1 = [...new Set(arr)];
  let count = arr1.length;
  return count;
}
console.log(RemoveDuplicateBySet(arr));
