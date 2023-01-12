const arr = [2, 1, 6, 5, 8];
const n = 6;
function removeArrayElement(list, Digit) {
    while (list.includes(Digit)) {
        const indexOfRemove = list.indexOf(Digit);
        list.splice(indexOfRemove, 1)
    }
}
removeArrayElement(arr, n)
console.log(arr);