let arr = [7, 9, 11, 13, 1, 2, 4, 5, 8, 11];

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

    if (
      (mid === start && arr[mid] > arr[mid + 1]) ||
      (mid === end && arr[mid] > arr[mid - 1])
    ) {
      return arr[mid];
    }
  }
}
console.log(CheckPeakElement(arr));
