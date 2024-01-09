let N = 113;
let count = 0;
function primeNumber(N) {
  for (let i = 1; i <= N; i++) {
    if (N % i == 0) {
      count++;
    }
  }
  if (count == 2) {
    return "it is prime";
  }
}
console.log(primeNumber(N));
