//Find Peak Element

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 1];

function CheckPeakElement(arr) {
  start = 0;
  let end = arr.length - 1;
  while (start <= end) {
    let mid = parseInt((start + end) / 2);

    if (arr[mid] > arr[start]) {
      start = mid;
    } else {
      end = mid;
    }

    if (mid === start && arr[mid] > arr[mid + 1]) {
      return arr[mid];
    }
  }
}
console.log(CheckPeakElement(arr));
