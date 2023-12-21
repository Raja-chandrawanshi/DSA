//Question 3  - Remove Duplicate characters from array of element using filter

let arr = ["a", "c", "f", "a", "c", "j"];
function filterDuplicate(arr) {
  let output = arr.filter((value, index) => arr.indexOf(value) == index);
  return output;
}
console.log(filterDuplicate(arr));
