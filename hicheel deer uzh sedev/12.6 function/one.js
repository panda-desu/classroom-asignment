// function pyramid(rowLength) {
//     let result = ''
//     for (let i = 1; i < rowLength; i++) {
//         for (let j = 0; j < rowLength - i; j++) {
//             result += ` `;
//         }
//         for (let j = 0; j < i; j++) {
//             result += `* `;

//         }
//         result += '\n'
//     }
//     console.log(result)
// }
// pyramid(10)




// let register = prompt('registeriin dugaara oruulna uu')
// function findGender(huis) {
//     return huis.substring(8, 9) % 2 == 0 ? 'Emegtei' : "Eregtei"
// }

// function findDay(day) {
//     return day.substring(6, 8)
// }

// function findBirthDay(reg) {

//     const day = reg.substr(6, 2);

//     let isBornInTwenties = isBornInTwenties(reg[4]);

//     const fifthDigit = reg[4];
//     if (fifthDigit === 3 || fifthDigit === 2)
//         isBornInTwenties = true;

//     let month = Number(reg.substr(4, 2));
//     if (isBornInTwenties)
//         month -= 20;

//     let year = reg.substr(2, 2);
//     if (isBornInTwenties) {
//         year = 20 + year;
//     } else {
//         year = 19 + year;
//     }
//     year = Number(year);

//     return (`${year}-${month}-${day}`);
// }
// console.log(findBirthday(register), findDay(register), findGender(register))