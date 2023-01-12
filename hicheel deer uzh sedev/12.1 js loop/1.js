// const n = 5;
// let i = 0;
// let sum = ``;
// let result = ``;
// while (i < n) {
//     sum += '* '
//     i++;
// }
// i = 0;
// while (i < n) {
//     result += '\n' + sum
//     i++
// }
// console.log(result)



// let n = 5;
// let i = 0;
// let sum = ``;
// let result = ``;
// while (i < n) {
//     sum += '* '
//     result += sum + "\n";
//     i++;
// }
// console.log(result)


// const n = 10;
// let i = 0;
// let row = ``
// while (i < n) {
//     let j = 0;
//     while (j <= i) {
//         row += j + ` `
//         j++;
//     }
//     row += `\n`;
//     i++;
// }
// console.log(row)


// const n = 10;
// let i = 0;
// let row = ``
// while (i < n) {
//     let j = n - 1;
//     while (j >= i) {
//         row += j + ` `
//         j--;
//     }
//     row += `\n`;
//     i++;
// }
// console.log(row)


//anhni too
const n = 11;
let i = 2;
let isPrime = true;

while (i <= n / 2) {
    if (!isPrime) {
        isPrime = n % i !== 0;
        i++;
    } else {
        i = n;
    }
}
console.log(isPrime);