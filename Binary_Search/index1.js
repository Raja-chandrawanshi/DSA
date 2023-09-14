let arr = [1, 3, 5, 6];

num = 2;
function binary(arr, num) {
  let start = 0;
  let end = arr.length - 1;
  while (start <= end) {
    let mid = parseInt((start + end) / 2);
    if (arr[mid] === num) {
      return mid;
    }

    if (arr[mid] > num) {
      return mid - 1;
    } else {
      return mid + 1;
    }
  }
}
console.log(binary(arr, num));
