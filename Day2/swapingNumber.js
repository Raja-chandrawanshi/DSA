// Question 4 - Swap two number with third variable

let a = 1;
let b = 2;
function swaping(a, b) {
  let store;
  store = a;
  a = b;
  b = store;
  console.log(a);
  console.log(b);
}
console.log(swaping(a, b));
