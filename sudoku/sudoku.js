const sudoku = [
    [5, 0, 9, 0, 0, 0, 4, 0, 0],
    [7, 0, 8, 3, 0, 4, 9, 0, 0],
    [6, 0, 1, 0, 0, 0, 7, 3, 0],
    [4, 6, 2, 5, 0, 0, 0, 0, 0],
    [3, 8, 5, 7, 2, 0, 6, 4, 9],
    [1, 0, 7, 4, 0, 8, 2, 0, 0],
    [2, 0, 0, 1, 0, 0, 0, 0, 4],
    [0, 0, 3, 0, 4, 0, 0, 8, 7],
    [0, 7, 0, 0, 5, 3, 0, 0, 6],
]



const tableTarget = document.querySelector('#tableTarget')
const tbody = document.createElement(`tbody`)

let chosenTd;

for (let row = 0; row < sudoku.length; row++) {
    const cols = sudoku[row]
    const tr = document.createElement('tr')
    for (let col = 0; col < cols.length; col++) {
        const td = document.createElement('td')
        td.setAttribute(`x`, row)
        td.setAttribute(`y`, col)
        if (cols[col] !== 0) {
            td.className = `default`
            td.innerHTML = cols[col]
        } else {
            td.addEventListener('click', function (e) {
                if (chosenTd) {
                    chosenTd.classList.remove('active')
                }
                chosenTd = e.target;
                e.target.classList.add(`active`)
            })
        }
        tr.appendChild(td);
    }
    tbody.appendChild(tr)
}
tableTarget.appendChild(tbody);

const validKeys = `0123456789`;

document.addEventListener(`keypress`, function (e) {
    if (chosenTd) {
        const key = e.key
        if (validKeys.includes(key)) {
            if (key === `0`) {
                chosenTd.innerHTML = ''
            } else {
                chosenTd.innerHTML = key
            }
        }
        const x = Number(chosenTd.getAttribute(`x`))
        const y = Number(chosenTd.getAttribute(`y`))
        const input = Number(key)
        sudoku[x][y] = input

        const rowDuplicates = isDuplicatedByRow(x, y, input);
        const colDuplicates = isDuplicatedByCol(x, y, input);
        const cellDuplicates = isDuplicatedByCell(x, y, input);
        const hasError = rowDuplicates || colDuplicates || cellDuplicates;
        if (hasError) {
            chosenTd.classList.add('error');
        } else {
            chosenTd.classList.remove('error');
        }
    }

    //hevtee tenhlegiin daguu shalgah
    function isDuplicatedByRow(x, y, input) {
        let duplicated = false;
        for (let i = 0; i < 9; i++) {
            if (i !== y && !duplicated && sudoku[x][i] !== 0) {
                duplicated = input === sudoku[x][i]
            }
        }
        return duplicated
    }
    //bosoo tenhlegiin daguu shalgah
    function isDuplicatedByCol(x, y, input) {
        let duplicated = false;
        for (let i = 0; i < 9; i++) {
            if (i !== x && !duplicated && sudoku[i][y] !== 0) {
                duplicated = input === sudoku[i][y]
            }
        }
        return duplicated
    }

    //3 x 3 nud
    function isDuplicatedByCell(x, y, input) {
        const cellXStart = x - (x % 3);
        const cellYStart = y - (y % 3);
        let duplicated = false;
        for (let row = cellXStart; row < cellXStart + 3; row++) {
            for (let col = cellYStart; col < cellYStart + 3; col++) {
                if (duplicated) return duplicated;
                if (row !== x && col !== y) {
                    duplicated = input === sudoku[row][col];
                }
            }
        }
    }
