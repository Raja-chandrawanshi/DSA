function Fibonacci(N) {
  let arr = [0, 1];
  let output;
  let count = 0;
  for (let i = 0; i <= count; i++) {
    output = arr[i] + arr[i + 1];
    arr.push(output);
    count++;

    if (N === output) {
      return arr;
    }
  }
}
let N = 185;
console.log(Fibonacci(N));
