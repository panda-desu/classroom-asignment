let n = parseInt(prompt("n тоог оруулна уу: "));
let fibonacci = [1, 1];
for (let i = 2; i < n; i++) {
  fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
}
console.log(fibonacci.join(" "));
