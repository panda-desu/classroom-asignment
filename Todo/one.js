const todoTarget = document.querySelector('#todoTarget')
const testTarget = document.querySelector('#testTarget')
const inputTarget = document.querySelector('#inputTarget')

console.log(todoTarget.childNodes)
const firstli = todoTarget.querySelectorAll('')[0]
console.log(firstli)
// parentNode.removechild(childNode);
// firstli.parentNode.removechild(firstli)

function createCB() {
    const chechbox = document.createElement("input")
    chechbox.type = "checkbox"
    chechbox.addEventListener("click", function (e) {
        if (e.target.checked) {
            e.target.nextSiblingElement.style.textDecoration = "line-through";
        } else {
            e.target.nextSiblingElement.style.textDecoration = "none"
        }
    })


}
function createSpan(text) {
    const span = document.createElement("span")
    span.innerHTML = text;
    return span
}

function createBtn(text) {
    const btn = document.createElement("button")

}

function CreateLi(text) {
    const li = document.createElement('li')
    li.appendChild(createCB())
}

inputTarget.addEventListener('keypress', function (e) {
    if (e.key === "Enter") {
        CreateLi(e.target.value)
        e.target.value
    }
});
const firstCB = document.querySelectorAll('input[type="chechbox"]')[0]
firstCB.addEventListener("click", function (e) {
    console.log(e.target.checked)
})