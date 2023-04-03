const winPuzzle = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 0],
];
const puzzle = [
    [4, 5, 6],
    [7, 0, 8],
    [3, 2, 1],
];

const table = document.querySelector(`#tables`)
const tbody = document.createElement(`tbody`)
for (let row = 0; row < puzzle.length; row++) {
    const tr = document.createElement(`tr`)
    for (let col = 0; col < puzzle.length; col++) {
        const td = document.createElement(`td`)
        td.setAttribute(`y`, col)
        td.setAttribute(`x`, col)
        tr.appendChild(td)
    }
    tbody.appendChild(tr)
}
table.append(tbody)