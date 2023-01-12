let students = [
    {
        name: 'Сэд-Эрдэнэ',
        age: 19,
        gender: "male"
    },
    {
        name: 'Индра',
        age: 19,
        gender: "female"
    },
    {
        name: 'Хатнаа ',
        age: 21,
        gender: "male"
    },
    {
        name: 'Тэмүүлэн',
        age: 23,
        gender: "male"
    },
    {
        name: 'Намуун',
        age: 23,
        gender: "female"
    },
]
function findGender(data, gender) {
    let count = 0
    for (let i = 0; i < data.length; i++) {
        count++
    }
    return count;
}
const female = findGender(data`female`)
const male = findGender(data`male`)
console.log(`Niit: ${female} emegetei ${male} eregtei huuhd bn `)
