// document.getElementById("helloText").innerHTML = "Hello World!"
// const items = document.getElementsByClassName("dummy")
// for (let i = 0; i < items.length; i++) {
//     items[i].innerHTML = `Hello dummy div ${i + 1}`
// }
// document.getElementById("target").innerHTML = `<p>Hello</p>`;
// const targetEl = document.getElementById("target")
// const pTag = document.createElement("p");
// pTag.className = "demo"
// pTag.innerHTML = "Created by element";
// targetEl.appendChild(pTag)

// const bTag = document.createElement("b")
// bTag.innerHTML = "This is bold el"
// pTag.appendChild(bTag);

// targetEl.appendChild(pTag)

// document.getElementById(`test`).style.color = "#ff0000"
// document.getElementById(`test`).style.fontSize = "24px"
// document.getElementById(`test`).style.textAlign = "center"

// document.querySelector(`html`).style.backgroundColor = `rgb(${Math.round(Math.random() * 255)}, ${Math.round(Math.random() * 255)}, ${Math.round(Math.random() * 255)})`



let myButton = document.querySelector("html")

function changeBackgroundColor() {
    myButton.style = "background-color: green"
}
// myButton.addEventListener("click", changeBackgroundColor())
myButton.addEventListener("click", changeBackgroundColor)