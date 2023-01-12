// const student = {
//     lastname: `Odgerel`,
//     firstname: `Sed-Erdene`,
//     age: 17,
//     hobby: [`video games`, `watching streams`, `anime`, `panda`]
// }
// console.log(`${student.lastname} овогтой ${student.firstname} нь ${student.age} настай`);
//     console.log(student[`age`])





const data = [
    { gender: `ermegtei`, firstname: `Dorj`, lastname: `Bat`, point: `80`, age: 99 },
    { gender: `emegtei`, firstname: `Dorjko`, lastname: `Batga`, point: `70`, age: 24 },
    { gender: `eregtei`, firstname: `Dotoo`, lastname: `Basar`, point: `60`, age: 34 },
    { gender: `ermegtei`, firstname: `Doogii`, lastname: `Bangir`, point: `50`, age: 88 },
    { gender: `ermegtei`, firstname: `puntsag`, lastname: `Banhar`, point: `40`, age: 13 },
    { gender: `emegtei`, firstname: `minecraft`, lastname: `bambar`, point: `30`, age: 14 },
    { gender: `Goku`, firstname: `GOKUUUUUUU`, lastname: `Goku`, point: `90`, age: 1952345123123123123 },
    { gender: `huisgu`, firstname: `CHiberushka`, lastname: `batushka`, point: `95`, age: 18 },
]
//huis
//nassaarn
function getCoundByGender(list, gender) {
    let count = 0;
    for (let i = 0; i < list.length; i++) {
        if (list[i].gender === gender) {
            count++;
        }
    }
    return count;
}
const emegteiCount = getCoundByGender(data, `emegtei`);
const eregteiCount = getCoundByGender(data, `eregtei`);
const ermegteiCount = getCoundByGender(data, `ermegtei`);
const gokuCount = getCoundByGender(data, `Goku`);
console.log(`Niit ${emegteiCount} emegtei ${eregteiCount} eregtei ${ermegteiCount} ermegtei ${gokuCount} goku bn `)

function getCountByFieldValueRange(list, key, min, max) {
    let count = 0;
    for (let i = 0; i < list.length; i++) {
        if (list[i][key] > min && list[i][key] < max) {
            count++
        }
    }
    return count;
}
const childrenCount = getCountByFieldValueRange(data, `age`, 0, 18);
const youth = getCountByFieldValueRange(data, `age`, 18, 30);
const adult = getCountByFieldValueRange(data, `age`, 30, 55);
const elder = getCountByFieldValueRange(data, `age`, 55, 200);
const goku = getCountByFieldValueRange(data, `age`, 123152512412, 11231231241254124512525)
console.log(`Niit:${childrenCount} huuhed, ${youth} zaluuchuud, ${adult} dundaj ergem nasniihan, ${elder} ahmad nastan, ${goku} goku bn, `)
const totalA = getCountByFieldValueRange(data, `score`, 90, 101)
