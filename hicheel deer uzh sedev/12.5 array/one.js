let names = ['Эрмүүн', 'Тэмүүлэн', 'Өсөхбаяр', 'Сүхбат', 'Тэмүүлэн', 'Ганболд ', 'амур', 'Дөлгөөн', 'Намуунбайгаль ', 'Балжинням', 'Ананд', 'Одбаяр', 'Наранцэцэг', 'Аймерген', 'Тэнгисболд', 'Биндэръяа', 'Индра', 'Сэд - Эрдэнэ', 'Жавхлант', 'Далайхүү']
let longIndex = 0;
for (let i = 1; i < names.length; i++) {
    if (names[longIndex].length < names[i].length)
        longIndex = i;
}
console.log(`${names[longIndex]} нь хамгийн урт нэртэй `)
const result = [100, 89, 79, 69, 59];
result[result.length] = 1
let resultSum = 0;
for (let i = 0; i < result.length; i++) {
    if (resultSum += result[i]);

}
const avg = resultSum / result.length
console.log(Math.round(avg))
let now