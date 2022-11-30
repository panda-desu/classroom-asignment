let n = 123; let a; let b; let c;
c = n % 10;
b = (((n - c)) % 100) / 10;
a = (n - (n % 100)) / 100;
console.log(a + b + c)


