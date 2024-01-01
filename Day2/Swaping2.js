//Question 5 - Swap two number without third variable

let a = 1;
let b = 2;
function swaping(a, b) {
  a = a + b;
  b = a - b;
  a = a - b;
  console.log(a, b);
}
console.log(swaping(a, b));
// let a = 10;
// let b = 20;
// let arr = [40, 60];
// let [c, d] = arr;
// let e;
// let f;
// [c, d] = [a, b];
// console.log(c, d);
