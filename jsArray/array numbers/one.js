let arrayoOfNumbers = [43, 56, 23, 89, 88, 90, 99, 652, 15, 290, 11]
let nemeh = 0;
for (let i = 0; i < arrayoOfNumbers.length; i++) {
    nemeh += arrayoOfNumbers[i]
}
console.log(nemeh)
let ihToo = 0;
for (let i = 0; i < arrayoOfNumbers.length; i++) {
    if (arrayoOfNumbers[ihToo] < arrayoOfNumbers[i])
        ihToo = i
}
console.log(arrayoOfNumbers[ihToo])
let bagaToo = 0;
for (let i = 0; i < arrayoOfNumbers.length; i++) {
    if (arrayoOfNumbers[bagaToo] > arrayoOfNumbers[i])
        bagaToo = i
}
console.log(arrayoOfNumbers[bagaToo])
console.log(arrayoOfNumbers)

for (let i = arrayoOfNumbers.length - 1; i >= 0; i--) {
    arrayoOfNumbers[i + 1] = arrayoOfNumbers[i];
}
arrayoOfNumbers[0] = 8
console.log(arrayoOfNumbers)
arrayoOfNumbers[arrayoOfNumbers.length] = 10
console.log(arrayoOfNumbers)