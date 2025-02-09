const add = (a,b) => a + b;

const subtract = (a, b) => a - b;

const multiply = (a,b) => a * b;

const divide = (a, b) => a / b;

const a = (c,d,e) => c + d + e;

const fibonnacci = (n) => {
  if (n <= 1) {
      return n;
  }
  return fibonnacci(n - 1) + fibonnacci(n - 2);
}
